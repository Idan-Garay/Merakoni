import React from "react";

const Intervals = ({ intervals, changeInterval }) => {
  return (
    <select onChange={changeInterval}>
      {intervals.map((interval, index) => (
        <option key={index} value={interval}>
          {interval}
        </option>
      ))}
    </select>
  );
};

export default Intervals;
