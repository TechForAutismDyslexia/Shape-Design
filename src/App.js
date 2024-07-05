import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './screens/Start';
import ShowDesign from './screens/ShowDesigns';
import NotFound from './screens/NotFound';
import DesignStructure from './screens/DesignStructure';
import AllShapes from './screens/AllShapes';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/showdesign/:id" element={<ShowDesign />} />
        <Route path="/allshapes" element={<AllShapes />} />
        <Route path="/designstructure/:id" element={<DesignStructure />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}