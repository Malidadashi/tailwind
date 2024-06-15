import React, { useState, useEffect } from 'react';
import './MovingButtons.css'; // Import your CSS for styling

const MovingButtons = ({ buttonCount }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    // Create initial buttons
    const initialButtons = Array.from({ length: buttonCount }, (_, index) => ({
      id: index + 1,
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth
    }));

    setButtons(initialButtons);

    // Function to move buttons randomly
    const moveButtons = () => {
      const updatedButtons = buttons.map(button => ({
        ...button,
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth
      }));
      setButtons(updatedButtons);
    };

    // Interval to update button positions every 2 seconds
    const interval = setInterval(moveButtons, 2000);

    return () => clearInterval(interval);
  }, [buttonCount]);

  return (
    <div className="moving-buttons">
      {buttons.map(button => (
        <button
          key={button.id}
          className="random-button"
          style={{ top: `${button.top}px`, left: `${button.left}px` }}
        >
          Button {button.id}
        </button>
      ))}
    </div>
  );
};

export default MovingButtons;
