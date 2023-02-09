import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authslice";

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
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
  const handleSubmit = () => {
    dispatch(registerUser(userDetail));
  };

  return (
    <div>
      Register
      <div>
        <form onSubmit={handleSubmit}>
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
