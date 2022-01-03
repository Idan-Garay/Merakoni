import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

const Heatmap = ({ heatmapData }) => {
  return (
    <div>
      <CalendarHeatmap
        startDate={new Date("2021-01-01")}
        endDate={new Date("2021-12-31")}
        values={heatmapData}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `Task Accomplished: ${value.count ? value.count : 0}`,
          };
        }}
        showWeekdayLabels={true}
        showOutOfRangeDays={true}
      />
      <ReactTooltip />
    </div>
  );
};

export default Heatmap;
