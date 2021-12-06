import React from "react";

const Labels = ({ labels, changeLabel }) => {
  return (
    <div>
      <label>Label:</label>
      <select onChange={changeLabel}>
        {labels.map((label, index) => (
          <option key={index} value={label}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Labels;
