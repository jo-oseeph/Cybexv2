import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

import WebsiteDesignPage from "./pages/services/WebsiteDesignPage";
import WebsiteManagementPage from "./pages/services/WebsiteManagementPage";
import WebsiteTakeoverPage from "./pages/services/WebsiteTakeoverPage";
import HostingDomainPage from "./pages/services/HostingDomainPage";
import WebsiteSecurityPage from "./pages/services/WebsiteSecurityPage";
import PerformanceOptimizationPage from "./pages/services/PerformanceOptimizationPage";
import PortfolioPage from "./pages/PortfolioPage";

import Register from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import CreatePost from "./pages/admin/CreatePost";
import AdminDashboard from "./pages/admin/AdminDashboard";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PostDetails from "./pages/PostDetails";
import BlogPage from "./pages/BlogPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-dark">
          <ScrollToTop />
          <Navbar />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/create-post" element={<CreatePost />} />

            <Route path="/blog/:slugOrId" element={<PostDetails />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/services/website-design-development"
              element={<WebsiteDesignPage />}
            />
            <Route
              path="/services/website-management"
              element={<WebsiteManagementPage />}
            />
            <Route
              path="/services/website-takeover-recovery"
              element={<WebsiteTakeoverPage />}
            />
            <Route
              path="/services/hosting-domain-management"
              element={<HostingDomainPage />}
            />
            <Route
              path="/services/website-security-protection"
              element={<WebsiteSecurityPage />}
            />
            <Route
              path="/services/performance-optimization"
              element={<PerformanceOptimizationPage />}
            />
            <Route path="/portfolio" element={<PortfolioPage />} />

            {/* Protected admin route */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
