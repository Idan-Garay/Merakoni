import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import Report from "./pages/Report";
import { Switch, Route } from "react-router-dom";
import Badge from "./pages/Badge";
import Timer from "./pages/Timer";
import reducer from "./store/task/store";
import axios from "axios";
import { uploadIntoCurrentWeek } from "./api/cache";

export const TasksContext = React.createContext();

const initialState = {
  tasks: [],
  entries: [],
  labels: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // axios.post("http://localhost:5000/tasks/fill", uploadIntoCurrentWeek());
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => {
        dispatch({ type: "Read Tasks", payload: res.data });
      })
      .catch((err) =>
        console.log("something went wrong with retrieving tasks", err)
      );
    axios
      .get("http://localhost:5000/time")
      .then((res) => {
        dispatch({ type: "Read Entries", payload: res.data });
      })
      .catch((err) =>
        console.log("something went wrong with retrieving tasks", err)
      );
  }, []);

  return (
    <div id="app">
      <NavBar />
      <Switch>
        <TasksContext.Provider
          value={{ entries: state.entries, tasks: state.tasks, dispatch }}
        >
          <Route exact path="/">
            <Home />
          </Route>
          <Route key="report" path="/report">
            <Report />
          </Route>
          <Route key="day-tasks" path="/day/:day">
            <TaskPage />
          </Route>
          <Route key="all-tasks" path="/tasks">
            <TaskPage show={true} />
          </Route>
          <Route key="timer" path="/timer">
            <Timer dispatch={dispatch} taskData={state.tasks} />
          </Route>
          <Route path="/badges">
            <Badge tasks={state.tasks} />
          </Route>
        </TasksContext.Provider>
      </Switch>
    </div>
  );
};

export default App;
