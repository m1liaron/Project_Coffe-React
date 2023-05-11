import { useState} from 'react';

import React from 'react';
import './Search.scss';

const Search = (props) => {
    const [term, setTerm] = useState('')
  
const onUpdataSearch = (e) => {
    const updateterm = e.target.value;
    setTerm(updateterm);
    props.onUpdataSearch(term);
}

    return (
        <div className="container-search">
            <h1 className='search-title'>Lookiing for</h1>
                <input 
                    type="text" 
                    className='input-search' 
                    placeholder='start typing here...'
                    value={term}
                    onChange={onUpdataSearch} />  
        </div>
      )
}

export default Search;
