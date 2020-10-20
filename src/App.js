import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Todo List</h1>
        <form>
          <h2>
            <label>
              What needs doing?
            </label>
          </h2>
          <input
            type='text'
            id='new-todo-input'
            className='input'
            name='text'
            autoComplete='off'
          />
          <button type='submit' className='btn btn-success'>Add</button>
        </form>
        <div className='btn-group'>
          <button type='button' className='btn btn-light border btn-toggle'>
            <span>All</span>
          </button>
          <button type='button' className='btn btn-light border toggle-btn'>
            <span>Active</span>
          </button>
          <button type='button' className='btn btn-light border toggle-btn'>
            <span>Completed</span>
          </button>
        </div>
        <h2 id='list-heading'>
          3 tasks remaining
          </h2>
        <ul className='todo-list'>
          <li>
            <div>
              <input id='todo-0' type='checkbox' defaultChecked={true} />
              <label className='todo-label'>
                Eat
                </label>
            </div>
            <div className='btn-group'>
              <button type='button' className='btn'>
                Edit
              </button>
              <button type='button' className='btn btn-danger'>
                Delete
              </button>
            </div>
          </li>
          <li>
            <div>
              <input id='todo-1' type='checkbox' defaultChecked={false} />
              <label className='todo-label'>
                Sleep
                </label>
            </div>
            <div className='btn-group'>
              <button type='button' className='btn'>
                Edit 
              </button>
              <button type='button' className='btn btn-danger'>
                Delete 
              </button>
            </div>
          </li>
          <li>
            <div>
              <input id='todo-2' type='checkbox' defaultChecked={false} />
              <label className='todo-label'>
                Drink
                </label>
            </div>
            <div className='btn-group'>
              <button type='button' className='btn'>
                Edit 
              </button>
              <button type='button' className='btn btn-danger'>
                Delete 
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
