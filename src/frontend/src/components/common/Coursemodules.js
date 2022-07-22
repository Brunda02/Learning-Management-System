import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import "./Register.css";
import "../styles/w3.css"
import "../styles/icons.js"
import Navbar3 from '../templates/Navbar3';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Button from "@mui/material/Button";

export default class CourseDetails extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      items: []
    };
    console.log("reached in CourseDetails class ")
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:6969/videos');
      const data = await response.json();
      this.setState({ videos: [...data] });

      let t = localStorage.getItem("key")
      let newUser = {
        courseid: t,
      };

      const response2 = await fetch('http://localhost:2000/topics/' + newUser.courseid, newUser);
      const data2 = await response2.json();
      console.log("this is data2", data2)
      this.setState({ items: data2.topicCollection });
      // alert("my code ran lmao")
    } catch (error) {
      console.log(error);
    }
  }
  //<img src={`http://localhost:6969${video.poster}`} alt={video.name} />
  //<p>{video.duration}</p>
  render() {
    return (
      <div className="App-header" style={{
        textAlign: 'center',
        backgroundPosition: 'center',
      }}>
        <Navbar3 />
        {/* <Header /> */}
        <h1>Modules in this course</h1>
        <div className="container">
          <div className="col" style={{
            textAlign: 'center',
            fontSize: '30px',
            fontStyle: 'revert',
            backgroundPosition: 'center'
          }}>
            {this.state.videos.map(video =>
              <div className="col-md-4" key={video.id}  >
                <Link to={`/player/${video.id}`}>
                  <div className="card border-0" >
                    <Button variant="contained">
                      {video.name}
                    </Button>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
              
        <Footer />
      </div>
    )
  }
}