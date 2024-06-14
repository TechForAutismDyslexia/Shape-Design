import React, { useState } from 'react';

function Triangle({ left, right, bottom, color, angle,name, text }) {
  const [rotation, setRotation] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  
  const handleVoice = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleClick = () => {
    const newRotation = rotation + angle;
    setRotation(newRotation);
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
    position: 'relative',
    borderLeft: `${left}px solid transparent`,
    borderRight: `${right}px solid transparent`,
    borderBottom: `${bottom}px solid ${color}`,
    width: '0',
    height: '0',
    cursor: 'pointer',
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.3s ease-in-out',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    fontSize: '18px',
    paddingTop: '120px',
    textAlign: 'center',
    color: 'black' // Change this if needed for better contrast
  };

  return (
    <div
      style={style}
      className='m-2'
      onClick={handleClick}
      onTouchStart={handleTouch}
    >
      <div style={textStyle}>{name}</div>
    </div>
  );
}

export default Triangle;
