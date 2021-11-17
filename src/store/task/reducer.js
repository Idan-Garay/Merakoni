import { addTodo, deleteDay } from "./actions";

const reducer = (state, action) => {
  const { value } = action;

  switch (action.type) {
    case "ADD TASK":
      // should get the value which is a (ours)day object

      return addTodo(state, value);
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

export default reducer;
