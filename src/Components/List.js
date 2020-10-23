import React from 'react';
import Todo from './Todo';

function List(props) {
    function readDisplay(x){
        if(props.display === 'active'){
            return x.completed === false;
        }
        if(props.display === 'completed'){
            return x.completed === true;
        } 
        if(props.display === 'all'){
            return x
        }
    }

    return (
        <ul><button className='btn btn-sm btn-primary' onClick={() => props.selectAll()}>Select All</button>{props.items.filter(x => readDisplay(x)).map(x => <Todo key={x.name} checkboxChange={props.checkboxChange} item={x} name={x.name} completed={x.completed} deleteItem={props.deleteItem} />)}</ul>
    );
};

export default List;