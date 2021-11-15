import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
// import Day from "./components/Day";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Switch, Route } from "react-router-dom";

const App = () => {
  // const [state, dispatch] = useReducer(reducer, week);

  return (
    <div id="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/history">
          <div>History</div>
        </Route>
        <Route path="/report">
          <div>Report</div>
        </Route>
        <Route path="/settings">
          <div>Settings</div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
