import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {taskData} from "./data";

function TodoList() {
    const [toDos, setToDos] = useState(taskData);

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    const addTodo = toDo =>{
        if(!toDo.text || /^\s*$/.test(toDo.text)){
            return;
        }

        if(!toDo.week){
            const d = new Date();
            toDo.week = d.toISOString().slice(0, 10);
            toDo.date = weekday[d.getDay()];
        }

        const newToDos = [...toDos,toDo];

        setToDos(newToDos); 
    };

    const removeToDo = id => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id );
        setToDos(removeArr);
    };

    const updateToDo = (toDoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        
        if(!newValue.week){
            return;
        }else{
            const d = new Date(newValue.week);
            newValue.date = weekday[d.getDay()];
        }

        setToDos(
            prev => prev.map(item => (item.id === toDoId ?newValue : item))
        );
    };

    const completeToDo = id =>{
        let updatedToDos = toDos.map( toDo => {
            if(toDo.id === id){
                toDo.isComplete = !toDo.isComplete;
            }
            return toDo
        });
        
        setToDos(updatedToDos);
    };

    return (
        <>
        <div>
            <h1 className="title">What are your Plans for the Week?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                toDos={toDos}
                completeToDo={completeToDo}
                removeToDo={removeToDo}
                updateToDo={updateToDo} 
            />
        </div>
        </>
    )
}

export default TodoList
