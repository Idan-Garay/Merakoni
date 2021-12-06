import React, { useReducer } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import Report from "./pages/Report";
import { Switch, Route } from "react-router-dom";
import { tasks } from "./context/TasksContext";
import taskReducer from "./store/task/reducer";
import Badge from "./pages/Badge";

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
          <Route key="report" path="/report">
            <Report />
          </Route>
          <Route key="day-tasks" path="/day/:day">
            <TaskPage />
          </Route>
          <Route key="all-tasks" path="/tasks">
            <TaskPage show={true} />
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
