import PropTypes from "prop-types";
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import EditForm from "./EditForm";

function Task({ info, completeToDo, removeToDo, updateToDo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = () => {
    completeToDo(info);
  };

  const handleIsOpen = () => setIsOpen(!isOpen);

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
        <MdEdit onClick={handleIsOpen} className="edit_icon" />
        <MdDelete
          onClick={() => removeToDo(info.taskId)}
          className="delete_icon"
        />
      </div>

      <EditForm
        show={isOpen}
        handleClose={handleIsOpen}
        task={info}
        handleEdit={updateToDo}
      />
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
