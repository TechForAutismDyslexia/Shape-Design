import React from "react";
import Rectangle from "../polygons/Rectangle";
import Triangle1 from "../polygons/Triangle1";
import Triangle2 from "../polygons/Triangle2";
const Design1 = () => {
  return (
    <div>
          <div className="mb-2 ml-14">
          <Rectangle width={150} height={100} color="blue" text={"Rectangle"} voiceName="Google US English" angle={0} onRotationChange={() => {}}/>
      </div>
        <div className="flex flex-row gap-2">
          <Triangle1 bottom={120} right={120} top={0} color="blue" text={"Triangle"} voiceName="Google US English" onRotationChange={() => {}} />
          <Triangle2 bottom={120} left={120} top={0} color="red" text={"Triangle"} voiceName="Google US English" onRotationChange={() => {}} />
        </div>
    </div>

  );
};

export default Design1;

 