import React from 'react';
import './ReviewCard.css';

function ReviewCard({ title, thumbnail, description }) {
  return (
    <div className='allCards'>
      <img src={thumbnail} alt={title} />
      <br />
      <h3 className='mainTitle'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ReviewCard;