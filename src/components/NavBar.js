import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Merakoni</h1>
      <ul>
        <NavLink to="/" activeClassName="selected">
          <li>Home</li>
        </NavLink>
        <NavLink to="/history">
          <li>History</li>
        </NavLink>
        <NavLink to="/report">
          <li>Report</li>
        </NavLink>
        <NavLink to="/settings">
          <li>Settings</li>
        </NavLink>
      </ul>
      <div className="profile">profile</div>
    </nav>
  );
};

export default NavBar;
