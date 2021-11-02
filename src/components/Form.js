import React from "react";
import "./Form.css";
import { IoIosAddCircle } from "react-icons/io";

const Form = ({ setInputText, todos, setTodo, inputText }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
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
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <IoIosAddCircle />
      </button>
    </div>
  );
};

export default Form;
