import express from "express";
import { login, register } from "../controller/user-controller.js";
import { upload } from "../upload.js";

const route = express.Router();

route.post("/login", login);

route.post("/register", upload, register);

// route.post("/profile", upload);

export default route;
