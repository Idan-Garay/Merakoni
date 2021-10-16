import React from "react";
import "./App.css";
import Day from "./components/Day";

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
      <div className="left">dashboard</div>
      <div className="right">
        <header>utilities</header>
        <main>
          <h1>Daily List</h1>
          <section className="day-section">
            {days.map((day) => (
              <Day day={day} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
