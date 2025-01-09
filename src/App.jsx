import React, { useState } from 'react';

import  {  Model1 } from './components/models/model1';
import { Model2 } from './components/models/model2';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ladder } from './hook';
import Slider from './components/Slider';
import AnimatedButton from './components/Pagebutton';

const App = () => {
  const isladder = useRecoilValue(ladder)
  return (
    <>
    <div style={{ width: '100vw', height: '90vh', overflow: 'hidden', margin: 0 }}>
        <Routes>
        <Route path='/pythagorus' element={<Model1/>}/>
        <Route path='/ladder' element={<Model2/>}/>
        </Routes>
        
    </div>
      <AnimatedButton/>
      <Slider/>
      </>
  );
};

export default App;
// isladder?{ position: [0, 8, 15], fov: 50 }:{ position: [0, 8, 0], fov: 50 }
