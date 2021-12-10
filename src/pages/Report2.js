import React from "react";
import "./Report2.css";

const Report2 = () => {
  return (
    <div className="report-page">
      <div className="utility">
        <div>Day, Week, Month</div>
      </div>
      <div className="top">
        <div className="heatmap-box box">Heatmap</div>
        <div className="chart-box box">Chart</div>
      </div>
      <div className="bottom">
        <div className="Details-box box">
          Details(#oftasks, streak, Avehabit Completion)
        </div>
      </div>
    </div>
  );
};

export default Report2;
