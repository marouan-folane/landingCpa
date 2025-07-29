import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnlockPage from './Unlock';
import HeroSection from './home';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/unlock" element={<UnlockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
