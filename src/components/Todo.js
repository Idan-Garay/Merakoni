import React from 'react';
import './Todo.css';
import { MdDelete, MdEdit } from "react-icons/md";

const Todo = ({text, todo, todos, setTodo}) => {
    const deleteHandler = () => {
        setTodo(todos.filter((e) => e.id !== todo.id));
    };
    const completeHandler = () => {
        setTodo(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };

    return ( 
        <div className="todo">
            <input onClick={completeHandler} type="checkbox" className="complete-btn"/>
            <li className={`todo-item ${todo.completed? "completed" : ''}`}>{text}</li>
            <button className="complete-btn">
                <MdEdit />
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <MdDelete />
            </button>
        </div>
    );
};

export default Todo
