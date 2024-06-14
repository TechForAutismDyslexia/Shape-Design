// Triangle.js
//             ------------
//             \          |
//               \        |
//                 \      |
//                   \    |
//                     \  |
//                       \|


// Triangle.js
import React, { useState } from 'react';

function Triangle1({ bottom, right, top, color, angle, onRotationChange, text }) {
  const [rotation, setRotation] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  
  const handleVoice = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleClick = () => {
    let newRotation = rotation + angle;
    setRotation(newRotation);
    onRotationChange(newRotation);
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
    borderBottom: `${bottom}px solid transparent`,
    borderRight: `${right}px solid ${color}`,
    borderTop: `${top}px solid transparent`,
    width: '0',
    height: '0',
    cursor: 'pointer',
    transform: `rotate(${rotation}deg)`, // Apply rotation
    transition: 'transform 0.3s ease-in-out', // Add transition for smooth rotation
    
  };

  return (
    <div 
      style={style} 
      className='m-2' 
      onClick={handleClick} 
      onTouchStart={handleTouch}
    >
      <div style={{ display: 'none' }}>{text}</div> {/* Hidden text for voice synthesis */}
    </div>
  );
}

export default Triangle1;
