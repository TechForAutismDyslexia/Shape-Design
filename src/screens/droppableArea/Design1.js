import React from 'react';
import { Droppable } from '../../util/Droppable';
import Rectangle from "../../polygons/Rectangle";
import Triangle1 from "../../polygons/Triangle1";
import Triangle2 from "../../polygons/Triangle2";

const DroppableAreaDesign1 = ({ droppedShapes, color }) => {

  return (
    <div className="border-2" style={{ borderColor: color, borderWidth: '2px', width: '280px', height: '260px' }}>
      <Droppable id="rectangle-target">
        <div className="ml-14">
          {droppedShapes["rectangle-target"] ? (
            <Rectangle width={150} height={100} color="blue" angle={0} onRotationChange={() => {}} />
          ) : (
            <Rectangle width={150} height={100} color="transparent" angle={0} onRotationChange={() => {}} />
          )}
        </div>
      </Droppable>
      <div className="flex">
        <Droppable id="triangle1-target">
          <div>
            {droppedShapes["triangle1-target"] ? (
              <Triangle1 bottom={120} right={120} top={0} color="blue" onRotationChange={() => {}} />
            ) : (
              <Triangle1 bottom={120} right={120} top={0} color="transparent" onRotationChange={() => {}} />
            )}
          </div>
        </Droppable>
        <Droppable id="triangle2-target">
          <div>
            {droppedShapes["triangle2-target"] ? (
              <Triangle2 bottom={120} left={120} top={0} color="red" onRotationChange={() => {}} />
            ) : (
              <Triangle2 bottom={120} left={120} top={0} color="transparent" onRotationChange={() => {}} />
            )}
          </div>
        </Droppable>
      </div>
    </div>
  );
};

export default DroppableAreaDesign1;
