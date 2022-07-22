import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate , Link} from "react-router-dom";
import "./LoginScreen.css";
import Navbar from '../templates/Navbar';
import Footer from "../templates/Footer";

const LoginScreen = ({ props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const resetInputs = () => {
    setPassword("");
    setEmail("");
  
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const newUser = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/auth/login", newUser)
      .then((response) => {
        alert("Logged in" );
        console.log(response.data);
        localStorage.setItem("authToken", response.data.token);
        window.location.assign("/courses")
      })
      .catch((error) => {
        alert("Invalid credentials");

      });
      

    resetInputs();
  };
  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     history.push("/");
  //   }
  // }, [history]);
  // const loginHandler = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:4000/auth/login",
  //       { email, password },
  //       config
  //     );
  //     localStorage.setItem("authToken", data.token);

  //     history.push("/");
  //   } catch (error) {
  //     setError(error.response.data.error);
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }

  // };

  return (
    <div>
      <Navbar />
      <div className="login-screen" style={{
      backgroundImage: 'url("https://media.istockphoto.com/photos/modern-keyboard-wih-blue-log-in-button-picture-id638149354?k=20&m=638149354&s=612x612&w=0&h=bkTvrKEv4ENMymYn-3FLMDBR9BQc3ZqVEO_rrDAm4GQ=")',
      backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: "no-repeat"
    }} >
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{" "}
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default LoginScreen;
