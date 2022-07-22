const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
let Topic = require("./models/topic.model")

const app = express();
app.use(cors());
app.use(express.json());

mongooseConnectionString = "mongodb+srv://admin:admin@cluster0.k9cmb.mongodb.net/topicsDB?retryWrites=true&w=majority"
mongoose.connect(mongooseConnectionString);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("connection to mongoose established from topics microservice")
});

app.get("/topics/:courseid", (req, res) => {
    queryCourseID = req.params.courseid;
    Topic.find({courseID:queryCourseID})
    .then(topicCollection => {
        if(!topicCollection.length){
            return res.status(400).json({status: "no topic for this course"})
        }
        else{
            console.log(topicCollection);
            return res.status(200).json({status: "there were topic(s) found for this course", topicCollection: topicCollection});
        }
    })
    .catch(err => res.status(500).json({ error: + err }));
})

app.listen(2000, () => {
    console.log("topics microservices started on port 2000");
});
//the route should be /courses/course id
//in the body of the repsonse, dont return the course id again lmao