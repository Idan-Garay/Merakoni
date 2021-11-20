import React from "react";

const EditForm = () => {
  return (
    <div className="update_form_div">
      <h1 className="form_title">UPDATE TASK</h1>
      <input
        type="text"
        placeholder="Update task"
        value={input}
        name="text"
        className="todo_input edit"
        onChange={handleChange}
      />
      <select
        className="todo_input select"
        value={label}
        onChange={labelChange}
      >
        <option hidden>Choose a Label</option>
        {options.map((lbl, index) => (
          <option key={lbl.id}>{lbl.name}</option>
        ))}
      </select>
      <input
        type="date"
        min={minDate}
        value={date}
        className="todo_input edit"
        onChange={dateChange}
      />
      <button className="todo_button edit">UPDATE</button>
    </div>
  );
};

export default EditForm;
