import React, { useContext, useState } from "react";
import "./Day.css";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TasksContext } from "../App";

const Day = ({ dayIdx, day }) => {
  const { dispatch } = useContext(TasksContext);
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE DAY", value: dayIdx });
  };

  return (
    <div className="day">
      <div className="top flex-no-wrap baseline">
        <Link to={`/day/${day.dayId.get("day")}`}>
          <h2>[Highlight]</h2>
        </Link>
        <ul className="dropdown-menu">
          <FaEllipsisV onClick={toggle} className="point" />
          {show ? (
            <div>
              <li className="point">Edit</li>
              <li className="point" onClick={handleDelete}>
                Delete
              </li>
            </div>
          ) : null}
        </ul>
      </div>
      <div className="overview">
        <ul>
          {day.tasks.map((task, index) => (
            <li key={index}>{task.description}</li>
          ))}
        </ul>
      </div>
      <div className="little-details">
        <p>[n] tasks</p>
        <p>{day.name}</p>
      </div>
    </div>
  );
};

export default Day;
