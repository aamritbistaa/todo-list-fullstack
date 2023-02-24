import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/authslice";
import { STATUSES } from "../redux/todoslice";
import axios from "axios";
import { postDataToBackend } from "../api/Apiservice";

const LOCALURL = "http://localhost:8000";
const avator = require("../avator.png");

const Register = () => {
  // const [username, setusername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { isUserRegister, status } = useSelector((state) => state.auth);
  const [userDetail, setUserDetail] = useState({
    fullname: "amrit",
    email: "aamritbistaa@gmail.com",
    password: "test",
  });
  const [avatarIcon, setAvatarIcon] = useState(avator);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setAvatarIcon(e.target.files[0]);
  };
  console.log(avatarIcon);

  const handleOnChange = (e, type) => {
    // console.log(type, e);
    setUserDetail({
      ...userDetail,
      [type]: e.target.value,
    });
  };
  const { password, email, fullname } = userDetail;
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(userDetail));

    const formData = new FormData();
    formData.append("password", password);
    formData.append("email", email);
    formData.append("fullname", fullname);
    formData.append("myImage", avatarIcon);

    let config = {
      method: "post",
      url: `${LOCALURL}/user/register`,
      data: formData,
    };

    await axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
