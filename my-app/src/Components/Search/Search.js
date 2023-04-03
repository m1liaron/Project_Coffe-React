import { Component} from 'react';

import React from 'react';
import './Search.scss';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term : ''
        }
    }
  
onUpdataSearch = (e) => {
    const term = e.target.value;
    this.setState({ term }); 
    this.props.onUpdataSearch(term); 
}

render(){
    return (
        <div className="container-search">
            <h1 className='search-title'>Lookiing for</h1>
                            <input type="text" 
                    className='input-search' 
                    placeholder='start typing here...'
                    value={this.state.term}
                    onChange={this.onUpdataSearch} />  
        </div>
      )
}
}

export default Search;
