import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<BlogsPage />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;