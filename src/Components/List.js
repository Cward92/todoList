import React from 'react';
import Todo from './Todo';

function List(props) {
    return <ul>{props.items.map((x) => <Todo key={x.name} item={x} name={x.name} completed={x.completed} deleteItem={props.deleteItem} />)}</ul>
};

export default List;