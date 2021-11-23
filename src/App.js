import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import Report from "./pages/Report";
import { Switch, Route } from "react-router-dom";
import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
import { tasks } from "./context/TasksContext";
import taskReducer from "./store/task/reducer";

export const TasksContext = React.createContext(tasks);

const App = () => {
  const [tasksState, dispatch] = useReducer(taskReducer, tasks);

  return (
    <div id="app">
      <NavBar />
      <Switch>
        <TasksContext.Provider value={{ tasks: tasksState, dispatch }}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route key="day-tasks" path="/day/:day">
            <TaskPage />
          </Route>
          <Route key="all-tasks" path="/tasks">
            <TaskPage />
          </Route>
        </TasksContext.Provider>
      </Switch>
    </div>
  );
};

export default App;
