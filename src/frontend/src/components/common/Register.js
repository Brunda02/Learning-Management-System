// // import { useNavigate } from "react-router-dom";
// // import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// // import Toolbar from "@mui/material/Toolbar";
// // import Button from "@mui/material/Button";
// // import Typography from "@mui/material/Typography";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Register.css";
// import "../styles/w3.css"
// import "../styles/icons.js"
// // import Grid from "@mui/material/Grid";
// // import TextField from "@mui/material/TextField";

// import React from 'react';

// const Coursedetails = (props) => {

//   const [items, setItems] = useState([]);
//   let t = localStorage.getItem("key")

//   let newUser = {
//     courseid: t,
//   };
//   console.log(newUser.courseid)


//   const onChangeUser = (event) => {
//     setItems(event.target.value);
//   }

//   useEffect(() => {
//     axios
//     .get("http://localhost:4000/topics/"+newUser.courseid, newUser)
//       .then((response) => {
//         console.log(response.data.topicCollection);
//         setItems(response.data.topicCollection);
//         alert("Success!!!");

//       });

//   }, []);



//   return (
//     <div class="w3-container w3-center"> 
//       <h1>Modules in this course</h1>
//       {items.map((item, index) => {
//        return (
//        <ol>
//            <h2>Module {index}</h2>
//            <br></br>
//            <i class="fas fa-play-circle fa-2x">{item.topicName}</i> <br></br>
//             The video is of duration {item.topicDuration} minutes <br></br>
//             <br></br>
//             <p><b><a href={item.topicURL} target="_blank">Click here to start the video of this module</a></b></p>
//             <br></br>
//            {item.index} 
//            <br></br>
           
//       </ol>
//       );
//       })}

//     </div>

//   );

// };

// export default Coursedetails;