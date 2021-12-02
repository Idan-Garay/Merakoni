import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

function Task({ toDos, completeToDo, removeToDo, updateToDo }) {
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

  // Sort the tasks according to their date
  toDos.sort((a, b) => {
    const first = a.date_created
    const second = b.date_created
    return first > second ? 1 : (first < second ? -1 : 0)
  });

  return (edit.taskID) ? (
    <div>
      <TaskForm edit={edit} onSubmit={submitUpdate} />
        {
          toDos.map((toDo, index) => (
            <div 
              className={toDo.date_accomplished ? "todo_row complete" : "todo_row"} 
              key={index}
            >
              {/* <div className={toDo.done ? "todo_row complete" : "todo_row"} key={index}> */}
              <div 
                className="text"
                key={toDo.taskID}
                onClick={() =>  completeToDo(toDo.taskID)}
              >
                {toDo.description}
              </div>
              <div className="icons">
                <div className="task_label">
                  <span>{toDo.label}</span>
                </div>
                <div className="week_day">
                  <AiOutlineCalendar className="calendar_icon" />
                  {toDo.week}
                </div>
                <MdEdit 
                  onClick={() => 
                    setEdit({
                      taskID: toDo.taskID,
                      description: toDo.description,
                      label: toDo.label,
                      date_created: toDo.date_created,
                    })
                  }
                  className="edit_icon"
                />
                <MdDelete
                  onClick={() => removeToDo(toDo.taskID)}
                  className="delete_icon"
                />
            </div>
          </div>
        ))
      }
    </div>
  ) : (
    <div>
      {
        toDos.map((toDo, index) => (
          <div 
            className={toDo.date_accomplished ? "todo_row complete" : "todo_row"} 
            key={index}
          >
            {/* <div className={toDo.done ? "todo_row complete" : "todo_row"} key={index}> */}
            <div 
              className="text"
              key={toDo.taskID}
              onClick={() =>  completeToDo(toDo.taskID)}
            >
              {toDo.description}
            </div>
            <div className="icons">
            <div className="task_label">
              <span>{toDo.label}</span>
            </div>
            <div className="week_day">
              <AiOutlineCalendar className="calendar_icon" />
              {toDo.week}
            </div>
            <MdEdit 
              onClick={() => 
                setEdit({
                  taskID: toDo.taskID,
                  description: toDo.description,
                  label: toDo.label,
                  date_created: toDo.date_created,
                })
              }
              className="edit_icon"
            />
              <MdDelete
                onClick={() => removeToDo(toDo.taskID)}
                className="delete_icon"
              />
            </div>
          </div>
        ))
      }
    </div>
  );    
}   

export default Task;