import React from "react";
import './TodoList.css';
import Todo from './Todo';

const TodoList = ({todos, setTodo}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo 
                    setTodo={setTodo} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;