import React from "react";
import backgroundImg from './media/OniContent.jpg';
import './containers.css';
import { ShiftToLeft } from './ShiftToLeft';
import OniCarousel from './OniCarousel';

const OniContent = ({ onClose }) => {
  const scrollToNext = () => {
    const nextComponent = document.getElementById('yokai-component');
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShiftToRight = () => {
    ShiftToLeft('oni-component', false); 
    onClose(); 
  };

  return (
    <div className="oni-content-wrapper">
      <div className="oni-content" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="types">
          <h1>Types of Oni</h1>
        </div>
        <div>
          <OniCarousel />
        </div>
        <svg className="down" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20" fill="#000000" onClick={scrollToNext} style={{ cursor: 'pointer' }}>
          <path d="M16.2929 7.70711C16.6834 7.31658 17.3166 7.31658 17.7071 7.70711C18.0976 8.09763 18.0976 8.7308 17.7071 9.12132L10 16.8284L2.29289 9.12132C1.90237 8.7308 1.90237 8.09763 2.29289 7.70711C2.68342 7.31658 3.31658 7.31658 3.70711 7.70711L10 14L16.2929 7.70711Z" />
        </svg>
        <button className="GoBack" onClick={handleShiftToRight}><h1>Go Back</h1></button>
      </div>
    </div>
  );

};


export default OniContent;
