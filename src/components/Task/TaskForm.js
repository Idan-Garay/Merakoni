import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { getDayFromDayName } from "../../api/days";
import { getToday } from "../../api/days";

function TaskForm(props) {
  const [input, setInputs] = useState(props.edit ? props.edit.description : "");
  const [date, setDate] = useState(props.edit ? props.edit.date_created : "");
  const [label, setLabel] = useState(props.edit ? props.edit.label : "");

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Returns the newly inputed value to Todo
    const { dayName } = props;
    props.onSubmit(
      {
        description: input,
        label: label,
        date_created: getToday(),
        date_accomplished: "",
        todo_date: dayName !== undefined ? getDayFromDayName(dayName) : date,
      },
      props.dispatch
    );

    setInputs("");
    setLabel("");
    setDate("");
  };

  return (
    <form className="todo_form" onSubmit={handleSubmit}>
      <>
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          name="text"
          className="todo_input"
          onChange={handleChange}
        />
        <button className="todo_button">ADD</button>
      </>
    </form>
  );
}

TaskForm.propTypes = {
  onSubmit: PropTypes.func,
  dispatch: PropTypes.any,
  dayName: PropTypes.string,
};

export default TaskForm;
