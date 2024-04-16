import React, { useState } from 'react';
import backgroundImg from './media/oni.jpg';
import './containers.css';
import { ShiftToLeft, ShiftToRight } from './ShiftToLeft';
import OniContent from './OniContent';

const Oni = ({ onClose }) => {
  const scrollToNext = () => {
    const nextComponent = document.getElementById('yokai-component');
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showContent, setShowContent] = useState(false);
  const [isAboutOniOpen, setIsAboutOniOpen] = useState(false); 

  const handleShiftToLeft = () => {
    ShiftToLeft('oni-component', true);
    setTimeout(() => setShowContent(true), 500);
  };

  const handleShiftToRight = () => {
    ShiftToRight('oni-component', true);
    setShowContent(false);
  };

  const handleOniHeadingClick = () => {
    setIsAboutOniOpen(!isAboutOniOpen);
  };

  return (
    <div className="oni-wrapper">
      <div className={`oni-container ${showContent ? 'shifted' : ''}`} id="oni-component" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="OniHeadingContainer" onClick={handleOniHeadingClick}>
          <h1 className='OniHeading'>Oni 鬼</h1>
          <br />
          <p className='LearnMore'>Learn More</p>
        </div>
        <div className={`AboutOni ${isAboutOniOpen ? 'open' : ''}`}>
          <p><strong>Japanese oni</strong> are mythical creatures that feature prominently in Japanese folklore, art, and literature. 
          They are often depicted as large, ogre-like creatures with sharp claws, wild hair, and horns on their heads. 
          Oni are known for their strength, ferocity, and sometimes mischievous or malevolent nature. <br /> <br />
          Here are some key points about Oni: <br /> <br />
          <strong>Appearance:</strong> Oni are typically depicted as large, muscular beings with red, blue, or black skin. They have horns on their heads, sharp teeth, and wild hair. 
          They are often shown carrying iron clubs called kanabo, which they use as weapons. <br /> <br />
          <strong>Characteristics:</strong> Oni are usually portrayed as evil or malevolent beings that delight in causing harm to humans. 
          They are sometimes seen as embodiments of natural disasters, disease, or other calamities. However, in some stories, they can also be tricked or outwitted by clever humans. <br /> <br />
          <strong>Symbolism:</strong> Oni can symbolize various concepts such as the dangers of the natural world, the consequences of immoral behavior, or the struggle between good and evil. 
          They are also sometimes used in art and festivals as a form of protection against evil spirits. <br /> <br />
          <strong>Variations:</strong> There are different types of oni with varying attributes and roles. For example, there are female oni called "kijo" or "kijo onna" 
          who are known for their beauty and seductive abilities, using them to lure and harm humans. <br /> <br /></p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20" fill="#000000" onClick={scrollToNext} style={{ cursor: 'pointer' }}>
          <path d="M16.2929 7.70711C16.6834 7.31658 17.3166 7.31658 17.7071 7.70711C18.0976 8.09763 18.0976 8.7308 17.7071 9.12132L10 16.8284L2.29289 9.12132C1.90237 8.7308 1.90237 8.09763 2.29289 7.70711C2.68342 7.31658 3.31658 7.31658 3.70711 7.70711L10 14L16.2929 7.70711Z" />
        </svg>
        <button onClick={handleShiftToLeft}><h1>Bestiary</h1></button>
      </div>
      {showContent && <OniContent onClose={handleShiftToRight} />}
    </div>
  );
};

export default Oni;
