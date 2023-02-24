import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../redux/authslice";

const Logout = () => {
  const { isLoggedIn, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("logout", "islogged in", isLoggedIn);

  useEffect(() => {
    console.log("logout component useefffect");
    localStorage.removeItem("token");
    dispatch(setLogout());
    navigate("/login", { replace: false });
  }, [isLoggedIn]);

  return <div>Logout</div>;
};

export default Logout;
