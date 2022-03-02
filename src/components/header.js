import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <NavLink
                  className={
                    location.pathname === "/contact"
                      ? "nav-item active"
                      : "nav-item"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink className="nav-item" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink className="nav-item" to="/login">
                  Login
                </NavLink>
              </li>
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
