const ErrorResponse = require('../utils/errorResponse');
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    console.log(err);
    if (err.code === 11000) {
        const message = "Duplicate field value";
        error = new ErrorResponse(message, 400);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(error.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }
    // } else if (error.name === 'JsonWebTokenError') {
    //     const message = `Invalid token`;
    //     errorResponse = new ErrorResponse(message, 401);
    // } else if (error.name === 'TokenExpiredError') {
    //     const message = `Token expired`;
    //     errorResponse = new ErrorResponse(message, 401);
    // } else if (error.name === 'InvalidCredentialsError') {
    //     const message = `Invalid credentials`;
    //     errorResponse = new ErrorResponse(message, 401);
    // } else {
    //     const message = `Something went wrong`;
    //     errorResponse = new ErrorResponse(message, 500);
    // }
    res.status(error.statusCode || 500).json({ success: false, error: error.message || "Server Error" });
}
module.exports = errorHandler;