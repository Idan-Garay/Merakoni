import "./Task.css";
import React, { useState, useContext, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { TasksContext } from "../App";

function Task({ dayId }) {
  const { days } = useContext(TasksContext);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    dispatch({ type: "ADD TASK", value: inputText });
  };

  useEffect(() => {
    const { tasks } = days.find((day) => day.id === dayId)
    setTodos(tasks || []);
  }, []);

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
