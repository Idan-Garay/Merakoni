import React, {useState, useEffect} from 'react';
import {labelData} from "./data";


function TodoForm(props) {
    const [input, setInputs] = useState(props.edit ? props.edit.value: '');
    const [week, setWeek] = useState(props.edit ? props.edit.week: '');
    const [label, setLabel] = useState(props.edit ? props.edit.label: '');
    
    const [options, setOptions] = useState([]);

    const minDate = new Date().toISOString().slice(0, 10);

    const handleChange = e => {
        setInputs(e.target.value);
    };

    const labelChange = e => {
        setLabel(e.target.value);
    };

    const weekChange = e => {
        setWeek(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            label: label,
            week: week
        });

        setInputs('');
        setLabel('');
        setWeek('');
    };

    useEffect(() => {
        setOptions(labelData);
    }, []);

    return (
        <form className="todo_form" onSubmit={handleSubmit}>
            {
                (props.edit) ? (   
                    <>
                    <div className="update_form_div">
                        <h1 className="form_title">UPDATE TASK</h1>
                        <input 
                            type='text' 
                            placeholder='Update task' 
                            value={input}
                            name='text' 
                            className='todo_input edit'
                            onChange={handleChange}
                        />
                        <select
                            className='todo_input select'
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
                            type='date'
                            min={minDate}
                            value={week}
                            className='todo_input edit'
                            onChange={weekChange}
                        />
                        <button className='todo_button edit'>UPDATE</button>
                    </div>
                    </>
                    ) : (
                    <>
                    <input 
                        type='text' 
                        placeholder='Enter a task...' 
                        value={input}
                        name='text' 
                        className='todo_input'
                        onChange={handleChange}
                    />
                    <button className='todo_button'>ADD</button>
                    </>)
            } 
        </form  >
    )
}

export default TodoForm
