import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { AiOutlineSound } from "react-icons/ai";

export default function Start() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired route
    navigate('/showdesign/0');
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center m-4 p-2">
    <div className="flex flex-row gap-4">
      <h1 className="text-5xl font-bold text-blue-800 mb-8">
        𝓢𝓱𝓪𝓹𝓮 𝓭𝓮𝓼𝓲𝓰𝓷
      </h1>
      <button
        onClick={(e) => {
          const utterance = new SpeechSynthesisUtterance(
            "The design is shown for 10 seconds only , you have to memorize it and make the exact same design ."
          );
          window.speechSynthesis.speak(utterance);
        }}
      >
<AiOutlineSound size={24} color="#2c5282"/></button>
    </div>
  </div>
        <div className="p-10">
          <button
            type="button"
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl px-8 py-3 mb-2 shadow-lg"
            onClick={handleClick}
          >
            Play
          </button>
        </div>
      </div>
    </Layout>
  );
}
