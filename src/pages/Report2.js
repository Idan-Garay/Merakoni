import React, { useContext, useEffect, useState } from "react";
import "./Report2.css";
import "./details.css";
import { TasksContext } from "../App";
import {
  getAccomplishedTasks,
  initializeHeatMap,
  getTasksOfToday,
  getTasksByWeek,
  getTasksByMonth,
  getEntriesOfToday,
  getEntriesByWeek,
  getEntriesByMonth,
  getFocusedTime,
  getLongestStreak,
  getTotalDaysDone,
} from "../api/report";
import { BarChart } from "reaviz";
import Heatmap from "../components/Report/Heatmap";
import { getDoneTasks, getTotalTasks } from "../api/days";
import { timerEntries } from "../context/TimerContext";
import { tasksCache, entriesCache } from "./../api/cache";

const Report2 = () => {
  const { tasks } = useContext(TasksContext);
  const heatmapData = initializeHeatMap(tasks);
  const [times, setTimes] = useState(timerEntries);
  const [option, setOption] = useState("day");
  const [currData, setCurrData] = useState(getTasksOfToday(tasksCache));
  const [currEntries, setCurrEntries] = useState(
    getEntriesOfToday(entriesCache)
  );

  const [weeklyTimes, setWeeklyTimes] = useState([
    { key: "Sunday", data: 13 },
    { key: "Monday", data: 2 },
    { key: "Tuesday", data: 3 },
    { key: "Wednesday", data: 1 },
    { key: "Thursday", data: 5 },
    { key: "Friday", data: 8 },
    { key: "Saturday", data: 13 },
  ]);

  const handleCurrDataEntries = (opt) => {
    let data = [];
    let entries = [];
    setOption(opt);
    switch (opt) {
      case "day":
        data = getTasksOfToday(tasksCache);
        entries = getEntriesOfToday(entriesCache);
        break;
      case "week":
        data = getTasksByWeek(tasksCache);
        entries = getEntriesByWeek(entriesCache);
        break;
      case "month":
        data = getTasksByMonth(tasksCache);
        entries = getEntriesByMonth(entriesCache);
        break;
      default:
        "something went wrong (option)!";
        break;
    }
    setCurrData(data);
    setCurrEntries(entries);
  };

  return (
    <div className="report-page">
      <div className="utility">
        <div className="btn-grp">
          <button
            onClick={() => handleCurrDataEntries("day")}
            className={`utility-buttons ${option === "day" ? "active" : ""}`}
          >
            Day
          </button>
          <button
            onClick={() => handleCurrDataEntries("week")}
            className={`utility-buttons ${option === "week" ? "active" : ""}`}
          >
            Week
          </button>
          <button
            onClick={() => handleCurrDataEntries("month")}
            className={`utility-buttons ${option === "month" ? "active" : ""}`}
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
                  {getFocusedTime(currEntries)} minutes
                </span>
              </p>
            </div>
          </div>
          <div>
            <h1 className="details-h">Tasks</h1>
            <div className="numbers-display">
              <p className="pl">
                <span className="n-tasks">
                  {getAccomplishedTasks(currData).length}
                </span>
                <span className="total-tasks gray-part">
                  /{getTotalTasks(currData)}
                </span>
              </p>
            </div>
            <p className="pl">
              {getAccomplishedTasks(currData).length} out of{" "}
              {getTotalTasks(currData)} tasks were accomplished
            </p>
          </div>
          {/* // */}
          <div>
            <h1 className="details-h">Longest Streak</h1>
            <div className="numbers-display">
              <p>
                <span className="streak-no">{getLongestStreak(currData)}</span>
              </p>
            </div>
          </div>
          <div>
            <h1 className="details-h">Total Days Done</h1>
            <div className="numbers-display">
              <p>
                <span className="streak-no">{getTotalDaysDone(currData)}</span>
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
          <BarChart data={weeklyTimes} />
        </div>
      </div>
    </div>
  );
};

export default Report2;
