import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../redux/todoslice";

const Logout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(setLogout);
    navigate("/login", { replace: false });
  }, [isLoggedIn]);
  return <div>Logout</div>;
};

export default Logout;
