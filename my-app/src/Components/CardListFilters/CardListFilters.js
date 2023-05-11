import { useState } from 'react';
import './CardListFilters.scss';
import Search from '../Search/Search';

const CardListFilters = (props) => {
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('');

  const [buttonsData, setButtonsData] = useState([
    { name: 'Brazil', label: 'Brazil' },
    { name: 'Kenya', label: 'Kenya' },
    { name: 'Columbia', label: 'Columbia' }
  ]);

  const onUpdataSearch = (term) => {
    setTerm(term);
  };

  const handleFilterSelect = (name) => {
    setFilter(name);
    props.onFilterSelect(name);
  };

  function renderButtons() {
    return buttonsData.map(({ name, label }) => {
      const active = filter === name;
      const clazz = active ? 'active' : '';

      return (
        <button
          type="button"
          name={name}
          className={`btn-filter ${clazz}`}
          key={name}
          onClick={() => handleFilterSelect(active ? '' : name)}
        >
          {label}
        </button>
      );
    });
  }

  return (
    <div className="container-interaction">
      <div className="container-btn-filter">
        <label className="filter-label" htmlFor="filter-button">
          Or filter
        </label>
        {renderButtons()}
      </div>
    </div>
  );
};

export default CardListFilters;
