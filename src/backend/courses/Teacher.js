const mongoose =require("mongoose")
const Schema=mongoose.Schema

const CoursesSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    first_logged_in:{
        type:String,
        required:true
        
    },
    
    last_logged_in:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    }


});
module.exports=Teacher=mongoose.model("Teachers",CoursesSchema)