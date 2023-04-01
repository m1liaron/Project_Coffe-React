import React from 'react';
import CardListItem from '../CardListItem/CardListItem';
import './CardList.css'

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map(item => (
        <CardListItem  key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardList;
