// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/sobre" element={<Sobre />} />     
        <Route path="/contato" element={<Contato />} />     
       
      </Routes>
    </Router>
  );
};

export default App;