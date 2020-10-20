import React from 'react';

function Todo(props) {
    console.log(props);
    return (
        <li>
            <div>
              <input id='todo-0' type='checkbox' defaultChecked={true} />
              <label className='todo-label'>
                {props.name}
                </label>
            </div>
            <div className='btn-group'>
              <button type='button' className='btn'>
                Edit
              </button>
              <button type='button' className='btn btn-danger' onClick={props.deleteItem}>
                Delete
              </button>
            </div>
          </li>
    )
}

export default Todo;