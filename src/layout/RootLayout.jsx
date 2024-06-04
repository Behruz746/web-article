import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
