import React, { useMemo } from 'react';
import Draggable from '../util/Draggable';
import Rectangle from "../polygons/Rectangle";
import Triangle1 from "../polygons/Triangle1";
import Triangle2 from "../polygons/Triangle2";
import InvertedTriangle from "../polygons/InvertedTriangle";

const DraggableShapes = ({ designId, droppedShapes }) => {
  // Define all shapes for each design as a memoized value
  const allShapes = useMemo(() => [
    [
      {
        id: "rectangle1",
        component: (
          <Rectangle
            width={150}
            height={100}
            color="blue"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "rectangle-target"
      },
      {
        id: "triangle2",
        component: (
          <Triangle2
            bottom={120}
            left={120}
            top={0}
            color="red"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "triangle2-target"
      },
      {
        id: "triangle1",
        component: (
          <Triangle1
            bottom={120}
            right={120}
            top={0}
            color="blue"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "triangle1-target"
      },
    ],
    [
      {
        id: "rectangle1",
        component: (
          <Rectangle
            width={220}
            height={100}
            color="red"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "rectangle1-target"
      },
      {
        id: "rectangle3",
        component: (
          <Rectangle
            width={100}
            height={200}
            color="blue"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "rectangle3-target"
      },
      {
        id: "rectangle2",
        component: (
          <Rectangle
            width={100}
            height={200}
            color="yellow"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "rectangle2-target"
      },
    ],
    [
      {
        id: "Triangle1",
        component: (
          <InvertedTriangle
            left={90}
            right={90}
            top={110}
            color="red"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "inverted-triangle-red-target"
      },
      {
        id: "Triangle3",
        component: (
          <InvertedTriangle
            left={90}
            right={90}
            top={110}
            color="blue"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "inverted-triangle-blue-target"
      },
      {
        id: "Triangle2",
        component: (
          <InvertedTriangle
            left={90}
            right={90}
            top={110}
            color="yellow"
            angle={0}
            onRotationChange={() => {}}
          />
        ),
        targetId: "inverted-triangle-yellow-target"
      },
    ]
  ][designId] || [], [designId]); // <-- Add designId as a dependency

  // Filter shapes that are not dropped correctly
  const notDroppedShapes = allShapes.filter(shape => !droppedShapes[shape.targetId]);

  return (
    <div className="flex flex-wrap gap-4">
      {notDroppedShapes.map((shape) => (
        <div key={shape.id} className="w-full md:w-auto p-2">
          <Draggable id={shape.id}>
            <div id={shape.id}>{shape.component}</div>
          </Draggable>
        </div>
      ))}
    </div>
  );
};

export default DraggableShapes;
