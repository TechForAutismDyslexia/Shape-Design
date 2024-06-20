import React from 'react';
import { Droppable } from '../../util/Droppable';
import InvertedTriangle from "../../polygons/InvertedTriangle";

const DroppableAreaDesign3 = ({ droppedShapes ,color}) => {
  return (
    <div className="border-2" style={{ borderColor: color, borderWidth: '2px',width: '200px', height: '365px' }}>
      <Droppable id="inverted-triangle-red-target">
        <div >
          {droppedShapes["inverted-triangle-red-target"] ? (
            <InvertedTriangle left={90} right={90} top={110} color="red" onRotationChange={() => {}} />
          ) : (
            <InvertedTriangle left={90} right={90} top={110} color="transparent" onRotationChange={() => {}} />
          )}
        </div>
      </Droppable>
      <Droppable id="inverted-triangle-yellow-target">
        <div >
          {droppedShapes["inverted-triangle-yellow-target"] ? (
            <InvertedTriangle left={90} right={90} top={110} color="yellow" onRotationChange={() => {}} />
          ) : (
            <InvertedTriangle left={90} right={90} top={110} color="transparent" onRotationChange={() => {}} />
          )}
        </div>
      </Droppable>
      <Droppable id="inverted-triangle-blue-target">
        <div >
          {droppedShapes["inverted-triangle-blue-target"] ? (
            <InvertedTriangle left={90} right={90} top={110} color="blue" onRotationChange={() => {}} />
          ) : (
            <InvertedTriangle left={90} right={90} top={110} color="transparent" onRotationChange={() => {}} />
          )}
        </div>
      </Droppable>
    </div>
  );
};

export default DroppableAreaDesign3;
