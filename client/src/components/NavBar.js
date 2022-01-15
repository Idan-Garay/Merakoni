import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Merakoni</h1>

      <ul>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <li>Dashboard</li>
        </NavLink>
        {/* <Link to="/history">
          <li>History</li>
        </Link> */}
        <NavLink
          to="/report"
          style={{ textDecoration: "none" }}
          className={(isActive) => (isActive ? "link-active" : "link-inactive")}
        >
          <li>Report</li>
        </NavLink>
        {/* <Link to="/settings">
          <li>Settings</li>
        </Link> */}
        <NavLink
          to="/tasks"
          style={{ textDecoration: "none" }}
          className={(isActive) => (isActive ? "link-active" : "link-inactive")}
        >
          <li>Task</li>
        </NavLink>
        <NavLink
          to="/badges"
          style={{ textDecoration: "none" }}
          style={(isActive) => ({
            color: isActive ? "#fa8172" : "black",
          })}
        >
          <li>Badges</li>
        </NavLink>
      </ul>
      <div className="profile"></div>
    </nav>
  );
};

export default NavBar;
