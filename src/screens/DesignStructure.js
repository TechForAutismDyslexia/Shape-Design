import React, { useState, useEffect } from "react";
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import Confetti from "react-confetti";
import DraggableShapes from "./DraggableShapes";
import DroppableAreaDesign1 from "./droppableArea/Design1";
import DroppableAreaDesign2 from "./droppableArea/Design2";
import DroppableAreaDesign3 from "./droppableArea/Design3";

const DesignStructure = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);
  const designId = parseInt(location.pathname.split("/").pop(), 10);

  const [shapes, setShapes] = useState([]);
  const [droppedShapes, setDroppedShapes] = useState({});
  const [color, setColor] = useState("blue");
  const [confetti, setConfetti] = useState(false);
  const [tries, setTries] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    const initialShapes = [
      [
        { id: "rectangle1", targetId: "rectangle-target" },
        { id: "triangle2", targetId: "triangle2-target" },
        { id: "triangle1", targetId: "triangle1-target" },
      ],
      [
        { id: "rectangle1", targetId: "rectangle1-target" },
        { id: "rectangle3", targetId: "rectangle3-target" },
        { id: "rectangle2", targetId: "rectangle2-target" },
      ],
      [
        { id: "Triangle1", targetId: "inverted-triangle-red-target" },
        { id: "Triangle2", targetId: "inverted-triangle-yellow-target" },
        { id: "Triangle3", targetId: "inverted-triangle-blue-target" },
      ],
    ];
    setShapes(initialShapes[designId]);
    setDroppedShapes({});
    setTries(0);
    setStartTime(Date.now());
  }, [designId]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      const shape = shapes.find((shape) => shape.id === active.id);
      if (shape && shape.targetId === over.id) {
        setColor("green");
        setTimeout(() => {
          setColor("blue"); // Reset color to blue after 1 second
        }, 1000); // 1000 milliseconds = 1 second
        setShapes((prevShapes) => prevShapes.filter((shape) => shape.id !== active.id));
        setDroppedShapes((prevDroppedShapes) => ({
          ...prevDroppedShapes,
          [over.id]: active.id,
        }));
      } else {
        setColor("red");
        setTimeout(() => {
          setColor("blue"); // Reset color to blue after 1 second
        }, 1000); // 1000 milliseconds = 1 second
        document.getElementById(active.id).style.transform = "translate(0, 0)";
      }
    } else {
      document.getElementById(active.id).style.transform = "translate(0, 0)";
    }
  };

  const handleSubmit = () => {
    const allTargetsMatched = shapes.length === 0 && Object.keys(droppedShapes).length === 3;
    if (allTargetsMatched) {
      const timeTaken = (Date.now() - startTime) / 1000; // time in seconds
      console.log(`Design ${designId} completed in ${timeTaken} seconds with ${tries} tries.`);
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
        const nextDesignId = designId + 1;
        if (nextDesignId < 3) { // Assuming there are only 3 designs
          navigate(`/showdesign/${nextDesignId}`);
        } else {
          console.log("All designs completed!");
        }
      }, 3000); // Navigate after 3 seconds
    } else {
      const utterance = new SpeechSynthesisUtterance("Please try again.");
      window.speechSynthesis.speak(utterance);
      setTries((prevTries) => prevTries + 1);
    }
  };

  return (
    <Layout>
      {confetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div className="flex flex-col justify-center items-center m-4 p-2">
        <h1 className="text-5xl font-bold text-blue-800 mb-8">𝓢𝓱𝓪𝓹𝓮 𝓭𝓮𝓼𝓲𝓰𝓷</h1>
        <h1 className="text-3xl font-bold text-blue-500 mb-8">𝚁𝚎𝚌𝚛𝚎𝚊𝚝𝚎 𝙳𝚎𝚜𝚒𝚐𝚗</h1>
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <DraggableShapes designId={designId} droppedShapes={droppedShapes} />
          {designId === 0 && <DroppableAreaDesign1 droppedShapes={droppedShapes} color={color} />}
          {designId === 1 && <DroppableAreaDesign2 droppedShapes={droppedShapes} color={color} />}
          {designId === 2 && <DroppableAreaDesign3 droppedShapes={droppedShapes} color={color} />}
        </DndContext>
        <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
      </div>
    </Layout>
  );
};

export default DesignStructure;
