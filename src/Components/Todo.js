import React from 'react';

function Todo(props) {
  return (
    <li>
      <div>
        <input id={props.name} type='checkbox' checked={props.completed} defaultChecked={props.completed} onChange={() => props.checkboxChange(props.item)}/>
        <label className='todo-label'>
          {props.name}
        </label>
      </div>
      <div className='btn-group'>
        <button type='button' className='btn btn-secondary'>
          Edit
              </button>
        <button type='button' className='btn btn-danger' onClick={() => props.deleteItem(props.item)}>
          Delete
              </button>
      </div>
    </li>
  )
}

export default Todo;