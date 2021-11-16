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
import week from "./data.js";

export const TasksContext = React.createContext();

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
          <Route path="/tasks">
            <TaskPage />
          </Route>
        </Switch>
      </TasksContext.Provider>
    </div>
  );
};

export default App;
