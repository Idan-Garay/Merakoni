import React, {useState} from 'react';

function LabelForm(props) {
    const [labels, setLabel] = useState('');

    const handleChange = e => {
        setLabel(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            name: labels
        });
        setLabel('');
    };

    return (
        <div>
            <form className="todo_form" onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Enter a label...' 
                    name='text'
                    value={labels}
                    className='todo_input'
                    onChange={handleChange}
                />
                <button className='todo_button'>ADD</button>
            </form>
        </div>
    )
}

export default LabelForm