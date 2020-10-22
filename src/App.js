import React from 'react';
import Header from './Components/Header.js';
import List from './Components/List.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Eat', completed : true}, 
        { name: 'Sleep', completed : false}, 
        { name: 'Drink', completed : false}],
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.calcRemaining = this.calcRemaining.bind(this);
  }

  deleteItem(x) {
    let arr1 = this.state.items.filter((y) => {
      if(y !== x){
        return y;
      }
    });
    this.setState({items : arr1});
  }


  calcRemaining(props) {
    return `${props} Items Are Left`;
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
        <Header list={this.state.items} calcRemaining={this.calcRemaining} />

        {/* list to display todo items */}
        <List items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
