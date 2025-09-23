import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;