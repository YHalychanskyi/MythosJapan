import React, { useState } from 'react';
import Card from './Card';
import './Carousel.css';
import NamahageImage from './media/Namahage.jpg';
import JorogumoImage from './media/Jorogumo.jpg'
import TenguImage from './media/Tengu.jpg';
import ShinigameImage from './media/Shinigami.jpg'
import ShutenDojiImage from './media/shuten-doji.jpg';
import AmanojakuImage from './media/Amanojaku.jpg';
import HannyaImage from './media/Hannya.jpg';
import RokurokubiImage from './media/Rokurokubi.jpg';
import TessoImage from './media/Tesso.jpg';
import KudaGitsuneImage from './media/KudaGitsune.jpg';
import BakezoriImage from './media/Bakezori.jpg';
import GagozeImage from './media/Gagoze.jpg';
import NuppeppoImage from './media/Nuppeppo.jpg';
import OnryoImage from './media/Onryo.jpg';
import TsuchigumoImage from './media/Tsuchigumo.jpg';

const CARDS = [
  { id: 1, title: 'Shinigami', frontContent: '', backContent: 'Shinigami, literally translated as "death god" or "death spirit", shinigami are supernatural beings or spirits that are responsible for guiding souls to the afterlife or the realm of the dead.', backgroundImage: ShinigameImage },
  { id: 2, title: 'Shuten-doji', frontContent: '', backContent: 'Shuten-doji and his band of oni and other supernatural creatures were notorious for their reign of terror in Kyoto. They would kidnap and devour humans, causing fear and chaos throughout the region.', backgroundImage: ShutenDojiImage },
  { id: 3, title: 'Amanojaku', frontContent: '', backContent: 'Amanojaku is a type of oni or demonic creature known for its contrary nature. It is said to enjoy provoking humans and causing them to act against their own intentions or beliefs.', backgroundImage: AmanojakuImage },
  { id: 4, title: 'Hannya', frontContent: '', backContent: 'It is often a woman who has been wronged in love or life, leading to her transformation into a vengeful and demonic entity. The Hannya is consumed by negative emotions, which distort her appearance.', backgroundImage: HannyaImage },
  { id: 5, title: 'Namahage', frontContent: '', backContent: 'Namahage is a traditional ritual and folklore character from the Oga Peninsula in Akita Prefecture, Japan. During the Namahage Sedo Matsuri festival, men dressed as oni visit homes to ward off evil spirits and bring good fortune for the coming year.', backgroundImage: NamahageImage },
  { id: 6, title: 'Jorogumo', frontContent: '', backContent: 'Jorogumo, also known as the "binding bride" or "entangling bride," is a yokai in Japanese folklore.  can transform into a beautiful woman to lure unsuspecting victims.', backgroundImage: JorogumoImage },
  { id: 7, title: 'Tengu', frontContent: '', backContent: 'Tengu are legendary creatures from Japanese folklore, and they are not considered oni or yoaki. Instead, they are a distinct type of supernatural being. Tengu are often depicted as bird-like creatures.', backgroundImage: TenguImage },
  { id: 8, title: 'Rokurokubi ', frontContent: '', backContent: 'These supernatural beings appear as ordinary humans during the day but undergo a bizarre transformation at night. Their defining trait is their ability to stretch their necks to extraordinary lengths.', backgroundImage: RokurokubiImage },
  { id: 9, title: 'Tesso', frontContent: '', backContent: 'Legend has it that Tesso were once vengeful monks who were transformed into rat-like oni after their deaths. They are said to possess powerful magic and wreak havoc on their enemies.', backgroundImage: TessoImage },
  { id: 10, title: 'Kuda-Gitsune', frontContent: '', backContent: 'Kuda-gitsune are small oni spirits that inhabit foxes. Kuda-gitsune are believed to have mystical powers, granting their masters abilities such as divination or protection from evil spirits.', backgroundImage: KudaGitsuneImage },
  { id: 11, title: 'Bakezori', frontContent: '', backContent: 'Bakezori are known to play pranks on unsuspecting humans, causing household items to go missing or creating disturbances in the night.', backgroundImage: BakezoriImage },
  { id: 12, title: 'Gagoze', frontContent: '', backContent: 'Gagoze are ancient oni that have been mummified, their bodies preserved through dark magic. They are powerful and formidable adversaries, feared for their strength and resilience.', backgroundImage: GagozeImage },
  { id: 13, title: 'Nuppeppo', frontContent: '', backContent: ' Nuppeppo are often considered omens of impending disaster or death, appearing as harbingers of misfortune in Japanese folklore. Nuppeppo may bring good luck or fortune.', backgroundImage: NuppeppoImage },
  { id: 14, title: 'Onryo', frontContent: '', backContent: 'Onryo are wrathful spirits of the dead, often women who seek revenge for past injustices. They are relentless in their pursuit of vengeance, haunting and tormenting those who wronged them.', backgroundImage: OnryoImage },
  { id: 15, title: 'Tsuchigumo', frontContent: '', backContent: 'Tsuchigumo are feared for their ability to ensnare unsuspecting victims with their webs and ambush them from underground lairs.', backgroundImage: TsuchigumoImage },
];

const Carousel = () => {
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

export default Carousel;