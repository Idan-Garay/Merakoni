import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Merakoni</h1>

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
      <div className="profile">profile</div>
    </nav>
  );
};

export default NavBar;
