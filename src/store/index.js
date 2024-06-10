import { configureStore } from "@reduxjs/toolkit";
import AuthReduce from "../slice/auth";
import ArticleReduce from "../slice/articel";

export default configureStore({
  reducer: { auth: AuthReduce, article: ArticleReduce },
  devTools: process.env.NODE_ENV !== "production", // redux dev tool uchun
});
