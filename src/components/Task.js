import "./Task.css";
import React, { useState, useContext } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import * as dayjs from "dayjs";
import { TasksContext } from "../App";

function Task({ day }) {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(day ? day.tasks : []);
  const { dispatch } = useContext(TasksContext);

  const handleSubmit = () => {
    const task = {
      taskID: day.tasks.length + 1,
      description: inputText,
      label: "red",
      done: false,
      date_created: dayjs(new Date(), "DD/MM/YYYYY"),
    };
    setTodos([...todos, task]);
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
