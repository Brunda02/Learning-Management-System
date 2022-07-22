const crypto = require("crypto");
const Student = require('../models/Student.model');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
exports.register = async (req, res, next) => {
    console.log("called register?");
    const { name, email, password, phone } = req.body;
    try {
        const student = await Student.create({ name, email, password, phone });
        sendToken(student, 201, res);

    } catch (error) {
        // res.status(500).json({ success: false, error: error.message });
        next(error);
    }
}

exports.login = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        // res.status(400).json({ success: false, error: "Please provide email and password" }); 
        return next(new ErrorResponse("Please provide email and password", 400));

    }

    try {
        Student.findOne({ email }).select('+password')
            .then(student => {
                if (!student) {
                    // return res.status(401).json({ success: false, error: "No user found" });
                    return next(new ErrorResponse("No user found", 404));

                }
                student.matchPasswords(password)
                    .then(isMatch => {
                        if (isMatch) {
                            // res.status(200).json({ success: true, token: "randomtokenforloginsuccess", student: student });
                            console.log("login success")
                            sendToken(student, 200, res);
                        } else {
                            // res.status(401).json({ success: false, error: "Wrong password" });
                            return next(new ErrorResponse("Incorrect password", 401));
                        }
                    })
            });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        // next(error);
    }
}

exports.forgotPassword = (req, res, next) => {
    const { email } = req.body;
    try {
        Student.findOne({ email })
            .then(student => {
                if (!student) {
                    return next(new ErrorResponse("No user found with this email and so email wont be sent", 404));
                }
                const resetToken = student.getResetPasswordToken();
                (async function () {
                    student.save();
                })()
                const resetURL = `http://localhost:3000/passwordreset/${resetToken}`;
                const message = `
            <h1> You have requested a password reset </h1>
            <p>Please go to this link to reset your password: </p>
            <a href = ${resetURL} clicktracking=off> ${resetURL} </a>
            `;

                try {
                    (async function () {
                        await sendEmail({
                            email: student.email,
                            subject: "Password Reset",
                            text: message
                        });
                        res.status(200).json({ success: true, data: "Email sent" });
                    })()
                } catch (error) {
                    student.resetPasswordToken = undefined;
                    student.resetPasswordExpire = undefined;
                    (async function () {
                        await student.save();
                    })()
                    return next(new ErrorResponse("Email could not be sent", 500));
                }
            })
        // res.send("forgot password route");
    } catch (error) {
        //res.status(500).json({ success: false, error: error.message });
        next(error);
    }
}

exports.resetPassword = (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetPasswordToken).digest('hex');
    try {
        const student = Student.findOne(
            {
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() }
            });
        if (!student) {
            return next(new ErrorResponse("Invalid reset token", 400));
        }
        student.password = req.body.password;
        student.resetPasswordToken = undefined;
        student.resetPasswordExpire = undefined;
        (async function () {
            await student.save();

            res.status(201).json({ success: true, data: "Password reset successfully" });
        })()
    } catch (error) {
        next(error);
    }
}

const sendToken = (student, statusCode, res) => {
    const token = student.getSignedToken();
    return res.status(statusCode).json({ success: true, token });
}