import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationExplorer from './pages/DestinationExplorer';
import DetailedDestination from './pages/DetailedDestination';
import About from './pages/About';
import Contact from './pages/Contact';
import Tours from './pages/Tours';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<DestinationExplorer />} />
        <Route path="/destination/:id" element={<DetailedDestination />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </Router>
  );
}

export default App; 