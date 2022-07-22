import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../templates/Navbar";
import Navbar1 from "../templates/Navbar1";
import { Button, Card, CardContent, CardHeader, Container, Grid, TableRow, TextField, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./courses.css";
import Footer from "../templates/Footer";

const Page = (props) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4040/courses/",
      {
        method: "GET",
      })
      .then(response => response.json())
      .then(jsonified_response => {
        console.log(jsonified_response);
        setItems(jsonified_response["array"]);
        // console.log(items);
      })

  }, [])
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    }
  }))

  function routechange(name) {
    console.log(name)
    localStorage.setItem("key", name)
    navigate("/coursemodules");
  }

  return (
    <div>
      {localStorage.getItem("authToken") ? (
        <Navbar1 /> ) : (
        <Navbar />
        )}
      
     
        <div className="courses-screen" style={{
            backgroundImage: 'url("https://thumbs.dreamstime.com/b/online-learning-course-concept-student-using-computer-laptop-white-blank-screen-training-online-writing-lecture-note-151486217.jpg")',
            backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: "no-repeat"
        }}>
          <Row>
            {
              items.map(
                (item) => (
                 
                  <Col key={item._id} xs={12} md={4} lg={3}>
                    <Card sx={{ maxwidth: 500 }} className="cards">
                      <CardContent>
                        <CardHeader
                          title={item.name}
                          subheader={item.description}
                        />
                        <TextField
                          id="standard-basic"
                          label="No.of Videos "
                          name="name"
                          inputProps={
                            { readonly: true, }
                          }
                          value={item.videos_count}
                        />
                        <TextField
                          id="standard-basic"
                          label="Course Duration(mins)"
                          name="name"
                          inputProps={
                            { readonly: true, }
                          }
                          value={item.course_mins}
                        />
                        {localStorage.getItem("authToken") ? (
                          <Button onClick={() => 
                        
                            routechange(item._id)}>
                            Course Modules
                          </Button>):
                          (<div></div>)
                          }
                        
                        <Button>Enroll Course</Button>
                      </CardContent>
                    </Card>
                  </Col>
                  
                )
              )
            }
          
          </Row>
        </div>
        <Footer />
    </div >
  );
};

export default Page;
