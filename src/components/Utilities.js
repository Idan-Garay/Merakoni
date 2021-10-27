import React from "react";
import "./Utilities.css";
import { FaEllipsisV, FaFilter, FaSearch } from "react-icons/fa";
import CreateDay from "./CreateDay";

const Utilities = () => {
  return (
    <div className="utilities">
      <div className="flex-no-wrap">
        <h2>Habit Tracker</h2>
        <div>
          <FaEllipsisV />
          <CreateDay />
        </div>
      </div>
      <div className="search-bar">
        <div className="filter-btn flex-no-wrap">
          <span className="filter-label">
            <FaFilter />
            Quick Filters
          </span>
          <select></select>
        </div>
        <div className="search-input flex-no-wrap">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Utilities;
