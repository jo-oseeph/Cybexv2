import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WebsiteSecurityAuditPage from "./pages/services/WebsiteSecurityAuditPage";
import DeviceEndpointProtectionPage from "./pages/services/DeviceEndpointProtectionPage";
import CyberAwarenessTrainingPage from "./pages/services/CyberAwarenessTrainingPage";
import RealTimeThreatMonitoringPage from "./pages/services/RealTimeThreatMonitoringPage";
import EmailSecuritySetupPage from "./pages/services/EmailSecuritySetupPage";
import SecurityAuditAssessmentPage from "./pages/services/SecurityAuditAssessmentPage";
import Register from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-dark">
          <Navbar />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected admin route */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Services */}
            <Route
              path="/services/website-security-audit"
              element={<WebsiteSecurityAuditPage />}
            />
            <Route
              path="/services/device-endpoint-protection"
              element={<DeviceEndpointProtectionPage />}
            />
            <Route
              path="/services/cyber-awareness-training"
              element={<CyberAwarenessTrainingPage />}
            />
            <Route
              path="/services/real-time-threat-monitoring"
              element={<RealTimeThreatMonitoringPage />}
            />
            <Route
              path="/services/email-security-setup"
              element={<EmailSecuritySetupPage />}
            />
            <Route
              path="/services/security-audit-assessment"
              element={<SecurityAuditAssessmentPage />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
