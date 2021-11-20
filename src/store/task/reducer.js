const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TASK": {
      const { payload } = action;
      state.push({ taskId: state.length + 1, ...payload });
      console.log(state);
      return [...state];
    }
    case "DELETE TASK":
      return [state.filter((task) => task.taskId !== taskId)];
    case "EDIT TASK": {
      const { payload } = action;
      const idx = state.findIndex((task) => task.taskId === payload.taskId);
      state[idx] = payload;
      return [...state];
    }
    default:
      return state;
  }
};

export default reducer;
