import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Merakoni</h1>
      <ul>
        <NavLink to="/" activeClassName="selected">
          <li>
            <a href="#">Home</a>
          </li>
        </NavLink>
        <NavLink to="/history">
          <li>
            <a href="#">History</a>
          </li>
        </NavLink>
        <NavLink to="/report">
          <li>
            <a href="#">Report</a>
          </li>
        </NavLink>
        <NavLink to="/settings">
          <li>
            <a href="#">Settings</a>
          </li>
        </NavLink>
      </ul>
      <div className="profile">profile</div>
    </nav>
  );
};

export default NavBar;
