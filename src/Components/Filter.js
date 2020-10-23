import React from 'react';

function Filter(props) {
    return(
        <div className='btn-group'>
          <button type='button' className='btn btn-light border ' onClick={() => props.changeView('all')}>
            <span>All</span>
          </button>
          <button type='button' className='btn btn-light border ' onClick={() => props.changeView('active')}>
            <span>Active</span>
          </button>
          <button type='button' className='btn btn-light border ' onClick={() => props.changeView('completed')}>
            <span>Completed</span>
          </button>
        </div>
    )
}

export default Filter;