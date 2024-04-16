import React, { useState } from 'react';
import backgroundImg from './media/yokai.jpg'; 
import './containers.css'; 
import { ShiftToLeft, ShiftToRight } from './ShiftToLeft'; 
import YokaiContent from './YokaiContent'; 

const Yokai = ({ onClose }) => {
  const scrollToNext = () => {
    const nextComponent = document.getElementById('kami-component');
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showContent, setShowContent] = useState(false);
  const [isAboutYokaiOpen, setIsAboutYokaiOpen] = useState(false);

  const handleShiftToLeft = () => {
    ShiftToLeft('yokai-component', true); 
    setTimeout(() => setShowContent(true), 500); 
  };

  const handleShiftToRight = () => {
    ShiftToRight('yokai-component', true); 
    setShowContent(false); 
  };

  const handleYokaiHeadingClick = () => {
    setIsAboutYokaiOpen(!isAboutYokaiOpen);
  };

  return (
    <div className="yokai-wrapper">
      <div className={`yokai-container ${showContent ? 'shifted' : ''}`} id="yokai-component" style={{ backgroundImage: `url(${backgroundImg})` }}> 
        <div className="YokaiHeadingContainer" onClick={handleYokaiHeadingClick}>
          <h1 className='YokaiHeading'>Yokai 妖怪</h1>
          <br />
          <p className='LearnMore'>Learn More</p>
        </div>
        <div className={`AboutYokai ${isAboutYokaiOpen ? 'open' : ''}`}>
        <strong>Yokai</strong> are a diverse group of supernatural creatures and spirits in Japanese folklore. The term "yokai" is often translated as "ghost," "monster," or "spirit," but it encompasses a wide range of entities with various characteristics and origins. <br /> <br />
        Here are some key points about Yokai: <br /> <br />
        <strong>Appearance:</strong> Yokai can have a wide range of appearances, from humanoid figures to animals, monsters, and even inanimate objects.
        Their appearance often reflects their characteristics or the particular folklore they originate from.
        Yokai can be depicted as scary, comical, or even grotesque, depending on the story or cultural context. <br /> <br />
        <strong>Characteristics:</strong>Yokai possess supernatural abilities such as shapeshifting, invisibility, flight, and control over elements like fire or water.
        They are often associated with specific behaviors such as haunting, trickery, wisdom, protection, or causing natural phenomena.
        Yokai can be benevolent, malevolent, or have neutral intentions toward humans, and their actions may vary widely in folklore. <br /> <br />
        <strong>Symbolism:</strong> Yokai represent various aspects of Japanese culture, beliefs, and societal norms.
        They can symbolize natural forces, spiritual concepts, human emotions, or moral lessons.
        Yokai stories sometimes convey warnings or moral messages about virtues, vices, and the consequences of actions. <br /> <br />
        <strong>Variations:</strong> Yokai exist in a vast and diverse spectrum with countless variations and regional differences.
        Different regions in Japan have their own unique yokai legends and interpretations, contributing to the richness of yokai folklore. <br /> <br />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20" fill="#000000" onClick={scrollToNext} style={{ cursor: 'pointer' }}>
          <path d="M16.2929 7.70711C16.6834 7.31658 17.3166 7.31658 17.7071 7.70711C18.0976 8.09763 18.0976 8.7308 17.7071 9.12132L10 16.8284L2.29289 9.12132C1.90237 8.7308 1.90237 8.09763 2.29289 7.70711C2.68342 7.31658 3.31658 7.31658 3.70711 7.70711L10 14L16.2929 7.70711Z" />
        </svg>
        <button onClick={handleShiftToLeft}><h1>Bestiary</h1></button>
      </div>
      {showContent && <YokaiContent onClose={handleShiftToRight} />} 
    </div>
  );
};

export default Yokai;
