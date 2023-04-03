import React, { Component } from 'react';
import './CardListFilters.scss';
import Search from '../Search/Search';

class CardListFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonsData : [
        { name: 'Brazil', label: 'Brazil' },
        { name: 'Kenya', label: 'Kenya' },
        { name: 'Columbia', label: 'Columbia' }
      ],
      term: '',
      filter: ''
    }


    this.handleFilterSelect = this.handleFilterSelect.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  onUpdataSearch = (term) => {
    this.setState({term})
  }

  handleFilterSelect(name) {
    this.setState({ filter: name });
    this.props.onFilterSelect(name);
  }

  renderButtons() {
    return this.state.ButtonsData.map(({ name, label }) => {
      const active = this.state.filter === name;
      const clazz = active ? 'active' : '';
  
      return (
        <button
          type="button"
          name={name}
          className={`btn-filter ${clazz}`}
          key={name}
          onClick={() => this.handleFilterSelect(active ? '' : name)}
        >
          {label}
        </button>
      );
    });
  }
  

  render() {
    return (
        <div className="container-interaction">
                  <div className="container-btn-filter">
          <label className='filter-label' htmlFor='filter-button'>Or filter</label>
          {this.renderButtons()}
        </div>
        </div>


    );
  }
}

export default CardListFilters;
