import React from 'react';
import './CardListFilters.scss';

const CardListFilters = (props) => {
  const ButtonsData = [
    { name: 'Brazil', label: 'Brazil' },
    { name: 'Kenya', label: 'Kenya' },
    { name: 'Columbia', label: 'Columbia' }
  ]

  const Buttons = ButtonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'active' : '';
    return (
      <button
        type="button"
        name={name}
        className={`btn-filter ${clazz}`}
        key={name}
        onClick={() =>
          props.onFilterSelect(active ? '' : name)
        }
      >
        {label}
      </button>
    );
  });

  return (
    <div className="container-interaction">
      <div className="container-search">
        <h1 className='search-title'>Lookiing for</h1>
        <input className='input-search' type="text"
          placeholder='start typing here...' />
      </div>
      <div className="container-btn-filter">
      <label className='filter-label' htmlFor='filter-button'>Or filter</label>
        {Buttons}
      </div>
    </div>
  )
}

export default CardListFilters;
