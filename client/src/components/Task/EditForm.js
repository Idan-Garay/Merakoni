import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "react-modal";
import modalStyles from "./Task.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditForm = ({ task, show, handleClose, handleEdit }) => {
  const [editedTask, setEditedTask] = useState({
    ...task,
  });

  const labels = ["Homework", "Project", "Study"];

  const handleChange = (e) => {
    let { value, name } = e.target;

    if (name === "todo_date") {
      value = new Date(value).toLocaleDateString();
    }
    editedTask[name] = value;
    setEditedTask({ ...editedTask });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(editedTask);
    handleClose();
  };

  const minDate = new Date().toISOString().slice(0, 10);

  return (
    <Modal
      isOpen={show}
      parentSelector={() => document.querySelector("#root")}
      style={modalStyles}
    >
      <form className="todo_form" onSubmit={handleSubmit}>
        <div className="update_form_div">
          <h1 className="form_title">UPDATE TASK</h1>
          <input
            type="text"
            placeholder="Update task"
            value={editedTask.description}
            name="description"
            className="todo_input edit"
            onChange={handleChange}
          />
          <select
            className="todo_input select"
            defaultValue={editedTask.label}
            onChange={handleChange}
            name="label"
          >
            {labels.map((label, index) => (
              <option key={index} value={label}>
                {label}
              </option>
            ))}
          </select>
          <DatePicker
            selected={
              editedTask.todo_date.length
                ? new Date(editedTask.todo_date)
                : new Date()
            }
            onChange={handleChange}
            name="todo_date"
            className="todo_input edit"
          />
          <button className="todo_button edit">UPDATE</button>
        </div>
      </form>
    </Modal>
  );
};

EditForm.propTypes = {
  task: PropTypes.shape({
    taskId: PropTypes.number,
    description: PropTypes.string,
    label: PropTypes.string,
    todo_date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    date_accomplished: PropTypes.string,
  }),

  handleClose: PropTypes.func,
  handleEdit: PropTypes.func,
};

export default EditForm;
