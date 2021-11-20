import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";
// import { labelData } from "./taskdata";

function TaskForm(props) {
  const [input, setInputs] = useState(props.edit ? props.edit.description : "");
  const [date, setDate] = useState(props.edit ? props.edit.date_created : "");
  const [label, setLabel] = useState(props.edit ? props.edit.label : "");
  const [options, setOptions] = useState([]);
  const minDate = new Date().toISOString().slice(0, 10);

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const labelChange = (e) => {
    setLabel(e.target.value);
  };

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Returns the newly inputed value to Todo
    props.onSubmit(
      {
        description: input,
        label: label,
        date_created: date,
      },
      props.dispatch
    );

    setInputs("");
    setLabel("");
    setDate("");
  };

  // Updates the Label options from the newly created labels
  // useEffect(() => {
  //   setOptions(labelData);
  // }, []);

  return (
    <form className="todo_form" onSubmit={handleSubmit}>
      {props.edit ? (
        <EditForm />
      ) : (
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
      )}
    </form>
  );
}

export default TaskForm;
