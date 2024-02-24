import React from 'react';
import './HomeCard.css';

function HomeCard({ thumbnail, title, description }) {
  return (
    <div className='homeCard'>
      <img src={thumbnail} alt={title} /> <br/>
      <h3 className='mainTitle'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default HomeCard;





    
