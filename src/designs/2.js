import React from "react";
import Rectangle from "../polygons/Rectangle";
const Design2 = () => {
  return (
    <div>
          <div className="mb-1">
          <Rectangle width={220} height={100} color="red" angle={0} text={"Rectangle"} voiceName="Google US English" onRotationChange={() => {}}/>
      </div>
        <div className="flex flex-row gap-1">
        <Rectangle width={100} height={200} color="yellow" angle={0} text={"Rectangle"} voiceName="Google US English" onRotationChange={() => {}}/>
        <Rectangle width={100} height={200} color="blue" angle={0} text={"Rectangle"} voiceName="Google US English" onRotationChange={() => {}}/>

        </div>
    </div>

  );
};

export default Design2;

 