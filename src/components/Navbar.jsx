import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SammiLogo } from "../constans";
import { logOut } from "../slice/auth";
import { removeItem } from "../helpers/persistence-storage";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logOut());
    removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="col-md-3 mb-2 mb-md-0">
          <NavLink
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <SammiLogo width={50} height={50} />
          </NavLink>
        </div>

        <div className="col-md-3 d-flex align-items-center gap-2 w-auto text-end">
          {loggedIn ? (
            <>
              <button className="btn btn-outline-success user-btn">
                {user.username}
              </button>
              <button
                className="btn btn-outline-danger user-btn"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="login" className="navigat__link">
                Login
              </NavLink>
              <NavLink to="register" className="navigat__link">
                Sign-up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
