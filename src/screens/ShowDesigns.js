import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Design1 from "../designs/1";
import Design2 from "../designs/2";
import Design3 from "../designs/3";
import Layout from "../Layout";
import Rectangle from "../polygons/Rectangle";
import Triangle1 from "../polygons/Triangle1";
import Triangle2 from "../polygons/Triangle2";
import InvertedTriangle from "../polygons/InvertedTriangle";

export default function ShowDesign() {
  const navigate = useNavigate();
  const location = useLocation();
  const designs = [Design1, Design2, Design3];

  // Extract the design ID from the URL
  const designId = location.pathname.split("/").pop();
  const DesignComponent = designs[designId];

  const handleClick = () => {
    // Navigate to the next route
    navigate(`/designstructure/${designId}`);
  };

  const [timer, setTimer] = useState(10);

  // Timer for navigation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000); // Update every second

    // Navigate to the next route after 10 seconds
    const timeout = setTimeout(() => {
      navigate(`/designstructure/${designId}`);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }; // Clear the timer on component unmount
  }, [navigate, designId]);

  const allShapes = [
    [
      { id: "rectangle1", component: <Rectangle width={150} height={100} color="blue" text={"Rectangle"}  angle={0} onRotationChange={() => {}} /> },
      { id: "triangle1", component: <Triangle1 bottom={120} right={120} top={0} color="blue" angle={0} text={"Triangle"}  onRotationChange={() => {}} /> },
      { id: "triangle2", component: <Triangle2 bottom={120} left={120} top={0} color="red" text={"Triangle"}   angle={0} onRotationChange={() => {}} /> },
    ],
    [
      { id: "rectangle2", component: <Rectangle width={204} height={100} color="red" angle={0} text={"Rectangle"} onRotationChange={() => {}} /> },
      { id: "rectangle3", component: <Rectangle width={200} height={100} color="yellow" angle={0} text={"Rectangle"}  onRotationChange={() => {}} /> },
      { id: "rectangle4", component: <Rectangle width={200} height={100} color="blue" angle={0} text={"Rectangle"}  onRotationChange={() => {}} /> },
    ],
    [
      { id: "triangle1", component: <InvertedTriangle left={90} right={90} top={110} color="red" angle={0} text={"Triangle"}  onRotationChange={() => {}} /> },
      { id: "triangle3", component: <InvertedTriangle left={90} right={90} top={110} color="yellow" angle={0} text={"Triangle"}  onRotationChange={() => {}} /> },
      { id: "triangle2", component: <InvertedTriangle left={90} right={90} top={110} color="blue" text={"Triangle"}  angle={0} onRotationChange={() => {}} /> },
    ],
  ];

  const shapes = allShapes[designId] || [];

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center m-4 p-2">
      <h1 className="text-5xl font-bold text-blue-800 mb-8">
      𝓢𝓱𝓪𝓹𝓮 𝓭𝓮𝓼𝓲𝓰𝓷
        </h1>
        <div className="absolute left-4 top-4 text-blue-500 font-bold text-2xl">
          {timer} s
        </div>
        <h1 className="text-3xl font-bold text-blue-500 mb-8">𝚁𝚎𝚚𝚞𝚒𝚛𝚎𝚍 𝚂𝚑𝚊𝚙𝚎𝚜</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-12">
          {shapes.map((shape) => (
            <div key={shape.id} id={shape.id}>
              {shape.component}
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-blue-500 mb-8">𝙼𝚎𝚖𝚘𝚛𝚒𝚣𝚎 𝙳𝚎𝚜𝚒𝚐𝚗 𝚠𝚒𝚝𝚑 𝙲𝚘𝚕𝚘𝚛𝚜</h1>
        <div className="bg-black-100 rounded-lg shadow-lg p-4">
          {DesignComponent && <DesignComponent />}
        </div>
        <button
          type="button"
          className="mt-8 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
          onClick={handleClick}
        >
          𝙽𝚎𝚡𝚝
        </button>
      </div>
    </Layout>
  );
}
