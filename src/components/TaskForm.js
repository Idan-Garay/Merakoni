import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { labelData } from "./taskdata";

Modal.setAppElement("#root");

function TaskForm(props) {
    const [input, setInputs] = useState(props.edit ? props.edit.description : "");
    const [date, setDate] = useState(props.edit ? props.edit.date_created : "");
    const [label, setLabel] = useState(props.edit ? props.edit.label : "");
    const [options, setOptions] = useState([]);
    const minDate = new Date().toISOString().slice(0, 10);

    const modalStyles = {
        content: {
            top: "20%",
            backgroundColor: "transparent",
            border: "none",
            overflow: "none",
        },
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)"
        }
    }

    const handleChange = e => {
        setInputs(e.target.value);
    };

    const labelChange = e => {
        setLabel(e.target.value);
    };

    const dateChange = e => {
        setDate(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Returns the newly inputed value to Todo
        props.onSubmit({
            taskID: Math.floor(Math.random() * 10000),
            description: input,
            label: label,
            date_created: date
        });

        setInputs('');
        setLabel('');
        setDate('');
    };

    // Updates the Label options from the newly created labels
    useEffect(() => {
        setOptions(labelData);
    }, []);

    return (
        <div>
            {
                (props.edit) ? (   
                    <Modal 
                        isOpen={true}
                        style={modalStyles}
                    >
                        <form className="todo_form" onSubmit={handleSubmit}>
                            <div className="update_form_div">
                                <h1 className="form_title">UPDATE TASK</h1>
                                <input 
                                    type="text" 
                                    placeholder="Update task" 
                                    value={input}
                                    name="text" 
                                    className="todo_input edit"
                                    onChange={handleChange}
                                />
                                <select
                                    className="todo_input select"
                                    value={label}
                                    onChange={labelChange}
                                >
                                    <option hidden>
                                        Choose a Label
                                    </option>
                                    {
                                        options.map((lbl, index) => (
                                            <option key={lbl.id}>{lbl.name}</option>
                                        ))
                                    }
                                </select>
                                <input 
                                    type="date"
                                    min={minDate}
                                    value={date}
                                    className="todo_input edit"
                                    onChange={dateChange}
                                />
                                <button className="todo_button edit">UPDATE</button>
                            </div>
                        </form>
                    </Modal>
                ):(
                    <form className="todo_form" onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Enter a task..." 
                            value={input}
                            name="text" 
                            className="todo_input"
                            onChange={handleChange}
                        />
                        <button className="todo_button">ADD</button>
                    </form>
                )
            } 
        </div>
    )
}

export default TaskForm
