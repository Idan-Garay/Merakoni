import React, { useState } from "react";
import "./DayForm.css";
import { FaTimes, FaPlusCircle, FaPlus } from "react-icons/fa";
// import TaskForm from "./TaskForm";

const DayForm = ({ toggleModal }) => {
  const [toggleTaskForm, setToggleTaskForm] = useState(false);

  const openTaskForm = () => {
    setToggleTaskForm(true);
  };
  const closeTaskForm = () => {
    setToggleTaskForm(false);
  };

  return (
    <div className="overlay">
      <div className="modal" id="modal-dayForm">
        <header>
          <div></div>
          <FaTimes onClick={toggleModal} className="point" />
        </header>
        <form>
          <div className="form-left w-50 h-100">
            <header className="form-header">
              <input
                type="text"
                className="input"
                name="highlight"
                placeholder="highlight of the day"
              />
              <FaPlusCircle
                style={{
                  fontWeight: "100",
                  color: "#ED716A",
                  background: "white",
                }}
                className="point"
                onClick={openTaskForm}
              />
            </header>
            <div className="little-details">
              <p>[n] tasks</p>
              <p>Monday</p>
            </div>
          </div>
          <div className="form-right w-50 h-100 ">
            <header className="form-header flex-column">
              <h2>Tasks</h2>
              <p className="little-details fs-small">TUESDAY, SEP 1</p>
            </header>
            <div className="form-body flex-column">
              <div className="task flex-no-wrap">
                <input type="checkbox" className="input" name="task" />
                <p>description</p>
              </div>
            </div>
          </div>
        </form>
        {/* {toggleTaskForm && <TaskForm closeTaskForm={closeTaskForm} />} */}
      </div>
    </div>
  );
};
export default DayForm;
