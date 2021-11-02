import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, setTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodo={setTodo}
            key={todo.id}
            todo={todo}
            text={todo.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
