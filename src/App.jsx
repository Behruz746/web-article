import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import {
  Home,
  Login,
  Register,
  ArticleDetail,
  CreateArticle,
  EditeArticle,
  UserProfile,
} from "./pages";
import "./app.scss";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "./helpers/persistence-storage";
import { signUserFailure, signUserSuccess } from "./slice/auth";
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

  useEffect(() => {
    const token = getItem("token");
    if (token) getUser();
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
        { path: "/article/:slug", element: <ArticleDetail /> }, // dinamik page
        { path: "/create-article", element: <CreateArticle /> },
        { path: "/edite-article/:slug", element: <EditeArticle /> },
        { path: "/profile/:name", element: <UserProfile /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
