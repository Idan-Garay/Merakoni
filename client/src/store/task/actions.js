import { getToday } from "./../../api/days";
import axios from "axios";

const GET_TASKS = "Read Tasks";
const FILL_TASKS = "Fill Tasks";
const ADD_TASK = "Add Task";
const DELETE_TASK = "Delete Task";
const EDIT_TASK = "Update Task";
const COMPLETE_TASK = "Complete Task";

export const getTasks = (dispatch) => {
  axios
    .get("http://localhost:5000/tasks")
    .then((res) => {
      dispatch({ type: GET_TASKS, tasks: res.data });
    })
    .catch((err) =>
      console.log("something went wrong with retrieving tasks", err)
    );
};

export const addTask = (task, dispatch) => {
  dispatch({
    type: ADD_TASK,
    payload: task,
  });
  console.log("addTask", task);
  axios
    .post("http://localhost:5000/tasks", task)
    .then((res) => console.log(res.data, "task added"));
};

export const deleteTask = (taskId, dispatch) => {
  axios
    .delete(`http://localhost:5000/tasks/${taskId}`, {
      data: { taskId: taskId },
    })
    .then(
      dispatch({
        type: DELETE_TASK,
        taskId,
      })
    )
    .catch((err) =>
      console.log("something went wrong with deleting the task", err)
    );
};

export const editTask = (task, dispatch) => {
  dispatch({
    type: EDIT_TASK,
    payload: task,
  });
  axios
    .patch(`http://localhost:5000/tasks/${task.taskId}`, task)
    .catch((err) =>
      console.log("something went wrong with changing a task", err)
    );
};

export const completeTask = (task, dispatch) => {
  task.date_accomplished =
    task.date_accomplished.length === 0
      ? (task.date_accomplished = getToday())
      : "";
  editTask(task, dispatch);
};
