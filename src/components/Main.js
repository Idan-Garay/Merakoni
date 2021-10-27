import React from "react";
import "./Main.css";
import Utilities from "./Utilities";
import Day from "./Day";

const Main = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <main className="main-section">
      <div className="left-content">
        <Utilities />
        <div className="days-section">
          {days.map((day, index) => (
            <Day day={day} key={index} />
          ))}
        </div>
      </div>
      <div className="right-content">calendar</div>
    </main>
  );
};

export default Main;
