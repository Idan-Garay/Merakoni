import React, {useState} from 'react';
import LabelForm from './LabelForm';
import {labelData} from "./taskdata";
import {taskData} from "./taskdata";

function Label() {
    const [labels, setLabel] = useState(labelData);
    const [task, setTask] = useState(taskData);

    const addLabel = label =>{
        if(!label.name || /^\s*$/.test(label.name)){
            return;
        }

        // Adds the inputed task at the end of the array
        const newLabels = [...labels,label];
        setLabel(newLabels);
    };

    return (
        <div>
            <h1 className="title">Create Labels</h1>
            <LabelForm add={labels} onSubmit={addLabel}/>
            {
                labels.map((lbl, i) => (
                        <div className="label_form_div">
                        <h2>{lbl.name}</h2>
                        {
                            task.filter((t, ndx) => t.label === lbl.name).map((tsk, ndx) => (
                                    <div className="todo_row">
                                        <span>{tsk.description}</span>
                                    </div>
                            ))
                        }
                        </div>
                    ))
            }
        </div>
    )
}

export default Label
