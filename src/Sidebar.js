import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SideBarImage from './media/torii.ico';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeSidebar = (event) => {
      if (isOpen && !event.target.closest('.sidebar')) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeSidebar);

    return () => {
      document.body.removeEventListener('click', closeSidebar);
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToComponent = (id) => {
    const component = document.getElementById(id);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <img className='SideBarImage' src={SideBarImage} alt='torii' />
      </button>
      <div className="sidebar-content">
        <ul>
          <li onClick={() => scrollToComponent('main-component')}>Home</li>
          <li onClick={() => scrollToComponent('oni-component')}>Oni 鬼</li>
          <li onClick={() => scrollToComponent('yokai-component')}>Yokai 妖怪</li>
          <li onClick={() => scrollToComponent('kami-component')}>Kami 神</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;