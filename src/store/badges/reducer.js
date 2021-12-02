const reducer = (state, action) => {
  switch (action.type) {
    case "ADD POINTS": {
      const { payload } = action;
      state.push({ taskId: state.length + 1, ...payload });

      return [...state];
    }
    case "DELETE POINTS": {
      const { taskId } = action;
      return [...state.filter((task) => task.taskId !== taskId)];
    }
    default:
      return state;
  }
};

export default reducer;
