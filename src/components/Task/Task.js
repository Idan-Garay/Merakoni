import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

function Task({ info, completeToDo, removeToDo, handleEditForm, handleShow }) {
  // Calls updateToDo with the new edited values
  // const submitUpdate = (value) => {
  //   updateToDo(edit.taskId, value);
  //   setEdit({
  //     taskId: null,
  //     description: "",
  //     label: "",
  //     date_created: "",
  //   });
  // };

  // Calls TaskForm and sends the value of the clicked task
  // if (edit.taskId) {
  //   return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  // }

  return (
    <div className={info.date_accomplished ? "todo_row complete" : "todo_row"}>
      <div
        className="text"
        key={info.taskID}
        onClick={() => completeToDo(info.taskId)}
      >
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
