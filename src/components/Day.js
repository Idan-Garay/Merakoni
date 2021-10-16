import React from "react";
import "./Day.css";

const Day = ({ day }) => {
  return (
    <div className="day">
      <h2>[Highlight of the Day]</h2>
      <div className="overview"></div>
      <div className="little-details">
        <p>[n] tasks</p>
        <p>{day}</p>
      </div>
    </div>
  );
};

export default Day;
