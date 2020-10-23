import React, {useState} from 'react';

function Input(props) {
    const [name, setName] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        props.addItem(name);
        setName("");
    }

    function handleChange(e) {
        console.log('this is updating');
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='new-todo-input'
            className='input'
            name='text'
            autoComplete='off'
            value={name}
            onChange={handleChange}
          />
          <button type='submit' className='btn btn-success'>Add</button>
        </form>
    )
}

export default Input;