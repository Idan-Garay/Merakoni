import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import Utilities from "./Utilities";
import Day from "./Day/Day";
import DayForm from "./Day/DayForm";
import { useParams, Route } from "react-router-dom";
import { TasksContext } from "../App";
import { getTasksWithinCurrentWeek } from "../api/days";

const Main = () => {
  const { tasks } = useContext(TasksContext);

  const [days, setDays] = useState({});

  useEffect(() => {
    setDays(getTasksWithinCurrentWeek(tasks));
  }, []);

  return (
    <>
      <main className="main-section">
        <div className="left-content">
          <Utilities />
          <div className="days-section">
            {Object.entries(days).map(([keyName, value], index) => {
              return <Day day={keyName} tasks={value} key={index} />;
            })}
          </div>
        </div>
        <div className="right-content">calendar</div>
        {/* {showModal && <DayForm toggleModal={toggleModal} />}  makee it a page for functionality */}
      </main>
    </>
  );
};

export default Main;
