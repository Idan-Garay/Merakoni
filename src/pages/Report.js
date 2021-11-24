import React, { useContext } from "react";
// import Accomplished from "../components/Report/Accomplished";
import "./Report.css";
// import { Calendar } from "react-multi-date-picker";
// import "react-multi-date-picker/styles/colors/red.css";
import { BarChart } from "reaviz";
import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import { TasksContext } from "../App";
import Timer from "../components/Report/Timer/index";
import { initializeHeatMap } from "../api/report";

const Report = () => {
  const { tasks } = useContext(TasksContext);
  const heatmapData = initializeHeatMap(tasks);

  return (
    <div className="report-page">
      <div className="calendar">
        Calendar
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
      </div>
      <div className="yearly-status">
        Weekly Status
        <BarChart
          width={700}
          height={200}
          data={[
            { key: "Sunday", data: 13 },
            { key: "Monday", data: 0 },
            { key: "Tuesday", data: 3 },
            { key: "Wednesday", data: 1 },
            { key: "Thursday", data: 5 },
            { key: "Friday", data: 8 },
            { key: "Saturday", data: 13 },
          ]}
        />
      </div>

      <div className="records">
        Records
        <div>
          Timer <Timer />
        </div>
      </div>
    </div>
  );
};

export default Report;
