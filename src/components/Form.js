import React, { useContext } from "react";
import "./Form.css";
import { IoIosAddCircle } from "react-icons/io";
const Form = ({ inputText, setInputText, addTask }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="taskBar">
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        className="todo-input"
        placeholder="Enter a task..."
      />
      <button onClick={addTask} className="todo-button" type="submit">
        <IoIosAddCircle />
      </button>
    </div>
  );
};

export default Form;
