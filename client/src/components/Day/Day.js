import React, { useContext, useState } from "react";
import "./Day.css";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TasksContext } from "../../App";
import { getDayName } from "../../api/days";
import { getAccomplishedTasks } from "../../api/report";

const Day = (props) => {
  const { dispatch } = useContext(TasksContext);
  const { day, tasks } = props;
  // const handleDelete = () => {
  //   dispatch({ type: "DELETE DAY", value: dayIdx });
  // };

  // days: {Sunday: tasks[], ..., Saturday: tasks[]}
  return (
    <div className="day">
      <div className="top flex-no-wrap baseline center">
        <Link
          to={{ pathname: `/day/${day}`, state: { tasks } }}
          style={{ textDecoration: "none", color: "rgb(40, 40, 40)" }}
        >
          <h2>{day}</h2>
        </Link>
      </div>
      <div className="overview">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                className={task.date_accomplished ? "done-task" : "undone-task"}
              >
                {task.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="little-details">
        <p>{getAccomplishedTasks(tasks).length} tasks done</p>
        <p>
          {tasks.length - getAccomplishedTasks(tasks).length} remaining tasks
        </p>
      </div>
    </div>
  );
};

export default Day;
