import React, { useState } from 'react';
// import './App.css';

const App = () => {
  // Define state to keep track of the shapes dropped on the canvas
  const [droppedShapes, setDroppedShapes] = useState([]);

  // Function to handle dropping a shape onto the canvas
  const handleDrop = (e, shape) => {
    e.preventDefault();
    const newShapes = [...droppedShapes, shape]; // Add the new shape to the array of dropped shapes
    setDroppedShapes(newShapes);
  };

  return (
    <div className="canvascontainer">
      <div className="shapes">
        {/* Shapes to be dragged */}
        <div className="circle" draggable onDragStart={(e) => handleDrop(e, 'circle')} />
        <div className="triangle" draggable onDragStart={(e) => handleDrop(e, 'triangle')} />
        <div className="square" draggable onDragStart={(e) => handleDrop(e, 'square')} />
        <div className="smallcircle" draggable onDragStart={(e) => handleDrop(e, 'smallcircle')} />
        <div className="smallsquare" draggable onDragStart={(e) => handleDrop(e, 'smallsquare')} />
        <div className="smallrectangle" draggable onDragStart={(e) => handleDrop(e, 'smallrectangle')} />
        <div className="smalltriangle" draggable onDragStart={(e) => handleDrop(e, 'smalltriangle')} />
        <div className="rectangle" draggable onDragStart={(e) => handleDrop(e, 'rectangle')} />
        
      </div>
      <div
        className="canvas"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, null)} // Clear dropped shapes on drop outside of shapes
      >
        {/* Render all dropped shapes within the canvas */}
        {droppedShapes.map((shape, index) => (
          <div key={index} className={shape} />
        ))}
      </div>
    </div>
  );
};

export default App;
