import React from 'react';
import './AuthorsCard.css';

function AuthorsCard(props) {
  return (
    <div className='author-card'>
      <p className='author-card__title'>{props.lastName[0]}</p>
      <p className='author-card__autor'>
        {props.lastName + ' ' + props.firstName}
      </p>
    </div>
  );
}

export default AuthorsCard;
