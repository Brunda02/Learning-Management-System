const { ObjectID } = require("bson");
const mongoose =require("mongoose")
const Schema=mongoose.Schema
const Teachers=require("./Teacher")

const CoursesSchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    teacher:{
        type: ObjectID,
        ref:Teachers,
        required:true
        
    },
    course_mins:{
        type:Number,
        required:true
    },
    videos_count:{
        type:Number,
        required:true
    },
    launch_date:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    }


});
module.exports=Course=mongoose.model("Courses",CoursesSchema)