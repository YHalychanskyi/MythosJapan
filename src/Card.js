import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, frontContent, backContent, isActive, backgroundImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isActive ? 'active' : ''} ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardFlip}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="card-content">
        <div className={`card-content-front ${isFlipped ? 'hidden' : ''}`}>
          <h1 className='oniName'>{title}</h1>
          <p>{frontContent}</p>
        </div>
        <div className={`card-content-back ${isFlipped ? '' : 'hidden'}`}>
          <h1 className='oniName'>{title}</h1>
          <p className='about'>{backContent}</p>
        </div>
      </div>
    </div>
  );
};



export default Card;