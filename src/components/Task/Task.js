import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { addTask } from "../../store/task/actions";

function Task({ info, completeToDo, removeToDo, updateToDo }) {
  const [edit, setEdit] = useState({
    taskID: null,
    description: "",
    label: "",
    date_created: "",
  });

  // Calls updateToDo with the new edited values
  const submitUpdate = (value) => {
    updateToDo(edit.taskID, value);
    setEdit({
      taskID: null,
      description: "",
      label: "",
      date_created: "",
    });
  };

  // Calls TaskForm and sends the value of the clicked task
  if (edit.taskID) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className={info.date_accomplished ? "todo_row complete" : "todo_row"}>
      <div
        className="text"
        key={info.taskID}
        onClick={() => completeToDo(info.taskID)}
      >
        {info.description}
      </div>
      <div className="icons">
        <div className="task_label">
          <span>{info.label}</span>
        </div>
        <div className="week_day">
          <AiOutlineCalendar className="calendar_icon" />
          {info.week}
        </div>
        <MdEdit
          onClick={() =>
            setEdit({
              taskID: info.taskID,
              description: info.description,
              label: info.label,
              date_created: info.date_created,
            })
          }
          className="edit_icon"
        />
        <MdDelete
          onClick={() => removeToDo(info.taskID)}
          className="delete_icon"
        />
      </div>
    </div>
  );
}

export default Task;
