import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Home, Login, Register } from "./pages";

function App() {
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
