import React from 'react'

const SearchBox = ({ onChangeEvent }) => {
    return (
        <div className='pa2'>
            <input className="pa3 ba b--blue shadow-3-m bg-light-blue"
                type="search"
                placeholder='search robots'
                onChange={onChangeEvent} />
        </div>
    )
}

export default SearchBox;
