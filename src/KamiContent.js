import React from "react";
import backgroundImg from './media/KamiContent.jpg';
import './containers.css';
import { ShiftToLeft } from './ShiftToLeft';
import KamiCarousel from "./KamiCarousel";

const KamiContent = ({ onClose }) => {
  const scrollToNext = () => {
    const nextComponent = document.getElementById('main-component');
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShiftToRight = () => {
    ShiftToLeft('kami-component', false); 
    onClose(); 
  };

  return (
    <div className="kami-content-wrapper">
      <div className="kami-content" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="types">
          <h1>Types of Kami</h1>
        </div>
        <div>
          <KamiCarousel />
        </div>
        <svg className="down" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 -4.5 20 20" fill="#000000" onClick={scrollToNext} style={{ cursor: 'pointer' }}>
            <path d="M3.70711 12.2929C3.31658 12.6834 2.68342 12.6834 2.29289 12.2929C1.90237 11.9024 1.90237 11.2692 2.29289 10.8787L10 3.17157L17.7071 10.8787C18.0976 11.2692 18.0976 11.9024 17.7071 12.2929C17.3166 12.6834 16.6834 12.6834 16.2929 12.2929L10 5.58579L3.70711 12.2929Z"/>
        </svg>
        <button className="GoBack" onClick={handleShiftToRight}><h1>Go Back</h1></button>
      </div>
    </div>
  );
};

export default KamiContent;
