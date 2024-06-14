import React from "react";
import InvertedTriangle from "../polygons/InvertedTriangle";
const Design3 = () => {
  return (
    <div>
        <div className="flex flex-col gap-2">
          <InvertedTriangle left={90} right={90} top={110} color="red" text={"Triangle"} voiceName="Google US English" onRotationChange={() => {}}/>
          <InvertedTriangle left={90} right={90} top={110} color="yellow" text={"Triangle"} voiceName="Google US English" onRotationChange={() => {}} />
          <InvertedTriangle left={90} right={90} top={110} color="blue" text={"Triangle"} voiceName="Google US English" onRotationChange={() => {}}/>
        </div>
    </div>

  );
};

export default Design3;

 