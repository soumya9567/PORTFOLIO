import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Cursor from './Components/Cursor.jsx';

function App() {
  return (
  
    <>
    <Cursor />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>

  );
}

export default App;
