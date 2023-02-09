import express from "express";
import bycrypt from "bcrypt";
import multer from "multer";
import jwt from "jsonwebtoken";
import user from "../model/User.js";

export const login = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const userDetail = await user.findOne({ email: email });
    if (!userDetail) {
      return res.status(400).json({ message: "User doesnot exist" });
    }
    const isMatch = await bycrypt.compare(password, userDetail.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credential" });
    }
    const token = jwt.sign({ userDetail }, "12345");
    delete userDetail.password;

    res.status(200).json({
      token,
      fullname: userDetail.fullname,
      email: userDetail.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req, res) => {
  console.log(req.body);
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "Please enter all the field" });
    } else {
      try {
        const salt = await bycrypt.genSalt();
        const passwordHash = await bycrypt.hash(password, salt);
        const newUser = await user.create({
          fullname,
          email,
          password: passwordHash,
        });
        await newUser.save();
        res.status(201).json({ message: "successfully created" });
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const upload = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "Please uploda your file" });
  } else {
    console.log(req.file);
  }
};
