import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>

  );
}

export default App;
