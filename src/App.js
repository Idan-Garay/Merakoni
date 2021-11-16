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
import week from "./context/TasksContext";
import reducer from "./store/task/reducer";

export const TasksContext = React.createContext(week);

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
          <Route path="/day/:id">
            <TaskPage />
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
