import React, { useState } from 'react';
import CardListItem from '../CardListItem/CardListItem';
import './CardList.css'

import Spinner from '../Spinner/Spinner';

const CardList = ({ data }) => {

  return (
    <div className="card-list">
      {data.map(item => (<CardListItem  key={item.id} {...item} />))}
    </div>
  );
};

export default CardList;
