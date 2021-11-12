import React from 'react';
import '../App.css';

function SideNav() {
  return (
    <ul>
      <h1 className="title">Categories</h1>
      <li className="nav active" onClick={() =>  console.log("All")}>Tasks</li>
      <li className="nav" onClick={() =>  console.log("Label")}>Labels</li>
    </ul>
  )
}

export default SideNav