import { useNavigate } from "react-router-dom";
import Rectangle from '../polygons/Rectangle';
import Layout from '../Layout';
import Circle from '../polygons/Circle';
import Triangle from "../polygons/Triangle";
function RequiredShapes() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the next route
    navigate('/games/showdesign/0');
  };

  const shapes = [
    { id: 'rectangle1', component: <Rectangle width={150} height={100} color="red" angle={0} name={"Rectangle"} text={"red color Rectangle"} voiceName="Google US English" onRotationChange={() => {}}/> },
    { id: 'triangle1', component: <Triangle left={90} right={90} bottom={120} color="blue" angle={0} text={"Blue color Triangle"} name={"Triangle"}voiceName="Google US English" onRotationChange={() => {}}/> },
    { id: 'square1', component: <Rectangle width={150} height={150} color="yellow" angle={0} text={"yellow color Square"} name={"Square"} voiceName="Google US English" onRotationChange={() => {}} /> },
    { id: 'circle1', component: <Circle diameter={120} name={"Circle"} color="red" text={"red color Circle"} voiceName="Google US English"/> },
    { id: 'rectangle2', component: <Rectangle width={100} height={50} color="blue" angle={0} text={"blue color Rectangle"} name={"Rectangle"} voiceName="Google US English" onRotationChange={() => {}}/> },
    { id: 'triangle2', component: <Triangle left={60} right={60} bottom={90} color="yellow" text={"yellow color Triangle"} name={"Triangle"}voiceName="Google US English" angle={0} onRotationChange={() => {}}/> },
    { id: 'square2', component: <Rectangle width={100} height={100} color="red" angle={0} text={"red color Square"} name={"Square"}voiceName="Google US English" onRotationChange={() => {}}/> },
    { id: 'circle2', component: <Circle diameter={90} color="blue" text={"blue color Circle"} name={"Circle"} voiceName="Google US English"/> },
  ];

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen p-4'>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shapes.map((shape) => (
            <div key={shape.id} id={shape.id} className="flex justify-center">
              {shape.component}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-lg"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </Layout>
  );
}

export default RequiredShapes;
