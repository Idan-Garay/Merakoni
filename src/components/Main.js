import React, { useState } from "react";
import "./Main.css";
import Utilities from "./Utilities";
import Day from "./Day";
import DayForm from "./DayForm";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main className="main-section">
      <div className="left-content">
        <Utilities toggleModal={toggleModal} />
        <div className="days-section">
          {days.map((day, index) => (
            <Day day={day} key={index} />
          ))}
        </div>
      </div>
      {showModal && <DayForm toggleModal={toggleModal} />}
      <div className="right-content">calendar</div>
    </main>
  );
};

export default Main;
