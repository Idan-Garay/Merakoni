import React, { useState } from "react";
import LabelForm from "./LabelForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { labelData } from "./taskdata";
// import { taskData } from "./taskdata";

function Label({ taskData }) {
    const [labels, setLabel] = useState(labelData);
    const [task, setTask] = useState(taskData);
    const [edit, setEdit] = useState({
        id: null,
        name: "",
    });

    const submitUpdate = value => {
        updateLabel(edit.id, value)
        setEdit({
            id: null,
            name: "",
        });
    };

    const addLabel = label =>{
        if(!label.name || /^\s*$/.test(label.name)){
            return;
        }

        // Adds the inputed label at the end of the array
        const newLabels = [...labels,label];
        setLabel(newLabels);

        //Insert the label in the Database
    };

    const removeLabel = id => {
        // Deletes the label
        const removeArr = [...labels].filter(label => label.id !== id );
        setLabel(removeArr);

        // Delete the label in the Database
    };

    const updateLabel = (id, newValue) => {
        if(!newValue.name || /^\s*$/.test(newValue.name)){
            return;
        }

        // Updates the task
        setLabel(
            prev => prev.map(item => (item.id === id ?newValue : item))
        );

        // Update the values in the Database
    };

    return (edit.id) ? (
        <div>
            <LabelForm add={labels} onSubmit={addLabel}/>
            <LabelForm edit={edit} onSubmit={submitUpdate}/>
            {
                labels.map((lbl, i) => (
                    <div className="label_form_div" key={i}>
                        <h2>{lbl.name}</h2>
                        {
                            (task.filter((t, n) => t.label === lbl.name) != 0) ? (
                                task.filter((t, n) => t.label === lbl.name).map((tsk, ndx) => (
                                    <div className="todo_row" key={ndx}>
                                        <span>{tsk.description}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="icons">
                                    <MdEdit 
                                        onClick={() => setEdit({id: lbl.id, name: lbl.name})}
                                        className='edit_icon'
                                    />
                                    <MdDelete
                                        onClick={() => removeLabel(lbl.id)}
                                        className='delete_icon'
                                    />
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    ) : (
        <div>
            <LabelForm add={labels} onSubmit={addLabel}/>
            {
                labels.map((lbl, i) => (
                    <div className="label_form_div" key={i}>
                        <h2>{lbl.name}</h2>
                        {
                            (task.filter((t, ndx) => t.label === lbl.name) != 0) ? (
                                task.filter((t, ndx) => t.label === lbl.name).map((tsk, ndx) => (
                                    <div className="todo_row" key={ndx}>
                                        <span>{tsk.description}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="icons">
                                <MdEdit 
                                    onClick={() => setEdit({id: lbl.id, name: lbl.name})}
                                    className='edit_icon'
                                />
                                <MdDelete
                                    onClick={() => removeLabel(lbl.id)}
                                    className='delete_icon'
                                />
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Label;
