import React, { useContext, useState } from 'react';
import './HamburgerMenu.css'; // Import the CSS file for styling
import { AppContext } from '../AppComponents/AppComponents';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(AppContext);
  const theme = context.theme;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-react ${isOpen ? 'active' : ''} ${theme === "dark" ? "dark-mode" : ""}`} aria-expanded={isOpen} role="button" tabIndex={0} onClick={toggleMenu}>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;