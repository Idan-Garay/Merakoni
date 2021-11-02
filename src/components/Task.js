import "./Task.css";
import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function Task() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);

  return (
    <div className="Task">
      <div id="Search">
        <header>
          <h1>What are your plans?</h1>
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodo={setTodo}
          setInputText={setInputText}
        />
        <TodoList setTodo={setTodo} todos={todos} />
      </div>
    </div>
  );
}

export default Task;
