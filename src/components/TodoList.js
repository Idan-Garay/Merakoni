import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, setTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.length
          ? todos.map((todo) => (
              <Todo
                setTodo={setTodo}
                key={todo.taskID}
                todo={todo}
                text={todo.description}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default TodoList;
