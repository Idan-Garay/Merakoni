import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

function Task({ info, completeToDo, removeToDo, handleEditForm, handleShow }) {
  const handleComplete = () => {
    completeToDo(info);
  };
  return (
    <div className={info.date_accomplished ? "todo_row complete" : "todo_row"}>
      <div className="text" onClick={handleComplete}>
        {info.description}
      </div>
      <div className="icons">
        <div className="task_label">
          <span>{info.label}</span>
        </div>
        <div className="week_day">{/* <AiOutlineCalendar class */}</div>
        <MdEdit onClick={handleShow} className="edit_icon" />
        <MdDelete
          onClick={() => removeToDo(info.taskId)}
          className="delete_icon"
        />
      </div>
    </div>
  );
}

export default Task;
