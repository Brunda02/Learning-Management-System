const express = require("express");
const router = express.Router();

const { register, forgotPassword, login, resetPassword } = require("../controllers/auth");
router.route("/register").post(register); // register route
router.route("/login").post(login); // login route
router.route("/forgotpassword").post(forgotPassword); // forgotpassword route
router.route("/resetpassword/:resetToken").post(resetPassword); // resetpassword route

module.exports = router;