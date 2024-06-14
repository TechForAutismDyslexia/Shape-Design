import React from 'react';
import Start from './screens/Start';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowDesign from './screens/ShowDesigns';
// import DragShapes from './screens/DragShapes';
import NotFound from './screens/NotFound';
import DesignStructure from './screens/DesignStructure';
import AllShapes from './screens/AllShapes';
// import Mainmenu from './screens/Mainmenu';
export default function App() {
  return (
    <div >
      <Router>
          <Routes>
            <Route path="/" element={<Start/>} />
            <Route path="/showdesign/:id" element={<ShowDesign/>} />
            {/* <Route path="/dragshapes/:id" element={<DragShapes/>}/> */}
            <Route path="*" element={<NotFound />} />
            <Route path="/allshapes" element={<AllShapes />} />
            <Route path="/designstructure/:id" element={<DesignStructure />} />
            {/* <Route path="/mainmenu" element={<Mainmenu/>} /> */}
          </Routes>
      </Router>
      
    </div>
  );
}
