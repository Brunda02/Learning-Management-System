import { BrowserRouter, Routes, Route, Outlet, useParams } from "react-router-dom";
// import "./App.css";
import Typography from "@material-ui/core/Typography";
import Home from "./components/common/Home";
import UsersList from "./components/users/UsersList";
// import Coursedetails from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import Teacher from "./components/common/Addteacher";
import AddCourse from "./components/common/Addcourse";
import Page from "./components/common/course";
import Coursedetails from "./components/common/Coursemodules";
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPassword";
import ResetPasswordScreen from "./components/screens/ResetPassword";
import Player from "./components/common/Player";
import Logout from "./components/screens/Logout";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="logout" element={<Logout />} />
          {/* <Route path="courses" element={<Coursedetails />} /> */}
          <Route path="courses" element={<Page />} /> 
          <Route path="home" element={<Home />} /> 
          <Route path="addteacher" element={<Teacher />} />
          <Route path="addcourse" element={<AddCourse />} />
          <Route path="coursemodules" element={<Coursedetails />} />
          <Route path="forgotpassword" element={<ForgotPasswordScreen />} />
          <Route path="resetpassword" element={<ResetPasswordScreen />} />
          <Route path="player/:id" element={<Player  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
