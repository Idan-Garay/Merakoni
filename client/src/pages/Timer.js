import React, { useState } from "react";
import Index from "../components/Report/Timer/Index";
import { getTasks, getTasksForTimer } from "../api/report";
import "./Timer.css";
import dayjs from "dayjs";
import { editTask } from "../store/task/actions";

const Timer = ({ dispatch, taskData }) => {
  const [tasks, setTasks] = useState(getTasksForTimer(taskData, "d"));
  const [entry, setEntry] = useState({
    time_started: dayjs("01/02/2022").minute(0).toISOString(),
    time_ended: dayjs("01/02/2022").minute(10).toISOString(),
    interval: 10,
    label: "Study",
    status: "done",
  });

  const addTimeEntry = (entry) => {
    dispatch({ type: "Add Entry" });
  };

  const checkTask = (task) => {
    task.date_accomplished = dayjs().toISOString();
    editTask(task, dispatch);
  };

  return (
    <div className="timer-template">
      <div className="left">
        <Index addTimeEntry={addTimeEntry} tasks={tasks} />
      </div>
      <div className="right tasks-section">
        <h1>Tasks </h1>
        {tasks.length
          ? tasks.map((task, index) => (
              <div key={index} className="task-box">
                {task.date_accomplished.length ? (
                  <input
                    type="radio"
                    checked
                    onChange={() => checkTask(task)}
                  />
                ) : (
                  <input type="radio" onChange={() => checkTask(task)} />
                )}
                <div className="description">{task.description}</div>
              </div>
            ))
          : "No Tasks for the current Day!"}
      </div>
    </div>
  );
};

export default Timer;
