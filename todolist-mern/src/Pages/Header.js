import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Tab, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      localStorage.removeItem("token");
      setToken("");
    }
  });
  console.log(token, "p");

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography>MERN AUTH</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            {!token ? (
              <>
                <Tab to="/login" LinkComponent={Link} label="Login" />
                <Tab to="/register" LinkComponent={Link} label="Register" />
              </>
            ) : (
              <>
                <Tab to="/logout" LinkComponent={Link} label="Logout" />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
