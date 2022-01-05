import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Merakoni</h1>

      <ul>
        <Link to="/">
          <li>Dashboard</li>
        </Link>
        {/* <Link to="/history">
          <li>History</li>
        </Link> */}
        <Link to="/report">
          <li>Report</li>
        </Link>
        {/* <Link to="/settings">
          <li>Settings</li>
        </Link> */}
        <Link to="/tasks">
          <li>Task</li>
        </Link>
        <Link to="/badges">
          <li>Badges</li>
        </Link>
      </ul>
      <div className="profile"></div>
    </nav>
  );
};

export default NavBar;