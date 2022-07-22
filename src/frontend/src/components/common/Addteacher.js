import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar1 from '../templates/Navbar1';

const Teacher = (props) => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [first_logged_in, setFlogged] = useState("");
  const [last_logged_in, setLlogged] = useState("");
  const [rating, setRating] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeFlogged = (event) => {
    setFlogged(event.target.value);
  };
  const onChangeLlogged = (event) => {
    setLlogged(event.target.value);
  };
  const onChangeRating = (event) => {
    setRating(event.target.value);
  };

  // const onChangeSname = (event) => {
  //   setSname(event.target.value);
  // };



  const resetInputs = () => {
    setName("");
    setEmail("");
    setDate(null);
    setFlogged("");
    setLlogged("");
    setRating("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
      const newItem = {
        email: email,
        date: Date.now(),
        name: name,
        first_logged_in: first_logged_in,
        last_logged_in: last_logged_in,
        rating: rating,
      };

      // Adding the food items
      axios
        .post("http://localhost:4000/teachers/addteacher", newItem)
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
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
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
          label="first logged"
          variant="outlined"
          value={first_logged_in}
          onChange={onChangeFlogged}
        /> 
         </Grid>
         <Grid item xs={12}>
        <TextField
          label="last logged"
          variant="outlined"
          value={last_logged_in}
          onChange={onChangeLlogged}
        /> 
         </Grid>
        <Grid item xs={12}>
        <TextField
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={onChangeRating}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          ADD Teacher
        </Button>
      </Grid>
    </Grid>
    </div>
  );
}

export default Teacher;
