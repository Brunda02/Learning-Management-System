import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import "./Home.css"
import Navbar1 from "../templates/Navbar1";
import Footer from "../templates/Footer";
const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   setName("Dass");
  // }, []);


  return (
    <div>
      {localStorage.getItem("authToken") ? (
        <Navbar1 />) : (
        <Navbar />
      )}
      <br></br>


      <div style={{
        textAlign: 'center',
        fontSize: '50px',
        width: '80%',
        height: '40vh',
        marginLeft: '10%',
        position: 'relative',
        transform: `translate('0%', '-20%')`,

        backgroundImage: "url('https://images.unsplash.com/photo-1493497029755-f49c8e9a8bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')",
      }} >

        <p style={{
          margin: '0',
          position: 'absolute',
          color: "white",
          top: '40%',
          left: '30%',
          // right:'40%',
        }}>Welcome to XR Academy</p>

      </div>
      <br></br>
      <br></br>
      <br></br>





      <div className="Home-screen" style={{
        textAlign: 'right',
        fontSize: '20px',
        fontStyle: 'revert',
        marginTop: '0px',
        marginLeft: '10%',
        height: 'inherit',
        width: '80%',
        marginRight: '10%',



        //backgroundImage: 'url("https://static.wixstatic.com/media/238c0e_cd94f0c2cad74780b791314376f0644c~mv2.jpg/v1/fit/w_380,h_380,q_90/238c0e_cd94f0c2cad74780b791314376f0644c~mv2.jpg")',
        //backgroundPosition: 'center',
        backgroundRepeat: "no-repeat"

      }}>
        <img src="https://static.wixstatic.com/media/238c0e_cd94f0c2cad74780b791314376f0644c~mv2.jpg/v1/fit/w_380,h_380,q_90/238c0e_cd94f0c2cad74780b791314376f0644c~mv2.jpg"></img>

        <br></br>

        <p style={{ marginLeft: '20px', marginRight: '100px' }}>
          <h1>About Us</h1><br></br>
          At XR Academy our mission is to provide our users with the best quality AR/VR content. We have a wide range of courses covering various AR/VR topics.
        </p>
      </div>
      <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
      <Footer />
    </div>
  )
};

export default Home;
