import React, { useState } from "react";
import TaskForm from "./Task/TaskForm";
import Task from "./Task/Task";
import { addTask, deleteTask, editTask } from "../store/task/actions";
// import Button from "react-bootstrap/Button";
import EditForm from "./Task/EditForm";

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

  const handleDelete = (taskId) => {
    deleteTask(taskId, dispatch);
  };

  const handleEdit = (task) => {
    editTask(task, dispatch);
  };

  // const handleModal = () => (
  //   <Button variant="primary" onClick={handleShow}>
  //     Launch static backdrop modal
  //   </Button>
  // );

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
            removeToDo={handleDelete}
            updateToDo={handleEdit}
            // handleShow={handleShow}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
