import React, { useState } from 'react';

function Rectangle({ width, height, color, angle, onRotationChange,name, text }) {  
  const [rotation, setRotation] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  const [isRotation, setIsRotation] = useState(0);
  
  const handleVoice = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleClick = () => {
    const newRotation = rotation + angle;
    setRotation(newRotation);
    setIsRotation(!isRotation);
    onRotationChange(isRotation);
    handleVoice();
  };

  const handleTouch = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300; // Adjust this value as needed for your double tap delay

    if (tapCount === 1 && now - lastTapTime < DOUBLE_TAP_DELAY) {
      // Double tap detected
      handleClick(); // Rotate on double tap
      setTapCount(0); // Reset tap count
    } else {
      // Single tap
      setTapCount(1); // Increment tap count
      setLastTapTime(now); // Record tap time
    }
  };

  const style = {
    backgroundColor: color,
    height: `${height}px`,
    width: `${width}px`,
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.3s ease-in-out',
    display: 'flex', // Use flexbox
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    fontWeight: 'bold', // Make text bold
    fontSize: '18px' ,// Increase the font size
    cursor: 'pointer'
  };

  return (
    <div
      style={style}
      className="m-2"
      onClick={handleClick}
      onTouchStart={handleTouch} 
    >
      {name}
    </div>
  );
}

export default Rectangle;
