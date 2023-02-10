import { postDataToBackend } from "./Apiservice";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
// import express from "express";
const LOCALURL = "http://localhost:8000";

export const login = async ({ email, password }) => {
  try {
    const data = { email, password };
    const response = await postDataToBackend(`${LOCALURL}/user/login`, data);
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
