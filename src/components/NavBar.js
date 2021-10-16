import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
