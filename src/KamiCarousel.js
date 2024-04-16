import React, { useState } from 'react';
import Card from './Card';
import './Carousel.css';
import AmaterasuImage from './media/Amaterasu.jpg';
import SusanooImage from './media/Susanoo.jpg';
import TsukuyomiImage from './media/Tsukuyomi.jpg';
import RaijinImage from './media/Raijin.jpg';
import FujinImage from './media/Fujin.jpg';
import HachimanImage from './media/Hachiman.jpg';
import TenjinImage from './media/Tenjin.jpg';
import UzumeImage from './media/Uzume.jpg';
import DaikokutenImage from './media/Daikokuten.jpg';
import BenzaitenImage from './media/Benzaiten.jpg';
import JizoImage from './media/Jizo.jpg';
import BinbogamiImage from './media/Binbogami.jpg';
import SengenImage from './media/Sengen.jpg';
import HoteiImage from './media/Hotei.jpg';
import KuebikoImage from './media/Kuebiko.jpg';

const CARDS = [
  { id: 1, title: 'Amaterasu ', frontContent: '', backContent: 'Amaterasu is the sun goddess in Japanese mythology, revered for her role in creating Japan and bringing light to the world. She is considered the ancestress of the Imperial family, symbolizing the connection between the divine and earthly realms.', backgroundImage: AmaterasuImage },
  { id: 2, title: 'Susanoo', frontContent: '', backContent: 'Susanoo is the powerful storm god known for his adventurous and sometimes chaotic nature. Susanoo represents the forces of nature that can be both destructive and transformative.', backgroundImage: SusanooImage },
  { id: 3, title: 'Tsukuyomi', frontContent: '', backContent: 'Tsukuyomi is the serene moon god, embodying the tranquil beauty and mystery of the night sky. As a symbol of time and cycles, Tsukuyomi is revered for his influence over the lunar phases and the passage of months.', backgroundImage: TsukuyomiImage },
  { id: 4, title: 'Raijin', frontContent: '', backContent: 'Raijin, the thunder god, commands storms and thunderbolts, symbolizing both awe-inspiring power and natural forces. He is depicted with drums, believed to control thunder, and is revered for his role in purifying the atmosphere and bringing rain.', backgroundImage: RaijinImage },
  { id: 5, title: 'Fujin', frontContent: '', backContent: 'Fujin is the kami of wind, depicted with bags of wind to demonstrate his influence over air currents and natural phenomena. As a deity associated with change and movement, Fujin represents the dynamic aspects of nature and lifes constant flow.', backgroundImage: FujinImage },
  { id: 6, title: 'Hachiman', frontContent: '', backContent: 'Hachiman is the kami of war and divinity of archery, often honored as a protector of warriors and the nation. With his attributes of valor and strategic prowess, Hachiman embodies the samurai code and is revered in shrines across Japan.', backgroundImage: HachimanImage },
  { id: 7, title: 'Tenjin', frontContent: '', backContent: 'Tenjin is the kami of scholarship, learning, and academic achievement, revered by students and scholars alike. His shrines are places of prayer for success in exams and intellectual pursuits, embodying the pursuit of knowledge and wisdom.', backgroundImage: TenjinImage },
  { id: 8, title: 'Uzume', frontContent: '', backContent: ' Uzume is the lively kami of joy, laughter, and revelry, celebrated for her role in the myth of coaxing Amaterasu out of hiding with her dance and humor. She symbolizes the power of mirth and positivity in dispelling darkness and sadness.', backgroundImage: UzumeImage },
  { id: 9, title: 'Daikokuten', frontContent: '', backContent: 'Daikokuten is also closely associated with agriculture, particularly rice cultivation, as rice has traditionally been a symbol of wealth and prosperity in Japan. Therefore, he is often worshipped by farmers and businesspeopl.', backgroundImage: DaikokutenImage },
  { id: 10, title: 'Benzaiten', frontContent: '', backContent: 'Benzaiten is the goddess of beauty, music, and eloquence, associated with water and serpents in Japanese mythology. She is revered for her artistic inspiration, love, and protection, often depicted playing a biwa (Japanese lute) or accompanied by dragon-like beings.', backgroundImage: BenzaitenImage },
  { id: 11, title: 'Jizo', frontContent: '', backContent: 'Jizo is the compassionate kami who protects children, travelers, and souls in the afterlife, especially those of deceased children. Believed to ease suffering and guide souls to enlightenment, Jizo is a beloved figure in Japanese Buddhism and folklore.', backgroundImage: JizoImage },
  { id: 12, title: 'Binbogami', frontContent: '', backContent: 'Binbogami is believed to bring misfortune, poverty, and financial difficulties to individuals or households. The concept of Binbōgami is derived from the belief in spirits or deities that govern various aspects of human life.', backgroundImage: BinbogamiImage },
  { id: 13, title: 'Sengen', frontContent: '', backContent: 'Sengen is a kami of Mount Fuji, the highest peak in Japan and an iconic symbol of the country. Sengen is often depicted as a female deity, symbolizing the spiritual essence and natural beauty of the mountain.', backgroundImage: SengenImage },
  { id: 14, title: 'Hotei', frontContent: '', backContent: 'The laughing Buddha and kami of contentment and abundance, Hotei is revered for his jovial nature and benevolent spirit, bringing happiness and fulfillment to believers.', backgroundImage: HoteiImage },
  { id: 15, title: 'Kuebiko', frontContent: '', backContent: 'Kuebiko is a unique kami in Japan. Unlike many other kami who embody natural phenomena or abstract concepts, Kuebiko represents knowledge, wisdom, and the understanding gained through observation and experience.', backgroundImage: KuebikoImage}
];

const KamiCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? CARDS.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === CARDS.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={handlePrev}>
      <p>Prev</p>
      </button>
      <div className="cards-wrapper">
        <Card
  title={CARDS[activeIndex].title}
  frontContent={CARDS[activeIndex].frontContent}
  backContent={CARDS[activeIndex].backContent}
  backgroundImage={CARDS[activeIndex].backgroundImage}
/>

      </div>
      <button className="next" onClick={handleNext}>
        <p>Next</p>
      </button>
    </div>
  );
};

export default KamiCarousel;