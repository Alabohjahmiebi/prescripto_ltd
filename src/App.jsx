import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import Hospitals from './Hospitals.jsx';
import RiversideHospital from './RiversideHospital.jsx';
import AboutUs from './AboutUs.jsx';
import HowItWorks from './HowitWorks.jsx'; // 1. Import HowItWorks

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/hospitals/riverside" element={<RiversideHospital />} /> {/* 2. Add route */}
      <Route path="/about" element={<AboutUs />} /> {/* 2. Add the /about route */}
      <Route path="/how-it-works" element={<HowItWorks />} /> {/* 2. Add Route */}
    </Routes>
  );
}