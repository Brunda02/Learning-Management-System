import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logout from "../screens/Logout";

const Navbar1 = () => {
  const navigate = useNavigate();
  const do_logout = () => {
    localStorage.setItem("authToken","");
    alert("Logout successful!")
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/courses")}
          >
            XR ACADEMY
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/addcourse")}>
            Add Course
          </Button>
          <Button color="inherit" onClick={() => navigate("/addteacher")}>
            Add Teacher
          </Button>
          <Button color="inherit" onClick={() => navigate("/courses")}>
            Go to Home
          </Button>
          <Button color="inherit" onClick={() => do_logout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar1;
