import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";
import authslice from "./authslice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authslice,
  },
});

export default store;
