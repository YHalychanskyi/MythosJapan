import React, { useState } from 'react';
import Card from './Card'; 
import './Carousel.css'; 
import KappaImage from './media/Kappa.jpg';
import TanukiImage from './media/Tanuki.jpg';
import KitsuneImage from './media/Kitsune.jpg';
import KarakasaImage from './media/Karakasa.jpg';
import YureiImage from './media/Yurei.jpg';
import HitodamaImage from './media/Hitodama.jpg';
import JikininkiImage from './media/Jikininki.jpg';
import NekomataImage from './media/Nekomata.jpg';
import UbumeImage from './media/Ubume.jpg';
import NurarihyonImage from './media/Nurarihyon.jpg';
import KamaitachiImage from './media/Kamaitachi.jpg';
import YamabikoImage from './media/Yamabiko.jpg';
import KamikiriImage from './media/Kamikiri.jpg';
import NurikabeImage from './media/Nurikabe.jpg';
import KashaImage from './media/Kasha.jpg';

const CARDS = [
  { id: 1, title: 'Kappa', frontContent: '', backContent: 'Kappa are mischievous water creatures that inhabit rivers and ponds in Japanese folklore. They are often depicted with a bowl-shaped depression on their heads that holds water, which gives them strength.', backgroundImage: KappaImage },
  { id: 2, title: 'Tanuki', frontContent: '', backContent: 'Tanuki are shape-shifting creatures resembling raccoon dogs known for their playful and mischievous nature. They are often depicted with large bellies and straw hats, and they can transform into various objects or creatures to fool humans.', backgroundImage: TanukiImage },
  { id: 3, title: 'Kitsune', frontContent: '', backContent: 'Kitsune are fox spirits capable of shape-shifting into human form, often with multiple tails as a sign of age and power. They are known for their intelligence, magical abilities, and trickery.', backgroundImage: KitsuneImage },
  { id: 4, title: 'Karakasa', frontContent: '', backContent: 'Karakasa, or "umbrella monster" is a Yokai that takes the form of a one-eyed, tongue-wagging umbrella with a single foot or leg. They are considered harmless and sometimes even helpful, as they may warn people of approaching danger or offer protection from rain.', backgroundImage: KarakasaImage },
  { id: 5, title: 'Yurei', frontContent: '', backContent: 'Yurei are vengeful ghosts of the dead, often depicted as pale, with long black hair covering their faces and wearing white burial garments. They are bound to the physical world by strong emotions such as anger, sorrow, or regret.', backgroundImage: YureiImage },
  { id: 6, title: 'Hitodama', frontContent: '', backContent: 'Hitodama are floating, ghostly orbs that represent the souls of the dead. They are often seen near graveyards or in places with strong spiritual energy. Hitodama can vary in size and brightness, with some believed to guide lost souls to the afterlife.', backgroundImage: HitodamaImage },
  { id: 7, title: 'Jikininki', frontContent: '', backContent: 'Jikininki are corpse-eating Yokai that were once greedy or selfish humans condemned to this existence after death. They are cursed to consume human flesh as penance for their past sins, haunting graveyards.', backgroundImage: JikininkiImage },
  { id: 8, title: 'Nekomata', frontContent: '', backContent: 'Nekomata are supernatural cats with forked tails. They are known for their ability to shape-shift and manipulate the dead. In some tales, they are benevolent guardians, while in others, they are vengeful spirits.', backgroundImage: NekomataImage },
  { id: 9, title: 'Ubume', frontContent: '', backContent: 'Ubume, or "birthing woman," is a ghostly yokai associated with childbirth. She appears as a woman in distress, carrying a bundle that she offers to passersby. When they accept, the bundle vanishes, revealing that it was the spirit of her deceased child.', backgroundImage: UbumeImage },
  { id: 10, title: 'Nurarihyon', frontContent: '', backContent: 'Nurarihyon is a yokai that resembles an elderly man with a gourd-shaped head. It is known for sneaking into human homes while the residents sleep, making itself at home and sometimes even having tea before disappearing at dawn.', backgroundImage: NurarihyonImage },
  { id: 11, title: 'Kamaitachi', frontContent: '', backContent: 'Kamaitachi are weasel-like yokai with sickle-like claws. They are said to ride on gusts of wind, cutting the skin of unsuspecting travelers as they pass by, leaving behind unexplained wounds.', backgroundImage: KamaitachiImage },
  { id: 12, title: 'Yamabiko', frontContent: '', backContent: 'Yamabiko is a yokai that causes echoes in the mountains. It is said to mimic human voices, repeating sounds heard in the mountains and forests. In some stories, it is believed to be a harmless spirit, while in others, it is seen as a harbinger of misfortune.', backgroundImage: YamabikoImage },
  { id: 13, title: 'Kamikiri', frontContent: '', backContent: 'Kamikiri, or "hair cutter," is a yokai that sneaks into homes at night to cut people s hair. It is said to be a mischievous spirit rather than a malevolent one, though its actions can still cause alarm and confusion.', backgroundImage: KamikiriImage },
  { id: 14, title: 'Nurikabe', frontContent: '', backContent: 'Nurikabe is a yokai that manifests as an invisible wall, blocking travelers paths at night. It is said to appear suddenly, causing confusion and frustration as travelers struggle to find a way around it.', backgroundImage: NurikabeImage },
  { id: 15, title: 'Kasha', frontContent: '', backContent: 'Kasha is a cat-like yokai that steals the corpses of the recently deceased. It is said to prowl the streets at night, snatching bodies from funeral processions or gravesites to feast upon the flesh.', backgroundImage: KashaImage },
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