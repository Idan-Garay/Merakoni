import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TaskPage from "./pages/Task";
import Report from "./pages/Report";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/report">
          <Report />
        </Route>
        <Route exact path="/day">
          <TaskPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
