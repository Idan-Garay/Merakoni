import "./Task.css";
import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function Task({ day }) {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(day ? day.tasks : []);

  const handleSubmit = () => {
    day.tasks = todos;
    dispatch({ type: "ADD TASK", value: day });
  };

  return (
    <div className="Task">
      <div id="Search">
        <header>
          <h1>What are your plans?</h1>
        </header>
        <Form
          inputText={inputText}
          addTask={handleSubmit}
          setInputText={setInputText}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}

export default Task;
