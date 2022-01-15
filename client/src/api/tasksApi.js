export const getTasks = () => {
  return axios
    .get("http://localhost:5000/tasks")
    .then((res) => res.data)
    .catch((err) =>
      console.log("something went wrong with retrieving tasks", err)
    );
};

export const addTaskToDB = (task) => {
  axios.post("http://localhost:5000/tasks", task);
};

export const deleteTaskFromDB = (taskId) => {
  return axios
    .delete(`http://localhost:5000/tasks/${taskId}`, {
      data: { taskId: taskId },
    })
    .then((res) => true)
    .catch((err) =>
      console.log("something went wrong with deleting tasks", err)
    );
};

export const editTask = (task) => {
  return axios
    .patch(`http://localhost:5000/tasks/${task.taskId}`, task)
    .then((res) => res.data)
    .catch((err) =>
      console.log("something went wrong with editing the task", err)
    );
};
