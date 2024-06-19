import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { AiOutlineInfoCircle, AiOutlineSound } from "react-icons/ai";

export default function Start() {
  const navigate = useNavigate();
  const [showInfoBox, setShowInfoBox] = useState(false);

  const handleClick = () => {
    // Navigate to the desired route
    navigate('/showdesign/0');
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

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen bg-blue-200 text-gray-800 relative">
        <div className="flex flex-col justify-center items-center m-4 p-2">
          <div className="flex flex-row gap-4">
            <h1 className="text-5xl font-bold mb-8 animate-bounce">
              Shape Design
            </h1>
            <button className="focus:outline-none" onClick={toggleInfoBox}>
              <AiOutlineInfoCircle size={24} color="#2c5282" />
            </button>
          </div>
        </div>
        <div className="p-10">
          <button
            type="button"
            className="relative text-white uppercase no-underline px-10 py-4 inline-block rounded-full transition-all duration-200 border-3 border-solid border-[#3c3c3c] font-inherit font-bold bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 mb-4 shadow-lg hover:shadow-xl transform hover:scale-105 custombutton"
            onClick={handleClick}
          >
            Play
          </button>
        </div>
        {showInfoBox && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={handleOverlayClick}>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-800 mb-4">
                The design is shown for 10 seconds only. You have to memorize
                it and make the exact same design.
              </p>
              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none" onClick={speakInstructions}>
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