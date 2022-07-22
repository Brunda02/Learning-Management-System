import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../templates/Footer';
import Navbar3 from '../templates/Navbar3';
// import Header from './Header';
// import Footer from './Footer';

export default class Player extends Component {

  constructor(props) {
    super(props);
    console.log("these are the props", this.props);
    this.state = {

      videoId: window.location.href.split("/")[4],
      videoData: {}
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:6969/video/${this.state.videoId}/data`);
      const data = await res.json();
      this.setState({ videoData: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App-header">
        {/* <Header /> */}
        <Navbar3 />
        <h2 style ={{textAlign:'center'}}>{this.state.videoData.name}</h2>
        <video controls muted autoPlay crossOrigin="anonymous" style = {{
          width: '100%',
          height: '70vh',
        }}>
          <source src={`http://localhost:6969/video/${this.state.videoId}`} type="video/mp4"></source>
          {/* <track label="English" kind="captions" srcLang="en" src={`http://localhost:6969/video/${this.state.videoId}/caption`} default></track> */}
        </video>
        <Footer />
      </div>
    )
  }
}
