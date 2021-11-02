import React, { useState } from "react";
import "./Day.css";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

const Day = ({ day }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  console.log(day);

  return (
    <div className="day">
      <div className="top flex-no-wrap baseline">
        <Link to="/day">
          <h2>[Highlight of the Day]</h2>
        </Link>
        <ul className="dropdown-menu">
          <FaEllipsisV onClick={toggle} className="point" />
          {show ? (
            <div>
              <li className="point">Edit</li>
              <li className="point">Delete</li>
            </div>
          ) : null}
        </ul>
      </div>
      <div className="overview"></div>
      <div className="little-details">
        <p>[n] tasks</p>
        <p>{day.name}</p>
      </div>
    </div>
  );
};

export default Day;
