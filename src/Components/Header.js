import React from 'react';

function Header(props) {
    return (
        <h2 id='list-heading'>
          {props.calcRemaining(props.list.filter(x => x.completed === false).length)}
        </h2>
    )
}

export default Header;