import { addTask, deleteDay } from "./actions";

export const reducer = (state, action) => {
  const { value } = action;

  switch (action.type) {
    case "ADD TASK":
      state[value.dayId.get("day")] = value;
      return addTask(state, value);
    case "DELETE TASK":
      console.log("deleteTask");
    case "EDIT TASK":
      console.log("editTask");
    case "DELETE DAY":
      return deleteDay(state, value);
    default:
      return state;
  }
};
