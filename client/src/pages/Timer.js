import React, { useState } from "react";
import Index from "../components/Report/Timer/Index";
import { tasksCache } from "../api/cache";
import { getTasks } from "../api/report";
import "./Timer.css";

const Timer = ({ setTimeState }) => {
  const [tasksOpt] = useState("d");
  const [tasks, setTasks] = useState(getTasks(tasksCache, "d"));
  const addTimeEntry = (entry) => {
    setTimeState(entry);
  };

  return (
    <div className="timer-template">
      <div className="left">
        <Index addTimeEntry={addTimeEntry} />
      </div>
      <div className="right tasks-section">
        <h1>Tasks </h1>
        {tasks.map((task) => (
          <div className="task-box">
            <input type="radio" />
            <div className="description">{task.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
