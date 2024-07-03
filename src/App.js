import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './screens/Start';
import ShowDesign from './screens/ShowDesigns';
import NotFound from './screens/NotFound';
import DesignStructure from './screens/DesignStructure';
import AllShapes from './screens/AllShapes';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="games/shapedesign/" element={<Start />} />
        <Route path="games/shapedesign/showdesign/:id" element={<ShowDesign />} />
        <Route path="games/shapedesign/allshapes" element={<AllShapes />} />
        <Route path="games/shapedesign/designstructure/:id" element={<DesignStructure />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
