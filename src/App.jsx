import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Intro from './Components/Intro.jsx';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>

  );
}

export default App;
