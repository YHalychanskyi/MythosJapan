import React, { useState } from 'react';
import backgroundImg from './media/kami.jpg'; 
import './containers.css'; 
import { ShiftToLeft, ShiftToRight } from './ShiftToLeft'; 
import KamiContent from './KamiContent'; 

const Kami = ({ onClose }) => {

  const [showContent, setShowContent] = useState(false);
  const [isAboutKamiOpen, setIsAboutKamiOpen] = useState(false); 

  const handleShiftToLeft = () => {
    ShiftToLeft('kami-component', true); 
    setTimeout(() => setShowContent(true), 500); 
  };

  const handleShiftToRight = () => {
    ShiftToRight('kami-component', true); 
    setShowContent(false); 
  };

  const handleKamiHeadingClick = () => {
    setIsAboutKamiOpen(!isAboutKamiOpen);
  };

  return (
    <div className="kami-wrapper">
      <div className={`kami-container ${showContent ? 'shifted' : ''}`} id="kami-component" style={{ backgroundImage: `url(${backgroundImg})` }}> 
        <div className="KamiHeadingContainer" onClick={handleKamiHeadingClick}>
          <h1 className='KamiHeading'>Kami 神</h1>
          <br />
          <p className='LearnMore'>Learn More</p>
        </div>
        <div className={`AboutKami ${isAboutKamiOpen ? 'open' : ''}`}>
        Japanese mythology is rich with gods and goddesses known as <strong>kami.</strong> These deities play significant roles in shaping various aspects of the natural world, human affairs, and cultural beliefs. <br /> <br />
        Here are some key points about Kami: <br /> <br />
        <strong>Appearance:</strong> Kami are often depicted in diverse forms, ranging from human-like figures to anthropomorphic beings, animals, and even natural phenomena.
        Their appearances can be majestic, serene, fearsome, or beautiful, depending on their roles and attributes.
        Some kami are associated with specific symbols or motifs, such as weapons, sacred objects, animals, or elements like water, fire, or wind. <br /> <br />
        <strong>Characteristics:</strong> Kami possess supernatural powers and abilities, including control over natural forces, healing, wisdom, and protection.
        They may exhibit human-like emotions and behaviors such as jealousy, compassion, anger, or joy, adding depth to their stories and interactions with humans.
        Kami are revered for their role as guardians, guides, and sources of inspiration in Japanese mythology and religious practices. <br /> <br />
        <strong>Symbolism:</strong> Kami symbolize various aspects of Japanese culture, spirituality, and beliefs.
        They represent natural phenomena, ancestral spirits, virtues, principles, and cosmic forces.
        Kami are often associated with specific domains such as agriculture, craftsmanship, war, love, fertility, and fortune, reflecting their influence on different aspects of life. <br /> <br />
        <strong>Variations:</strong> There are numerous kami in Japanese mythology, including major deities like Amaterasu (the sun goddess), Susanoo (the storm god), Izanagi and Izanami (the creators of Japan), Inari (the deity of rice and fertility), and many others.
        Different regions and historical periods in Japan have their own pantheons of kami, with local variations, legends, and rituals associated with specific deities.
        Some kami are syncretized with Buddhist or Shinto beliefs, leading to hybrid deities and shared worship practices. <br /> <br />
        </div>
        <button onClick={handleShiftToLeft}><h1>Bestiary</h1></button>
      </div>
      {showContent && <KamiContent onClose={handleShiftToRight} />} 
    </div>
  );
};

export default Kami;
