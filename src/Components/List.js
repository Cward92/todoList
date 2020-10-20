import React from 'react';
import Todo from './Todo';

function List(props) {
    console.log(props);

    return <ul>{props.names.map((x) => <Todo key={x} name={x} completed={false} deleteItem={props.deleteItem} />)}</ul>
};

export default List;