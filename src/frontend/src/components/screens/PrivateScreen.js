import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import Navbar1 from "../templates/Navbar1";
import Navbar from "../templates/Navbar";
const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("http://localhost:4000/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    
    <div>
      {localStorage.getItem("authToken")!=null ? (<Navbar1 />
      ):(<Navbar />)}
      
      {privateData}</div>
  );
};

export default PrivateScreen;
