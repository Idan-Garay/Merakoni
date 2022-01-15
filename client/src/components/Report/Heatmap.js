import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import dayjs from "dayjs";

const Heatmap = ({ heatmapData }) => {
  return (
    <div>
      <CalendarHeatmap
        startDate={dayjs().subtract(1, "year").format("YYYY-MM-DD")}
        endDate={dayjs().format("YYYY-MM-DD")}
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
