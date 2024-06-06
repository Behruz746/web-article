import { configureStore } from "@reduxjs/toolkit";
import AuthReduce from "../slice/auth";

export default configureStore({
  reducer: { auth: AuthReduce },
  devTools: process.env.NODE_ENV !== "production", // redux dev tool uchun
});
