import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TaskPage from "./pages/Task";
import Report from "./pages/Report";
import { Switch, Route } from "react-router-dom";
import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
import week from "./data.js";

export const TasksContext = React.createContext();

const reducer = (state, action) => {
  const { value } = action;
  switch (action.type) {
    case "ADD TASK":
      state[value.get("day")] = value;
      return { ...state };
    case "DELETE TASK":
      console.log("deleteTask");
    case "EDIT TASK":
      console.log("editTask");
    case "DELETE DAY":
      const { dayId } = state[value];
      state.splice(value, 1, { dayId: dayId, tasks: [] });
      return [...state];
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, week);
  return (
    <div id="app">
      <NavBar />
      <TasksContext.Provider value={{ days: state, dispatch }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route path="/day/:id" >
            <TaskPage />
          </Route>
        </Switch>
      </TasksContext.Provider>
    </div>
  );
};

export default App;
