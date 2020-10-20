import React from 'react';
import Header from './Components/Header.js';
import List from './Components/List.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ['Eat', 'Sleep', 'Drink'],
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.calcRemaining = this.calcRemaining.bind(this);
  }

  deleteItem(x) {
    console.log(x);
    console.log('item deleted')
  }

  calcRemaining() {
    console.log('These items are left');
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
        <Header calcRemaining={this.calcRemaining} />

        {/* list to display todo items */}
        <List names={this.state.name} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
