import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './navbar.css';
import { FaGithub } from "react-icons/fa";

const handleClick = () => {
  window.location.href = 'https://github.com/Malidadashi';
};

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (

    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <LanguageSwitcher
          selectedLanguage={selectedLanguage}
          onSelectLanguage={handleLanguageSelect}
        />
        <button className="navbar-button" onClick={handleClick}>Login <FaGithub className='navbar-button-icon' /></button>
      </div>
    </nav>
  );
};

export default Navbar;
