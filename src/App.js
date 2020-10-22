import React from 'react';
import Header from './Components/Header.js';
import List from './Components/List.js';
import Filter from './Components/Filter.js';
import Input from './Components/Input.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Eat', completed : false}, 
        { name: 'Sleep', completed : false}, 
        { name: 'Drink', completed : false}],
      display: 'all',
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.calcRemaining = this.calcRemaining.bind(this);
    this.changeView = this.changeView.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  addItem(name) {
    let newItems = this.state.items;
    let obj = { name: name, completed: false};
    newItems.push(obj);
    this.setState({items : newItems});
  }

  deleteItem(x) {
    let arr1 = this.state.items.filter((y) => {
      if(y !== x){
        return y;
      }
    });
    this.setState({items : arr1});
  } 

  checkboxChange(item) {
    let arr1 = this.state.items;
    item.completed = !item.completed;
    this.setState( {item : arr1} );
}

  changeView(x) {
    console.log('changing');
    console.log(x);
    this.setState({ display : x});
  }

  calcRemaining(num) {
    return `${num} Items Are Left`;
  }
  render() {
    return (
      <div className='container'>
        <h1>Todo List</h1>
        {/* text form to input todo items */}
        <Input addItem={this.addItem}/>
        {/* button group to filter todo items */}
        <Filter changeView={this.changeView}/>
        {/* header to display remaining todo items */}
        <Header list={this.state.items} calcRemaining={this.calcRemaining} />
        {/* list to display todo items */}
        <List display={this.state.display} checkboxChange={this.checkboxChange} items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
