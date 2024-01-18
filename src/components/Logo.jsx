import React, { useState } from 'react';
import './Logo.css'; // Import your CSS file for styling

const Logo = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Reset the animation after a delay
    setTimeout(() => {
      setClicked(false);
    }, 3000); // Adjust the delay as needed
  };

  return (
    <div className={`logo-container ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className="logo">
        <span className="highlight">Y</span>uvraj
      </div>
      <div className="smoke"></div>
    </div>
  );
};

export default Logo;
