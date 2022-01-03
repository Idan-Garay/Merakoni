import React, { useReducer, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import Report from "./pages/Report";
import { Switch, Route } from "react-router-dom";
import { tasksCache, entriesCache } from "./api/cache";
import taskReducer from "./store/task/reducer";
import Badge from "./pages/Badge";
import Timer from "./pages/Timer";

export const TasksContext = React.createContext(tasksCache);

const App = () => {
  const [tasksState, dispatch] = useReducer(taskReducer, tasksCache);
  const [timeState, setTimeState] = useState([...entriesCache]);

  return (
    <div id="app">
      <NavBar />
      <Switch>
        <TasksContext.Provider value={{ tasks: tasksState, dispatch }}>
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
            <Timer setTimeState={setTimeState} />
          </Route>
          <Route path="/badges">
            <Badge tasks={tasksState} />
          </Route>
        </TasksContext.Provider>
      </Switch>
    </div>
  );
};

export default App;
