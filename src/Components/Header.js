import React from 'react';

function Header(props) {
    return (
        <h2 id='list-heading'>
          {props.calcRemaining(props.list.length)}
        </h2>
    )
}

export default Header;