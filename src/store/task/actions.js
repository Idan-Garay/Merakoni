import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));

const ADD_TASK = "ADD TASK";
const DELETE_TASK = "DELETE TASK";
const EDIT_TASK = "EDIT TASK";

export const addTask = (task, dispatch) => {
  dispatch({
    type: ADD_TASK,
    payload: task,
  });
};

export const deleteTask = (taskId, dispatch) => {
  dispatch({
    type: DELETE_TASK,
    taskId,
  });
};

export const editTask = (task, dispatch) => {
  dispatch({
    type: DELETE_TASK,
    payload: task,
  });
};

// export const addTodo = (state, value) => {
//   if (!toDo.description || /^\s*$/.test(toDo.description)) {
//     return state;
//   }

//   // If task is created the date_created and week is set to the current date.
//   if (!toDo.date_created) {
//     const d = new Date();
//     toDo.date_created = d.toISOString().slice(0, 10);
//     toDo.week = weekday[d.getDay()];
//   }

//   // Adds the inputed task at the end of the array
//   // const newToDos = [...toDos, toDo];
//   // setToDos(newToDos);
//   state[value.dayId.get("day")] = value;
//   return { ...state };

//   // Insert the newly added task in the Database
// };

// export const removeToDo = (id, toDos) => {
//   // Deletes the task
//   const removeArr = [...toDos].filter((toDo) => toDo.taskID !== id);
//   // setToDos(removeArr);
//   return removeArr;
//   // Delete the task in the Database
// };

// const updateToDo = (toDoId, newValue) => {
//   if (!newValue.description || /^\s*$/.test(newValue.description)) {
//     return;
//   }

//   if (!newValue.date_created) {
//     return;
//   } else {
//     // Gets the new day of the week from the updated date_created
//     const d = new Date(newValue.date_created);
//     newValue.week = weekday[d.getDay()];
//   }
//   // Updates the task
//   setToDos((prev) =>
//     prev.map((item) => (item.taskID === toDoId ? newValue : item))
//   );

//   // Update the values in the Database
// };

// const completeToDo = (id) => {
//   let updatedToDos = toDos.map((toDo) => {
//     if (toDo.taskID === id) {
//       if (toDo.date_accomplished == "") {
//         // Updates the date accoplished to the current date.
//         const d = new Date();
//         toDo.date_accomplished = d.toISOString().slice(0, 10);
//       } else {
//         // Updates the date to be empty
//         toDo.date_accomplished = "";
//       }
//     }
//     return toDo;
//   });

//   setToDos(updatedToDos);

//   // Update date_accomplished in the Database
// };

// export const deleteDay = (state, value) => {
//   const { dayId } = state[value];
//   state.splice(value, 1, { dayId: dayId, tasks: [] });
//   return [...state];
// };

// export const increment = (nodeId) => ({
//   type: INCREMENT,
//   nodeId
// })

// let nextId = 0
// export const createNode = () => ({
//   type: CREATE_NODE,
//   nodeId: `new_${nextId++}`
// })
