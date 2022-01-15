import React, { useContext, useState, useEffect } from "react";
import "./Report.css";
import "./details.css";

import { BarChart } from "reaviz";
import Heatmap from "../components/Report/Heatmap";
import { getTotalTasks } from "../api/days";
import {
  FocusedTime,
  getEntries,
  LongestStreak,
  Tasks,
  TotalDaysDone,
  initializeHeatMap,
  getTasks,
  getFocusedTimeByWeek,
} from "../api/report";

import { TasksContext } from "../App";

const Report = () => {
  const { tasks, entries, dispatch } = useContext(TasksContext);
  const [option, setOption] = useState("d");
  const [currData, setCurrData] = useState(getTasks(tasks, "d"));
  const [currEntries, setCurrEntries] = useState(getEntries(entries, "d"));
  const heatmapData = initializeHeatMap(tasks);

  const handleCurrDataEntries = (opt) => {
    let data = [];
    let timeEntries = [];

    data = getTasks(tasks, opt);
    timeEntries = getEntries(entries, opt);
    setCurrData(data);
    setCurrEntries(timeEntries);
    setOption(opt);
  };

  useEffect(() => {
    handleCurrDataEntries(option);
  }, [option]);

  return (
    <div className="report-page">
      <div className="utility">
        <div className="btn-grp">
          <button
            onClick={() => handleCurrDataEntries("d")}
            className={`utility-buttons ${option === "d" ? "active" : ""}`}
          >
            Day
          </button>
          <button
            onClick={() => handleCurrDataEntries("w")}
            className={`utility-buttons ${option === "w" ? "active" : ""}`}
          >
            Week
          </button>
          <button
            onClick={() => handleCurrDataEntries("m")}
            className={`utility-buttons ${option === "m" ? "active" : ""}`}
          >
            Month
          </button>
        </div>
      </div>
      <div className="report-details">
        <div className="details-box">
          <div>
            <h1 className="details-h">Focused Time</h1>
            <div className="numbers-display">
              <p>
                <span className="n-tasks">
                  {FocusedTime(currEntries)} minutes
                </span>
              </p>
            </div>
          </div>
          <div>
            <h1 className="details-h">Tasks</h1>
            <p className="pl">
              <span className="bold">{Tasks(currData).length}</span> out of{" "}
              {getTotalTasks(currData)} tasks were accomplished.
            </p>
          </div>

          <div>
            <h1 className="details-h">Longest Streak</h1>
            <div className="numbers-display">
              <p>
                <span className="streak-no">{LongestStreak(currData)}</span>
              </p>
            </div>
          </div>
          <div>
            <h1 className="details-h">Total Days Done</h1>
            <div className="numbers-display">
              <p>
                <span className="streak-no">{TotalDaysDone(currData)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="graphs">
        <div className="heatmap-box box">
          Heatmap
          <Heatmap heatmapData={heatmapData} />
        </div>
        <div className="chart-box box">
          {/* <BarChart data={getFocusedTimeByWeek(getEntries(entries, "w"))} /> */}
          <BarChart
            data={[
              { key: "Sunday", data: 50 },
              { key: "Monday", data: 40 },
              { key: "Tuesday", data: 0 },
              { key: "Wednesday", data: 0 },
              { key: "Thursday", data: 0 },
              { key: "Friday", data: 0 },
              { key: "Saturday", data: 0 },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Report;
