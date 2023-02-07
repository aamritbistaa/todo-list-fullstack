import express from "express";
import {
  getTodo,
  postTodo,
  getTodoById,
  getTodoByIdAndUpdate,
  getTodoByIdAndDelete,
  deleteAllTodos,
  updateAllTodos,
} from "../controller/todolist-controller.js";

const route = express.Router();
route.get("/", getTodo);
route.post("/", postTodo);
route.get("/:id", getTodoById);
route.put("/:id", getTodoByIdAndUpdate);
route.delete("/:id", getTodoByIdAndDelete);
route.delete("/", deleteAllTodos);
route.post("/updateAll", updateAllTodos);

export default route;
