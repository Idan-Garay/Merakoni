import React, { useContext, useState } from "react";
import "./Main.css";
import Utilities from "./Utilities";
import Day from "./Day";
import DayForm from "./DayForm";
import { useParams, Route } from "react-router-dom";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  // 0 - 6 from sunday(0) to saturday(6)
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <main className="main-section">
        <div className="left-content">
          <Utilities toggleModal={toggleModal} />
          <div className="days-section">
            {/* {days.map((day, index) => (
              <Day dayIdx={index} day={day} key={index} />
            ))} */}
          </div>
        </div>
        {showModal && <DayForm toggleModal={toggleModal} />}
        <div className="right-content">calendar</div>
      </main>
    </>
  );
};

export default Main;
