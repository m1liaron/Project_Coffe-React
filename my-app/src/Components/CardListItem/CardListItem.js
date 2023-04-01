import React from 'react';
import { Link } from 'react-router-dom';
import './CardListItem.css'

function CardListItem({ id, src, name, country, price }){
  console.log(name);
  return (
    <Link to={`/coffee/${id}`} style={{ textDecoration: 'none' }}> 
        <div className="card-recomended">
                  <img className='img-card-recomended' src={src} alt={src} />
                  <div className="card-list-item__body">
                  <h5 className="coffee-card__title">{name}</h5>
                  <p className="coffee-card__country">{country}</p>
                  <p className="coffee-card__price">{price}$</p>
                </div>
          </div>
    </Link>
  );
};

export default CardListItem;