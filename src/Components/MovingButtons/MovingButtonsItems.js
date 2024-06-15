import React from 'react';
import './MovingButtonsItems.css';

const MovingButtonsItems = ({ icon, text }) => {
  return (
    <div className="box">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default MovingButtonsItems;
