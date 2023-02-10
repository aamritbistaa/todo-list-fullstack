import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/authslice";
import { STATUSES } from "../redux/todoslice";

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { isUserRegister, status } = useSelector((state) => state.auth);
  const [userDetail, setUserDetail] = useState({
    fullname: "amrit",
    email: "aamritbistaa@gmail.com",
    password: "test",
  });
  const dispatch = useDispatch();

  const handleOnChange = (e, type) => {
    setUserDetail({
      ...userDetail,
      [type]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userDetail));
  };
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
    <div className="register">
      Register
      <div>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            onChange={(e) => handleOnChange(e, "fullname")}
          />
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

export default Register;
