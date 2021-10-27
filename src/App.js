import React from "react";
import "./App.css";
import Day from "./components/Day";
import NavBar from "./components/NavBar";

const App = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="app">
      <div className="left">
        <NavBar />
      </div>
      <div className="right">
        <header>utilities</header>
        <main>
          <h1>Daily List</h1>
          <section className="day-section">
            {days.map((day, index) => (
              <Day day={day} key={index} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
