import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WebsiteSecurityAuditPage from './pages/services/WebsiteSecurityAuditPage';
import DeviceEndpointProtectionPage from './pages/services/DeviceEndpointProtectionPage';
import CyberAwarenessTrainingPage from './pages/services/CyberAwarenessTrainingPage';
import RealTimeThreatMonitoringPage from './pages/services/RealTimeThreatMonitoringPage';
import EmailSecuritySetupPage from './pages/services/EmailSecuritySetupPage';
import SecurityAuditAssessmentPage from './pages/services/SecurityAuditAssessmentPage';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/website-security-audit" element={<WebsiteSecurityAuditPage />} />
          <Route path="/services/device-endpoint-protection" element={<DeviceEndpointProtectionPage />} />
          <Route path="/services/cyber-awareness-training" element={<CyberAwarenessTrainingPage />} />
          <Route path="/services/real-time-threat-monitoring" element={<RealTimeThreatMonitoringPage />} />
          <Route path="/services/email-security-setup" element={<EmailSecuritySetupPage />} />
            <Route path="/services/security-audit-assessment" element={<SecurityAuditAssessmentPage />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<BlogsPage />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;