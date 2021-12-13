import React, { useContext, useState } from "react";
import "./Report2.css";
import "./details.css";
import { TasksContext } from "../App";
import {
  AverageHabitCompletion,
  getAccomplishedTasks,
  getStreakOfLabel,
  getTasksofLabel,
  initializeHeatMap,
} from "../api/report";
import { BarChart } from "reaviz";
import Heatmap from "../components/Report/Heatmap";
import { getDoneTasks, getTotalTasks } from "../api/days";
import { timerEntries } from "../context/TimerContext";

const Report2 = () => {
  const { tasks } = useContext(TasksContext);
  const heatmapData = initializeHeatMap(tasks);
  const [times, setTimes] = useState(timerEntries);

  const [weeklyTimes, setWeeklyTimes] = useState([
    { key: "Sunday", data: 13 },
    { key: "Monday", data: 2 },
    { key: "Tuesday", data: 3 },
    { key: "Wednesday", data: 1 },
    { key: "Thursday", data: 5 },
    { key: "Friday", data: 8 },
    { key: "Saturday", data: 13 },
  ]);
  return (
    <div className="report-page">
      <div className="utility">
        <div className="btn-grp">
          <button className="utility-buttons active">Day</button>
          <button className="utility-buttons">Week</button>
          <button className="utility-buttons">Month</button>
        </div>
      </div>
      <div className="report-details">
        <div className="details-box">
          <div>
            <h1 className="details-h">Average Completion</h1>
            <div className="numbers-display">
              <p>
                <span className="n-tasks">
                  {AverageHabitCompletion(times, tasks, "Study")}
                </span>
              </p>
            </div>
          </div>
          <div>
            <h1 className="details-h">Tasks</h1>
            <div className="numbers-display">
              <p className="pl">
                <span className="n-tasks">{getDoneTasks(tasks).length}</span>
                <span className="total-tasks gray-part">
                  /{getTotalTasks(tasks)}
                </span>
              </p>
            </div>
            <p className="pl">
              {getDoneTasks(tasks).length} out of {getTotalTasks(tasks)} tasks
              were accomplished
            </p>
          </div>
          {/* // */}
          <div>
            <h1 className="details-h">Longest Streak</h1>
            <div className="numbers-display">
              <p>
                <span className="streak-no">8</span>
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
