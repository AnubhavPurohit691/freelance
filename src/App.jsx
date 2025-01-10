import React, { useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ladder } from './hook';
import AnimatedButton from './assets/components/Pagebutton';
import ModelViewer from './assets/components/models/model1';

import PythagorasTheorem from './pages/Firstpage';
import ModelViewer2 from './assets/components/models/model2';
import { HomePage } from './assets/components/Slider';
import PythagorasExercise from './pages/secoundpage';


const App = () => {
  const isladder = useRecoilValue(ladder)
  return (
    <>
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0 }}>
        <Routes>
        <Route path='/' element={<PythagorasTheorem/>}/>
        <Route path='/pythagorus' element={<ModelViewer/>}/>
        <Route path='/ladder' element={<ModelViewer2 isladder={isladder}/>}/>
        <Route path='/pythagorusexercise' element={<PythagorasExercise/>}/>
        </Routes>
    </div>
      </>
  );
};
export default App;
// isladder?{ position: [0, 8, 15], fov: 50 }:{ position: [0, 8, 0], fov: 50 }
