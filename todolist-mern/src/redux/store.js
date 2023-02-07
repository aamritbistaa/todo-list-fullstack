import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";
// import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    // auth: authSlice,
  },
});

export default store;
