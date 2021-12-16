import React from "react";
import "./Utilities.css";
import { FaEllipsisV, FaFilter, FaSearch, FaRegClock } from "react-icons/fa";
import CreateDay from "./CreateDay";
import { Link } from "react-router-dom";

const Utilities = ({ toggleModal }) => {
  return (
    <div className="utilities">
      <div className="flex-no-wrap">
        <h2>Habit Tracker</h2>
        <Link to="/timer" style={{ textDecorationColor: "black" }}>
          <FaRegClock size={30} cursor={"pointer"} />
        </Link>
        {/* <div className="ellipsis-day">
          <FaEllipsisV className="point" />
          <CreateDay toggleModal={toggleModal}/>
        </div> */}
      </div>
      {/* <div className="search-bar">
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
      </div> */}
    </div>
  );
};

export default Utilities;
