import React, { useState } from "react";
import "./Day.css";
import { FaEllipsisV } from "react-icons/fa";

const Day = ({ day }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="day">
      <div className="top flex-no-wrap baseline">
        <h2>[Highlight of the Day]</h2>
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
        <p>{day}</p>
      </div>
    </div>
  );
};

export default Day;
