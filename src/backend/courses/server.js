const express=require("express")
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require("mongoose")
const PORT=4040

var CourseRouter = require("./courses");
var TeacherRouter = require("./teachers");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://admin:admin@cluster0.k9cmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})
/*app.get('/',(req,res)=>{
    res.send("Main endpoint")
})*/
app.use("/courses", CourseRouter);
app.use("/teachers", TeacherRouter);
app.listen(PORT,()=>{
    console.log("Up and running!")

})