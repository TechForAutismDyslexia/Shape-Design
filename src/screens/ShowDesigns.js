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
  const designId =location.pathname.split("/").pop(); // Adjust index
  const DesignComponent = designs[designId];

  const handleClick = () => {
    // Navigate to the next route
    navigate(`/designstructure/${designId + 1}`); // Adjust for next design ID
  };

  const [timer, setTimer] = useState(10);

  // Timer for navigation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000); // Update every second

    // Navigate to the next route after 10 seconds
    const timeout = setTimeout(() => {
      navigate(`/designstructure/${designId}`); // Adjust for next design ID
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }; // Clear the timer on component unmount
  }, [navigate, designId]);

  const allShapes = [
    [
      { id: "rectangle1", component: <Rectangle width={150} height={100} color="blue" text={"Rectangle"} angle={0} onRotationChange={() => {}} /> },
      { id: "triangle1", component: <Triangle1 bottom={120} right={120} top={0} color="blue" angle={0} text={"Triangle"} onRotationChange={() => {}} /> },
      { id: "triangle2", component: <Triangle2 bottom={120} left={120} top={0} color="red" text={"Triangle"} angle={0} onRotationChange={() => {}} /> },
    ],
    [
      { id: "rectangle2", component: <Rectangle width={204} height={100} color="red" angle={0} text={"Rectangle"} onRotationChange={() => {}} /> },
      { id: "rectangle3", component: <Rectangle width={200} height={100} color="yellow" angle={0} text={"Rectangle"} onRotationChange={() => {}} /> },
      { id: "rectangle4", component: <Rectangle width={200} height={100} color="blue" angle={0} text={"Rectangle"} onRotationChange={() => {}} /> },
    ],
    [
      { id: "triangle1", component: <InvertedTriangle left={90} right={90} top={110} color="red" angle={0} text={"Triangle"} onRotationChange={() => {}} /> },
      { id: "triangle3", component: <InvertedTriangle left={90} right={90} top={110} color="yellow" angle={0} text={"Triangle"} onRotationChange={() => {}} /> },
      { id: "triangle2", component: <InvertedTriangle left={90} right={90} top={110} color="blue" text={"Triangle"} angle={0} onRotationChange={() => {}} /> },
    ],
  ];

  const shapes = allShapes[designId] || [];
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center m-4 p-2">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Shape Design</h1>
        <div className="absolute left-4 top-4 text-blue-500 font-bold text-xl">{timer} s</div>
        <h2 className="text-2xl font-bold text-blue-500 mb-6">Required Shapes</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-10">
          {shapes.map((shape) => (
            <div key={shape.id} id={shape.id}>
              {shape.component}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-blue-500 mb-6">Memorize design with shapes</h2>
        <div className="bg-white rounded-lg shadow-lg p-4">
          {DesignComponent && <DesignComponent />}
        </div>
        <button
          type="button"
          className="relative text-white uppercase px-8 py-3 inline-block rounded-full transition-all duration-200 border-2 border-solid border-[#3c3c3c] font-bold bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 mt-8 shadow-lg hover:shadow-xl transform hover:scale-105 custombutton"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
      <style jsx>{`
        .custombutton::after {
          content: "";
          display: inline-block;
          height: 100%;
          width: 100%;
          border-radius: 100px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          transition: all 0.4s;
          background: linear-gradient(90deg, rgba(72, 72, 72, 1) 0%, rgba(96, 96, 96, 1) 100%);
        }

        .custombutton:hover::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
        }

        .custombutton:hover {
          box-shadow: 0 20px 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </Layout>
  );
}
