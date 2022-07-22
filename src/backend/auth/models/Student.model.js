const mongoose = require('mongoose');
const crypto = require("crypto");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide a username"]
    },
    email: {
        type: String,
        required: [true, "Please Provide an email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
        unique: true
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    }


});

StudentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

StudentSchema.methods.matchPasswords = function (password) {
    return bcrypt.compare(password, this.password);
}

StudentSchema.methods.getSignedToken = function(){
    return jwt.sign(
        {id: this._id}, 
        process.env.JWT_SECRET, 
        {expiresIn: process.env.JWT_EXPIRE}
    );
}

StudentSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordTokenExpire = Date.now() + 10 * 60 * 1000 ;
    return resetToken;
}

const Student = mongoose.model('table_students', StudentSchema);

module.exports = Student;