const { ObjectID } = require("bson");
var express = require("express");
var router = express.Router();
const mongoose = require("mongoose")
const Courses = require("./Course")
const Teachers = require("./Teacher")

router.get("/", (req, res) => {
    Courses.aggregate(
        [
            {
                $lookup: {
                    from: "teachers",
                    localField: "teacher",
                    foreignField: "_id",
                    as: "teacher"
                }
            },
            {
                $project: {
                    "name": 1,
                    "description": 1,
                    "teacher.name":1,
                    "course_mins": 1,
                    "videos_count": 1,
                    "launch_date": 1,
                    "rating": 1
                }
            }], (err, items) => {
                if (err) {
                    console.log(err);
                    res.json({ status: "Failed" });
                }
                else {
                    res.json({array:items});
                    console.log(items);
                }
            }
    )
});

router.post("/addcourse", (req, res) => {

    let course = new Courses(req.body);
    course.save()
        .then(output => {
            console.log("Done")
            res.status(200).json({ status: "Course registered!" });
        })
        .catch(err => {
            console.log(err)
            res.status(400).json();
        });
});

module.exports = router;