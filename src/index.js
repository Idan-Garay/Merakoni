import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
<<<<<<< Updated upstream
import { BrowserRouter as Router } from "react-router-dom";
=======
import { Router, Route } from "react-router-dom";
>>>>>>> Stashed changes
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
<<<<<<< Updated upstream
    <App />
=======
    <Route path="/" component={App} />
>>>>>>> Stashed changes
  </Router>,
  document.getElementById("root")
);
