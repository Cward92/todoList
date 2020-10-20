import React from 'react';
import Todo from './Components/Todo.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem() {
    console.log('item deleted');
  }

  render() {
    return (
      <div className='container'>
        <h1>Todo List</h1>
        {/* text form to input todo items */}
        <form>
          <input
            type='text'
            id='new-todo-input'
            className='input'
            name='text'
            autoComplete='off'
          />
          <button type='submit' className='btn btn-success'>Add</button>
        </form>
        {/* button group to filter todo items */}
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
        {/* header to display remaining todo items */}
        <h2 id='list-heading'>
          3 tasks remaining
          </h2>
          {/* list to display todo items */}
        <ul className='todo-list'>
          <Todo 
            name='Eat'
            completed={true}
            deleteItem = {this.deleteItem} 
          />
          <Todo 
            name='Sleep'
            completed={false}
            deleteItem = {this.deleteItem} 
          />
          <Todo 
            name='Drink'
            completed={false}
            deleteItem = {this.deleteItem} 
          />
          {/* <li>
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
          </li> */}
        </ul>
      </div>
    );
  }
}

export default App;
