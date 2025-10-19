import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Menu, 
  X, 
  ChevronDown, 
  Eye,  
  Server, 
  Users, 
  AlertTriangle, 
  Lock, 
  Phone,
  Mail,
  ShieldCheck
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const services = [
    { name: 'Real-Time Threat Monitoring', icon: <Eye className="w-4 h-4" />, path: '/services/real-time-threat-monitoring' },
    { name: 'Website Security Audit', icon: <Shield className="w-4 h-4" />, path: '/services/website-security-audit' },
    { name: 'Device & Endpoint Protection', icon: <Phone className="w-4 h-4" />, path: '/services/device-endpoint-protection' },
    { name: 'Cyber Awareness Training', icon: <Users className="w-4 h-4" />, path: '/services/cyber-awareness-training' },
    { name: 'Email Security Setup', icon: <Mail className="w-4 h-4" />, path: '/services/email-security-setup' },
    { name: 'Security Audit & Assessment', icon: <ShieldCheck className="w-4 h-4" />, path: '/services/security-audit-assessment' },
    { name: 'Network Security', icon: <Server className="w-4 h-4" />, path: '/network-security' },
    { name: 'Identity Management', icon: <Users className="w-4 h-4" />, path: '/identity-management' },
    { name: 'Risk Assessment', icon: <AlertTriangle className="w-4 h-4" />, path: '/risk-assessment' },
    { name: 'Security Consulting', icon: <Lock className="w-4 h-4" />, path: '/security-consulting' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleBookConsultation = () => {
    // Add consultation booking logic here
    console.log('Book consultation clicked');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark shadow-2xl shadow-primary/10' : 'bg-dark'
    } border-b-2 border-primary/50 shadow-[0_2px_20px_rgba(6,182,212,0.3)]`}>
      
      {/* Animated glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo with animation */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transform transition-transform duration-300 hover:scale-105" 
            onClick={handleNavClick}
          >
            <div className="relative">
              <Shield className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
              <div className="absolute inset-0 w-8 h-8 text-primary opacity-50 animate-ping"></div>
            </div>
            <span className="font-orbitron text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary hover:from-primary-light hover:to-primary transition-all duration-300">
              CYBEX
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-orbitron text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link
              to="/about"
              className="font-orbitron text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center space-x-1 font-orbitron text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 relative"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${servicesOpen ? 'rotate-180 text-primary' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className={`absolute top-full left-0 mt-2 w-72 bg-dark border border-primary/30 rounded-xl shadow-2xl shadow-primary/20 backdrop-blur-sm transition-all duration-300 transform ${
                  servicesOpen 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 -translate-y-2 invisible'
                }`}
              >
                <div className="p-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={handleNavClick}
                      className="flex items-center space-x-3 w-full p-3 text-left text-gray-300 hover:text-primary hover:bg-dark-light/50 rounded-lg transition-all duration-300 group/item transform hover:translate-x-1"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-primary group-hover/item:text-primary-light transition-colors duration-300">
                        {service.icon}
                      </span>
                      <span className="font-orbitron text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/careers"
              className="font-orbitron text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 relative group"
            >
              Careers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link
              to="/contact"
              className="font-orbitron text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <button 
              onClick={handleBookConsultation}
              className="font-orbitron bg-gradient-to-r from-primary to-secondary text-dark px-6 py-2 rounded-full hover:from-primary-light hover:to-secondary-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 font-medium"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary-light transition-all duration-300 transform hover:scale-110"
            >
              {isOpen ? 
                <X className="w-6 h-6 animate-spin" /> : 
                <Menu className="w-6 h-6 hover:animate-pulse" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-light/90 rounded-xl mt-2 border border-primary/30 backdrop-blur-sm">
            <Link
              to="/"
              onClick={handleNavClick}
              className="block w-full text-left px-3 py-2 font-orbitron text-gray-300 hover:text-primary hover:bg-dark/50 rounded-lg transition-all duration-300 transform hover:translate-x-1"
            >
              Home
            </Link>
            
            <Link
              to="/about"
              onClick={handleNavClick}
              className="block w-full text-left px-3 py-2 font-orbitron text-gray-300 hover:text-primary hover:bg-dark/50 rounded-lg transition-all duration-300 transform hover:translate-x-1"
            >
              About Us
            </Link>
            
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 font-orbitron text-gray-300 hover:text-primary hover:bg-dark/50 rounded-lg transition-all duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`ml-4 mt-1 space-y-1 transition-all duration-300 overflow-hidden ${
                servicesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 w-full px-3 py-2 text-gray-400 hover:text-primary hover:bg-dark/50 rounded-lg transition-all duration-300 text-sm transform hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-primary">{service.icon}</span>
                    <span className="font-orbitron">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/careers"
              onClick={handleNavClick}
              className="block w-full text-left px-3 py-2 font-orbitron text-gray-300 hover:text-primary hover:bg-dark/50 rounded-lg transition-all duration-300 transform hover:translate-x-1"
            >
              Careers
            </Link>
            
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block w-full text-left px-3 py-2 font-orbitron text-gray-300 hover:text-primary hover:bg-dark/50 rounded-lg transition-all duration-300 transform hover:translate-x-1"
            >
              Contact Us
            </Link>
            
            <button 
              onClick={handleBookConsultation}
              className="w-full mt-4 font-orbitron bg-gradient-to-r from-primary to-secondary text-dark px-6 py-2 rounded-full hover:from-primary-light hover:to-secondary-light transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;