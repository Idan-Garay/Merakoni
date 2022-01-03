import React, { useEffect, useState } from "react";
import "./Report.css";
import "./details.css";

import { BarChart } from "reaviz";
import Heatmap from "../components/Report/Heatmap";
import { getTotalTasks } from "../api/days";
import { tasksCache, entriesCache } from "../api/cache";
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

const Report = () => {
  const [option, setOption] = useState("d");
  const [currData, setCurrData] = useState(getTasks(tasksCache, "d"));
  const [currEntries, setCurrEntries] = useState(getEntries(entriesCache, "d"));
  const heatmapData = initializeHeatMap(tasksCache);

  const handleCurrDataEntries = (opt) => {
    let data = [];
    let entries = [];

    data = getTasks(tasksCache, opt);
    entries = getEntries(entriesCache, opt);
    setCurrData(data);
    setCurrEntries(entries);
    setOption(opt);
  };

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
          <BarChart
            data={getFocusedTimeByWeek(getEntries(entriesCache, "w"))}
          />
        </div>
      </div>
    </div>
  );
};

export default Report;
