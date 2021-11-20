import React, { useState } from "react";
import TaskForm from "./Task/TaskForm";
import Task from "./Task/Task";
import { addTask, deleteTask, editTask } from "../store/task/actions";

function TaskList({ taskData, dispatch }) {
  // const [toDos, setToDos] = useState(taskData);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <div>
        <h1 className="title">What are your Plans for the Week?</h1>
        <TaskForm onSubmit={addTask} dispatch={dispatch} />
        {taskData.map((task, index) => (
          <Task
            key={index}
            info={task}
            // completeToDo={completeToDo}
            // removeToDo={removeToDo}
            // updateToDo={updateToDo}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
