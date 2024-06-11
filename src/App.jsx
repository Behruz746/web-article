import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Home, Login, Register, ArticleDetail, CreateArticle } from "./pages";
import "./app.scss";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "./helpers/persistence-storage";
import { signUserFailure, signUserSuccess } from "./slice/auth";
import {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailure,
} from "./slice/articel";
import userData from "./service/data";

function App() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  const getUser = async () => {
    try {
      const { user } = await userData.getData("user");
      dispatch(signUserSuccess(user));
    } catch (error) {
      dispatch(signUserFailure(error));
    }
  };

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const { articles } = await userData.getData("articles");
      dispatch(getArticlesSuccess(articles));
    } catch (error) {
      console.log(error);
      dispatch(getArticlesFailure(error));
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) getUser();
    getArticles();
  }, [loggedIn]);

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <h1>Error</h1>,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/article/:id", element: <ArticleDetail /> }, // dinamik page
        { path: "/create-article", element: <CreateArticle /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
