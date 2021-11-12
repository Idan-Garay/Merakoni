import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {taskData} from "./taskdata";

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
        if(!toDo.description || /^\s*$/.test(toDo.description)){
            return;
        }
        // If task is created the date_created and week is set to the current date.
        if(!toDo.date_created){
            const d = new Date();
            toDo.date_created = d.toISOString().slice(0, 10);
            toDo.week = weekday[d.getDay()];
        }
        // Adds the inputed task at the end of the array
        const newToDos = [...toDos,toDo];
        setToDos(newToDos); 
    };

    const removeToDo = id => {
        // Deletes the task
        const removeArr = [...toDos].filter(toDo => toDo.taskID !== id );
        setToDos(removeArr);
    };

    const updateToDo = (toDoId, newValue) => {
        if(!newValue.description || /^\s*$/.test(newValue.description)){
            return;
        }

        if(!newValue.date_created){
            return;
        }else{
            // Gets the new day of the week from the updated date_created
            const d = new Date(newValue.date_created);
            newValue.week = weekday[d.getDay()];
        }
        // Updates the task
        setToDos(
            prev => prev.map(item => (item.taskID === toDoId ?newValue : item))
        );
    };

    const completeToDo = id =>{
        let updatedToDos = toDos.map( toDo => {
            if(toDo.taskID === id){
                if(toDo.date_accomplished == ""){
                    // Updates the date accoplished to the current date.
                    const d = new Date();
                    toDo.date_accomplished = d.toISOString().slice(0, 10);
                }else{
                    // Updates the date to be empty
                    toDo.date_accomplished = "";
                }
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
