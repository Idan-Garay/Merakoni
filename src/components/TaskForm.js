import React from "react";
import "./TaskForm.css";

const TaskForm = ({ closeTaskForm }) => {
  return (
    <div className="modal">
      <form className="task-form">
        <h1>ADD TASK</h1>
        <input name="description" />
        <button onClick={closeTaskForm}>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
