import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authslice";

const Login = () => {
  // const [userdetail, setUserdetail] = useState({ email: "", password: "" });
  const [loginDetails, setLoginDetails] = useState({
    email: "asdk@mail.com",
    password: "test",
  });
  const dispatch = useDispatch();

  const handleOnChange = (e, type) => {
    setLoginDetails({
      ...loginDetails,
      [type]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const { email, password } = loginDetails;

  return (
    <div>
      Login page
      <form onSubmit={handleSubmit}>
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
  );
};

export default Login;
