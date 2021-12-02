import PropTypes from "prop-types";
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

Task.propTypes = {
  info: PropTypes.shape({
    taskId: PropTypes.number,
    description: PropTypes.string,
    label: PropTypes.string,
    todo_date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    date_accomplished: PropTypes.string,
  }),
  handleEditForm: PropTypes.func,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  updateToDo: PropTypes.func,
};

export default Task;
