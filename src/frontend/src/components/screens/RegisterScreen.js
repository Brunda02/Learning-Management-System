import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";

const RegisterScreen = ({ history }) => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const resetInputs = () => {
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/auth/register",
        {
          name,
          email,
          password,
          phone,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      alert("Registration successful!")
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      alert("error:"+String(error.response.data.error))
      setTimeout(() => {
        setError("");
        
      }, 5000);
    }
    resetInputs();
  };

  return (
    <div >
      <Navbar />
      <div className="register-screen" style={{
      backgroundImage: 'url("https://thumbs.dreamstime.com/b/register-21018078.jpg")',
      backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: "no-repeat"
    }} >
      {/* <img src="https://thumbs.dreamstime.com/b/register-21018078.jpg"/> */}
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number:</label>
          <input
            type="phone"
            required
            id="phone"
            placeholder="Enter Contact number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default RegisterScreen;
