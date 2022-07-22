const jwt = require("jsonwebtoken");
const Student = require("../models/Student.model");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        token = req.headers.authorization.split(" ")[1]   
        console.log(token);
    }
    if(!token)
    {
        console.log("no token");
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }

    try
    { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const student = await Student.findById(decoded.id);
        if(!student)
        {
            return next(new ErrorResponse("no student found with this ID", 404))
        }
        req.student = student;
        next();
    }
    catch(error)
    {
        return next(new ErrorResponse("Not authorized to access this route", 401)); 
    }
}
