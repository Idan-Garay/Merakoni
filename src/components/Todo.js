import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { MdDelete, MdEdit } from "react-icons/md";
import {AiOutlineCalendar} from 'react-icons/ai';

function Todo({toDos, completeToDo, removeToDo, updateToDo}) {
    const [edit, setEdit] = useState({
        taskID: null,
        description: '',
        label: '',
        date_created: ''
    });

    // Calls updateToDo with the new edited values 
    const submitUpdate = value => {
        updateToDo(edit.taskID, value)
        setEdit({
            taskID: null,
            description: '',
            label: '',
            date_created: ''
        });
    };

    // Calls TodoForm and sends the value of the clicked task
    if(edit.taskID){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return toDos.map((toDo, index) => (
        <div className={toDo.date_accomplished ? 'todo_row complete': 'todo_row'} key={index}>
            <div className="text" key={toDo.taskID} onClick={() =>  completeToDo(toDo.taskID)}>
                {toDo.description}
            </div>
            <div className="icons">
                <div className="task_label">
                    <span>{toDo.label}</span>
                </div>
                <div className="week_day">
                    <AiOutlineCalendar 
                        className='calendar_icon'
                    />
                    {toDo.week}
                </div>
                <MdEdit 
                    onClick={() => setEdit({taskID: toDo.taskID, description: toDo.description, label: toDo.label, date_created: toDo.date_created})}
                    className='edit_icon'
                />
                <MdDelete
                    onClick={() => removeToDo(toDo.taskID)}
                    className='delete_icon'
                />
            </div>
        </div>
    ))
}

export default Todo
