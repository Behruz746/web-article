import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Home, Login, Register } from "./pages";
import "./app.scss";
import authService from "./service/auth";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "./helpers/persistence-storage";
import { signUserFailure, signUserSuccess } from "./slice/auth";

function App() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  const getUser = async () => {
    try {
      const { user } = await authService.getUser();
      dispatch(signUserSuccess(user));
      console.log(user);
    } catch (error) {
      console.log(error.response.data.errors);
      dispatch(signUserFailure(error.response.data.errors));
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
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
