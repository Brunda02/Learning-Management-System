var express = require("express");
var router = express.Router();

const Courses = require("./Course")
const Teachers = require("./Teacher")

router.post("/addteacher", (req, res) => {
    console.log("doing")
    let teacher = new Teachers(req.body);
    teacher.save()
        .then(output => {
            console.log("Done")
            res.status(200).json({ status: "Teacher registered!" });
        })
        .catch(err => {
            console.log(err)
            res.status(400).json();
        });
});

module.exports = router ;