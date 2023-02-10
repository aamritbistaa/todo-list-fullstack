import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authslice";
import { STATUSES } from "../redux/todoslice";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // const [userdetail, setUserdetail] = useState({ email: "", password: "" });
  const [loginDetails, setLoginDetails] = useState({
    email: "asdk@mail.com",
    password: "test",
  });
  const navigate = useNavigate();
  const { isUserRegister, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOnChange = (e, type) => {
    setLoginDetails({
      ...loginDetails,
      [type]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    dispatch(loginUser({ email, password }));
  };

  const { email, password } = loginDetails;

  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/todo", { replace: false });
    }
  }, [isLoggedIn]);

  if (status == STATUSES.LOADING) {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }
  if (status == STATUSES.IDLE && isUserRegister == true) {
    return (
      <div className="loading">
        <Alert>Success</Alert>
      </div>
    );
  }
  if (status == STATUSES.ERROR) {
    return (
      <div className="loading">
        <Alert>ERROR</Alert>
      </div>
    );
  }

  return (
    <div className="login">
      <div className="login-container">
        Login page
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            onChange={(e) => handleOnChange(e, "email")}
          />
          <input
            placeholder="Password"
            onChange={(e) => handleOnChange(e, "password")}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
