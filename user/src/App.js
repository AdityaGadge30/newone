
import React , {useEffect, useState } from "react";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";

import Work from './components/Work';
import Start from './components/Start';
import All_work from "./components/Total_work";
import Total_work from "./components/Total_work";
import Work_confirm from "./components/Work_confirm";
import Work_final from "./components/Work_final";


function App() {


  return (


    <>
    
    <Router>  
      <Routes>
          <Route path="/" element={<Start />} />

          <Route path="/work_req" element={<Work />} />
          <Route path="/allwork" element={<Total_work />} />
          <Route path="/part_req" element={<Work_confirm />} />
          <Route path="/all_req" element={<Work_final />} />
      
          

         
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
