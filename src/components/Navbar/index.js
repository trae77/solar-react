import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        SolarCalc
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/good" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
          <Link
              to="/good"
              className={window.location.pathname === "/good" ? "nav-link active" : "nav-link"}
            >
              Good
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/bad"
              className={window.location.pathname === "/good" ? "nav-link active" : "nav-link"}
            >
              Bad
            </Link></li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
