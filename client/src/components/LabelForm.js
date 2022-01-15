import React, {useState} from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root');

function LabelForm(props) {
    const [labels, setLabel] = useState(props.edit ?props.edit.name:'');

    const modalStyles = {
        content: {
            top: '20%',
            backgroundColor:'transparent',
            border: 'none',
            overflow: 'none'
        },
        overlay: {
            backgroundColor:'rgba(0,0,0,0.5)'
        }
    }

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
        (props.edit) ? (
            <Modal 
                isOpen={true}
                style={modalStyles}
            >
                <div className="update_form_div2">
                    <h1 className="form_title">Update Label</h1>
                    <form className="todo_form" onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            placeholder='Enter a label...' 
                            name='text'
                            value={labels}
                            className='todo_input edit'
                            onChange={handleChange}
                        />
                        <button className='todo_button edit'>UPDATE</button>
                    </form>
                </div>
            </Modal>
        ) : (
            <div>
                <h1 className="title">Create Labels</h1>
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
    )
}

export default LabelForm;