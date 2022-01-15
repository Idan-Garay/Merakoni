const reducer = (state, action) => {
  switch (action.type) {
    case "Fill Tasks": {
      const { tasks } = action;
      state.push(tasks);
      return [...state];
    }

    case "Add Task": {
      const { payload } = action;
      return { ...state, tasks: [...state.tasks, payload] };
    }
    case "Delete Task": {
      const { payload } = action;
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.taskId !== payload)],
      };
    }
    case "Update Task": {
      const { payload } = action;
      const result = state.tasks.map((task) => {
        if (task.taskId === payload.taskId) return payload;
        else return task;
      });

      return { ...state, tasks: result };
    }
    case "Read Tasks": {
      const { payload } = action;

      return { ...state, tasks: [...payload] };
    }

    case "Add Entry": {
      const { payload } = action;
      return { ...state, entries: [...state.entries, payload] };
    }
    case "Read Entries": {
      const { payload } = action;
      return { ...state, entries: payload };
    }

    case "Add Label": {
      const { payload } = action;
      return { ...state, labels: [...state.labels, payload] };
    }
    case "Read Labels": {
      const { payload } = action;
      return { ...state, labels: payload };
    }
    case "Delete Labels": {
      const { payload } = action;
      return {
        ...state,
        labels: state.labels.filter((label) => label !== payload),
      };
    }
  }
};

export default reducer;
