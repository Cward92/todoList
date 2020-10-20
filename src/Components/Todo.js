import React from 'react';

function Todo(props) {
  return (
    <li>
      <div>
        <input id='todo-0' type='checkbox' defaultChecked={props.completed} />
        <label className='todo-label'>
          {props.name}
        </label>
      </div>
      <div className='btn-group'>
        <button type='button' className='btn btn-secondary'>
          Edit
              </button>
        <button type='button' className='btn btn-danger' onClick={() => props.deleteItem(props.name)}>
          Delete
              </button>
      </div>
    </li>
  )
}

export default Todo;