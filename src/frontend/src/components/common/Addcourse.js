import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Navbar1 from '../templates/Navbar1';


const AddCourse = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState("");
  const [teacher, setTeacher] = useState("");
  const [course_mins, setCoursem] = useState("");
  const [videos_count, setVideosc] = useState("");
  const [launch_date, setLaunchd] = useState("");
  const [rating, setRating] = useState("");


  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeTeacher = (event) => {
    setTeacher(event.target.value);
  };
  const onChangeCoursem = (event) => {
    setCoursem(event.target.value);
  };
  const onChangeVideosc = (event) => {
    setVideosc(event.target.value);
  };
  const onChangeLaunchd = (event) => {
    setLaunchd(event.target.value);
  };
  const onchangeRating = (event) => {
      setRating(event.target.event);
  }
  // const onChangeSname = (event) => {
  //   setSname(event.target.value);
  // };



  const resetInputs = () => {
    setName("");
    setTeacher("");
    setDate(null);
    setDescription("");
    setCoursem("");
    setVideosc("");
    setLaunchd("");
    setRating("");
    // setSname("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
      const newI = {
        name: name ,
        date: Date.now(),
        teacher: teacher,
        description: description,
        course_mins: course_mins,
        videos_count: videos_count,
        launch_date: launch_date,
        rating: rating,
      };

      // Adding the food items
      axios
        .post("http://localhost:4000/courses/addcourse", newI)
        .then((response) => {
            // if(response.data){
            console.log("sd");
            alert("Created\t" + response.data);
            console.log(response.data);
        });
    resetInputs();
  };

  return (
    <div>
    <Navbar1 />
    <Grid container align={"center"} spacing={2}>
    <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeName}
        />
      </Grid>
       <Grid item xs={12}>
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={onChangeDescription}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Teacher"
          variant="outlined"
          value={teacher}
          onChange={onChangeTeacher}
        /> 
         </Grid>
         <Grid item xs={12}>
        <TextField
          label="Course duration"
          variant="outlined"
          value={course_mins}
          onChange={onChangeCoursem}
        /> 
         </Grid>
         <Grid item xs={12}>
        <TextField
          label="Videos Count"
          variant="outlined"
          value={videos_count}
          onChange={onChangeVideosc}
        /> 
         </Grid>
         <Grid item xs={12}>
        <TextField
          label="Launch Date"
          variant="outlined"
          value={launch_date}
          onChange={onChangeLaunchd}
        /> 
         </Grid>
         <Grid item xs={12}>
        <TextField
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={onchangeRating}
        /> 
         </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          ADD COURSE
        </Button>
      </Grid>
    </Grid>
    </div>
  );
}

export default AddCourse;
