import React, { useContext, useState } from "react";
import "./Report.css";
// import { Calendar } from "react-multi-date-picker";
// import "react-multi-date-picker/styles/colors/red.css";
import { BarChart } from "reaviz";
import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import { TasksContext } from "../App";
import Timer from "../components/Report/Timer/index";
import {
  AverageHabitCompletion,
  getStreakOfLabel,
  initializeHeatMap,
} from "../api/report";
import { getDayName, getDoneTasks, getToday, getTotalTasks } from "../api/days";
import { timerEntries } from "../context/TimerContext";

const Report = () => {
  const { tasks } = useContext(TasksContext);
  const [times, setTimes] = useState(timerEntries);
  const heatmapData = initializeHeatMap(tasks);
  const [weeklyTimes, setWeeklyTimes] = useState([
    { key: "Sunday", data: 13 },
    { key: "Monday", data: 2 },
    { key: "Tuesday", data: 3 },
    { key: "Wednesday", data: 1 },
    { key: "Thursday", data: 5 },
    { key: "Friday", data: 8 },
    { key: "Saturday", data: 13 },
  ]);
  const intervals = [15, 20, 25, 30, 35, 40, 45, 50];
  const [interval, setInterval] = useState(15);
  const incrementTime = () => {
    const field = getDayName(getToday());
    const idx = Array.from(weeklyTimes).findIndex((val) => val.key === field);

    if (idx !== -1) weeklyTimes[idx].data += interval;
    else console.log("field not found");

    setWeeklyTimes([...weeklyTimes]);
  };

  return (
    <div className="report-page">
      <div className="">
        Average Habit Completion:{" "}
        {AverageHabitCompletion(times, tasks, "Study")} minutes/task
      </div>
      <div>Streak of [label]: {getStreakOfLabel(tasks, "Study")}</div>
      <div className="yearly-status" style={{ display: "flex" }}>
        Weekly Status
        <BarChart width={700} height={200} data={weeklyTimes} />
        <div className="time-sim">
          <button onClick={incrementTime}>Increment Time</button>
          <select
            defaultValue={interval}
            onChange={(e) => etInterval(parseInt(e.target.value))}
          >
            {intervals.map((interval, index) => (
              <option key={index} value={interval}>
                {interval}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="records">
        Records
        <div>
          Timer <Timer addTimeEntry={setTimes} />
        </div>
      </div>
      <div className="calendar">
        <HeatMap
          value={heatmapData}
          startDate={new Date("2021/01/01")}
          rectSize={16}
          width={990}
          style={{ color: "#ad001d" }}
          panelColors={{
            0: "#f4decd",
            2: "#e4b293",
            4: "#d48462",
            10: "#c2533a",
            20: "#ad001d",
            30: "#000",
          }}
          rectRender={(props, data) => {
            // if (!data.count) return <rect {...props} />;
            return (
              <Tooltip
                key={props.key}
                placement="top"
                content={`Completed Tasks: ${data.count || 0}`}
              >
                <rect {...props} />
              </Tooltip>
            );
          }}
        />
        <div className="box">
          Accomplished Tasks: {getDoneTasks(tasks).length}
          <br />
          Total Tasks: {getTotalTasks(tasks)}
        </div>
      </div>
    </div>
  );
};

export default Report;
