import React, { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import 'flag-icons/css/flag-icons.min.css';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ selectedLanguage, onSelectLanguage }) => {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const flagIcon = (language) => {
    if (language === 'English') {
      return <span className="fi fi-gb"></span>;
    } else if (language === 'فارسی') {
      return <span className="fi fi-ir"></span>;
    }
    return null;
  };

  return (
    <div className="language-switcher">
      <button className={`language-button ${showLanguages ? 'flash' : ''}`} onClick={toggleLanguages}>
        {/* <FiGlobe style={{ marginRight: '5px' }} /> */}
        {flagIcon(selectedLanguage)}
        {selectedLanguage}
        <span style={{ marginLeft: '5px', transform: showLanguages ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
          ^
        </span>
      </button>
      {showLanguages && (
        <ul className="language-list">
          <li className="language-item" onClick={() => onSelectLanguage('English')}>
            {flagIcon('English')}
            English
          </li>
          <li className="language-item" onClick={() => onSelectLanguage('فارسی')}>
            {flagIcon('فارسی')}
            فارسی
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
