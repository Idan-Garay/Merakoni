import React from "react";
import "./CreateDay.css";

const CreateDay = ({ toggleModal }) => {
  return (
    <button onClick={toggleModal} className="create-day-btn point">
      New Day
    </button>
  );
};

export default CreateDay;
