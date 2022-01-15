import PropTypes from "prop-types";
import React, { useStat } from "react";
import TaskForm from "./Task/TaskForm";
import Task from "./Task/Task";
import {
  getTasks,
  addTask,
  completeTask,
  deleteTask,
  editTask,
} from "../store/task/actions";
import EditForm from "./Task/EditForm";
import { getTasksWithinDay } from "../api/days";

function TaskList({ taskData, dispatch, dayName }) {
  const handleDelete = (taskId) => {
    deleteTask(taskId, dispatch);
  };

  const handleEdit = (task) => {
    editTask(task, dispatch);
  };

  const handleComplete = (task) => {
    completeTask(task, dispatch);
  };

  return (
    <>
      <div>
        <h1 className="title">What are your Plans for the Week?</h1>
        <TaskForm
          onSubmit={addTask}
          dispatch={dispatch}
          dayName={dayName}
          nextId={taskData.length ? taskData[taskData.length - 1] : 1}
        />
        {dayName === undefined
          ? taskData.map((task, index) => (
              <Task
                key={index}
                info={task}
                completeToDo={handleComplete}
                removeToDo={handleDelete}
                updateToDo={handleEdit}
              />
            ))
          : getTasksWithinDay(taskData, dayName).map((task, index) => (
              <Task
                key={index}
                info={task}
                completeToDo={handleComplete}
                removeToDo={handleDelete}
                updateToDo={handleEdit}
              />
            ))}
      </div>
    </>
  );
}

TaskList.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      taskId: PropTypes.number,
      description: PropTypes.string,
      label: PropTypes.string,
      todo_date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      date_accomplished: PropTypes.string,
    })
  ),
  dispatch: PropTypes.any,
  dayName: PropTypes.string,
};

export default TaskList;
