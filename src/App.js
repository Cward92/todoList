import React from 'react';
import Header from './Components/Header.js';
import List from './Components/List.js';
import Filter from './Components/Filter.js';
import Input from './Components/Input.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      display: '',
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.calcRemaining = this.calcRemaining.bind(this);
    this.changeView = this.changeView.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.selectAll = this.selectAll.bind(this);

  }

  componentDidMount() {
    // Retrieve the object from storage
    if (window.localStorage.items) {
      var list = localStorage.getItem('items');
      list = JSON.parse(list);
      this.setState({ items: list });

    } else {
      var items = [{ name: 'Eat', completed: false }, { name: 'Sleep', completed: false }, { name: 'Drink', completed: false }];
      // Put the object into storage
      localStorage.setItem('items', JSON.stringify(items));
      this.setState({ items: items })
    }
    if (window.localStorage.display) {
      var tab = localStorage.getItem('display');
      this.setState({ display: tab });
    } else {
      var tab = 'all';
      localStorage.setItem('display', tab);
      this.setState({ display: tab});
    }
  }

  addItem(name) {
    let newItems = this.state.items;
    let obj = { name: name, completed: false };
    newItems.push(obj);
    localStorage.setItem('items', JSON.stringify(newItems));
    this.setState({ items: newItems });
  }

  deleteItem(x) {
    let arr1 = this.state.items.filter((y) => {
      if (y !== x) {
        return y;
      }
    });
    localStorage.setItem('items', JSON.stringify(arr1));
    this.setState({ items: arr1 });
  }

  checkboxChange(item) {
    let arr1 = this.state.items;
    item.completed = !item.completed;
    localStorage.setItem('items', JSON.stringify(arr1));
    this.setState({ item: arr1 });
  }

  changeView(x) {
    localStorage.setItem('display', x);
    this.setState({ display: x });
  }

  calcRemaining(num) {
    return `${num} Items Are Left`;
  }

  selectAll() {
    let arr = this.state.items;
    for(let i = 0; i < arr.length; i++){
      arr[i].completed = !arr[i].completed
    }
    localStorage.setItem('items', JSON.stringify(arr));
    this.setState({ items: arr});
  }

  render() {
    return (
      <div className='container'>
        <h1>Todo List</h1>
        {/* text form to input todo items */}
        <Input addItem={this.addItem} />
        {/* button group to filter todo items */}
        <Filter changeView={this.changeView} />
        {/* header to display remaining todo items */}
        <Header list={this.state.items} calcRemaining={this.calcRemaining} />
        {/* list to display todo items */}
        <List display={this.state.display} selectAll={this.selectAll} checkboxChange={this.checkboxChange} items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
