import React from 'react';
import './PlaysCard.css';

function PlaysCard(props) {
  return (
    <div className='card'>
      <div className='card__cover'>
        <p className='card__title'>{props.title}</p>
      </div>
      <div className='card__bottom'>
        <p className='card__autor'>{props.lastName + ' ' + props.firstName}</p>
        <ul className='card__info'>
          <li>{props.city}</li>
          <li>{props.year}</li>
        </ul>
      </div>
    </div>
  );
}

export default PlaysCard;
