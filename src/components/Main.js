import React, { useContext, useState } from "react";
import "./Main.css";
import Utilities from "./Utilities";
import Day from "./Day";
import DayForm from "./DayForm";
import { useParams, Route } from "react-router-dom";
import { TasksContext } from "../App";

const Main = () => {
  const { days, setDayId } = useContext(TasksContext);

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
            {days.map((day, index) => (
              <Day day={day} key={index} setDayId={setDayId} />
            ))}
          </div>
        </div>
        <div className="right-content">calendar</div>
        {/* {showModal && <DayForm toggleModal={toggleModal} />}  makee it a page for functionality */}
      </main>
    </>
  );
};

export default Main;
