import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const EditForm = (task, show, handleClose, handleEdit) => {
  const [editedTask, setEditedTask] = useState({
    ...task,
  });

  const labels = ["Homework", "Project", "Study"];

  const handleChange = (e) => {
    const field = e.target.name;
    editedTask[field] = e.target.value;
    setEditedTask({ ...editedTask });
  };

  const handleSubmit = () => {
    handleEdit(task);
  };

  const minDate = new Date().toISOString().slice(0, 10);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>UPDATE TASK</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
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
            value={editedTask.label}
            onChange={handleChange}
            name="label"
          >
            <option hidden>Choose a Label</option>
            {labels.map((label, index) => (
              <option key={index}>{label.name}</option>
            ))}
          </select>
          <input
            type="date"
            min={minDate}
            value={editedTask.todo_date}
            className="todo_input edit"
            onChange={handleChange}
            name="date"
          />
          <button className="todo_button edit">UPDATE</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
        <Button variant="primary">Save</Button>
      </Modal.Footer>
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
  show: PropTypes.func,
  handleClose: PropTypes.func,
  handleEdit: PropTypes.func,
};

export default EditForm;
