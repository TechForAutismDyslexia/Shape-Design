import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { AiOutlineInfoCircle, AiOutlineSound } from "react-icons/ai";

export default function Start() {
  const navigate = useNavigate();
  const [showInfoBox, setShowInfoBox] = useState(false);

  const handleClick = () => {
    // Navigate to the desired route
    navigate('/games/shapedesign/showdesign/0');
  };

  const toggleInfoBox = () => {
    setShowInfoBox(!showInfoBox);
  };

  const speakInstructions = () => {
    const utterance = new SpeechSynthesisUtterance(
      "The design is shown for 10 seconds only. You have to memorize it and make the exact same design."
    );
    window.speechSynthesis.speak(utterance);
  };

  const handleOverlayClick = () => {
    setShowInfoBox(false);
  };

  // Prevent the event from bubbling up to the outer div
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen relative" style={{ backgroundColor: '#EAFFD0' }}>
        <div className="flex flex-col justify-center items-center m-4 p-2">
          <div className="flex flex-row gap-4">
            <h1 className="text-5xl font-bold mb-8" style={{ color: '#F38181' }}>
              Shape Design
            </h1>
            <button className="focus:outline-none" onClick={toggleInfoBox}>
              <AiOutlineInfoCircle size={24} className="text-blue-500 hover:text-blue-600" />
            </button>
          </div>
        </div>
        <div className="p-10">
          <button
            type="button"
            className="relative text-white text-2xl uppercase px-10 py-4 rounded-full transition-all duration-200 border-3 border-solid border-gray-700"
            style={{
              backgroundImage: 'linear-gradient(to right, #7AC4B0, #61A894)',
              backgroundColor: '#95E1D3',
            }}
            onClick={handleClick}
          >
            Play
          </button>
        </div>
        {showInfoBox && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={handleOverlayClick}>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md" onClick={(e) => e.stopPropagation()}>
              <p className="text-gray-800 mb-4">
                The design is shown for 10 seconds only. You have to memorize
                it and make the exact same design.
              </p>
              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none" onClick={(e) => { speakInstructions(); stopPropagation(e); }}>
                <AiOutlineSound size={20} />
                <span>Speak Instructions</span>
              </button>
              <button className="absolute top-0 right-0 mt-2 mr-2" onClick={toggleInfoBox}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
