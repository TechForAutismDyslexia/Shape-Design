import React from 'react';

function Circle({ diameter, color, text, name }) {

  const handleVoice = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const style = {
    backgroundColor: color,
    borderRadius: '50%',
    height: `${diameter}px`,
    width: `${diameter}px`,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px' // Adjust the font size as needed
  };

  return (
    <div 
      style={style} 
      className="m-2" 
      onClick={handleVoice} 
      onTouchStart={handleVoice}
    >
      {name}
    </div>
  );
}

export default Circle;
