import React from "react";
import { NavLink } from "react-router-dom";
import { SammiLogo } from "../constans";

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <NavLink
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <SammiLogo width={50} height={50} />
          </NavLink>
        </div>

        <div className="col-md-3 text-end">
          <NavLink to="login" className="navigat__link">
            Login
          </NavLink>
          <NavLink to="register" className="navigat__link">
            Sign-up
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
