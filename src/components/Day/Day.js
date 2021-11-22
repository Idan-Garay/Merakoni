import React, { useContext, useState } from "react";
import "./Day.css";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TasksContext } from "../../App";
import { getDayName } from "../../api/days";

const Day = ({ day, tasks }) => {
  const { dispatch } = useContext(TasksContext);

  // const handleDelete = () => {
  //   dispatch({ type: "DELETE DAY", value: dayIdx });
  // };

  // days: {Sunday: tasks[], ..., Saturday: tasks[]}
  return (
    <div className="day">
      <div className="top flex-no-wrap baseline">
        <Link to={{ pathname: `/day/${day}`, state: { tasks } }}>
          <h2>{day}</h2>
        </Link>
      </div>
      <div className="overview">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.description}</li>
          ))}
        </ul>
      </div>
      <div className="little-details">
        <p>[{tasks.length}] tasks</p>
        <p>{day}</p>
      </div>
    </div>
  );
};

export default Day;
