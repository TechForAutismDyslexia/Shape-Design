// DroppableAreaDesign2.js
import React from 'react';
import { Droppable } from '../../util/Droppable';
import Rectangle from "../../polygons/Rectangle";

const DroppableAreaDesign2 = ({ droppedShapes ,color}) => {

  return (
    <div className="border-2" style={{borderColor: color, borderWidth: '2px', width: '244px', height: '344px' }}>
      <Droppable id="rectangle1-target">
        <div className="mb-1">
          {droppedShapes["rectangle1-target"] ? (
            <Rectangle width={220} height={100} color="red" angle={0} onRotationChange={() => {}} />
          ) : (
            <Rectangle width={220} height={100} color="transparent" angle={0} onRotationChange={() => {}} />
          )}
        </div>
      </Droppable>
      <div className="flex flex-row gap-1">
        <Droppable id="rectangle2-target">
          <div>
            {droppedShapes["rectangle2-target"] ? (
              <Rectangle width={100} height={200} color="yellow" angle={0} onRotationChange={() => {}} />
            ) : (
              <Rectangle width={100} height={200} color="transparent" angle={0} onRotationChange={() => {}} />
            )}
          </div>
        </Droppable>
        <Droppable id="rectangle3-target">
          <div>
            {droppedShapes["rectangle3-target"] ? (
              <Rectangle width={100} height={200} color="blue" angle={0} onRotationChange={() => {}} />
            ) : (
              <Rectangle width={100} height={200} color="transparent" angle={0} onRotationChange={() => {}} />
            )}
          </div>
        </Droppable>
      </div>
    </div>
  );
};

export default DroppableAreaDesign2;
