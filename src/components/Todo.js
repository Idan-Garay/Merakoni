import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { MdDelete, MdEdit } from "react-icons/md";
import {AiOutlineCalendar} from 'react-icons/ai';

function Todo({toDos, completeToDo, removeToDo, updateToDo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        label: '',
        week: ''
    });

    const submitUpdate = value => {
        updateToDo(edit.id, value)
        setEdit({
            id: null,
            value: '',
            label: '',
            week: ''
        });
    };

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return toDos.map((toDo, index) => (
        <div className={toDo.isComplete ? 'todo_row complete': 'todo_row'} key={index}>
            <div className="text" key={toDo.id} onClick={() =>  completeToDo(toDo.id)}>
                {toDo.text}
            </div>
            <div className="icons">
                <div className="task_label">
                    <span>{toDo.label}</span>
                </div>
                <div className="week_day">
                    <AiOutlineCalendar 
                        className='calendar_icon'
                    />
                    {toDo.date}
                </div>
                <MdEdit 
                    onClick={() => setEdit({id: toDo.id, value: toDo.text, label: toDo.label, week: toDo.week})}
                    className='edit_icon'
                />
                <MdDelete
                    onClick={() => removeToDo(toDo.id)}
                    className='delete_icon'
                />
            </div>
        </div>
    ))
}

export default Todo
