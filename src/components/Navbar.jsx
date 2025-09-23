import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Menu, 
  X, 
  ChevronDown, 
  Eye, 
  FileText, 
  Server, 
  Users, 
  AlertTriangle, 
  Lock 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Threat Detection', icon: <Eye className="w-4 h-4" /> },
    { name: 'Data Protection', icon: <FileText className="w-4 h-4" /> },
    { name: 'Network Security', icon: <Server className="w-4 h-4" /> },
    { name: 'Identity Management', icon: <Users className="w-4 h-4" /> },
    { name: 'Risk Assessment', icon: <AlertTriangle className="w-4 h-4" /> },
    { name: 'Security Consulting', icon: <Lock className="w-4 h-4" /> }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-white">CYBEX</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-xl"
                >
                  <div className="p-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to="/services"
                        className="flex items-center space-x-3 w-full p-3 text-left text-gray-300 hover:text-primary hover:bg-slate-700/50 rounded-md transition-colors"
                      >
                        <span className="text-primary">{service.icon}</span>
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blogs"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:from-primary/80 hover:to-secondary/80 transition-all transform hover:scale-105">
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 rounded-lg mt-2 border border-primary/20">
              <Link
                to="/"
                onClick={handleNavClick}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary hover:bg-slate-700/50 rounded-md transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={handleNavClick}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary hover:bg-slate-700/50 rounded-md transition-colors"
              >
                About
              </Link>
              
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-primary hover:bg-slate-700/50 rounded-md transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to="/services"
                        onClick={handleNavClick}
                        className="flex items-center space-x-3 w-full px-3 py-2 text-gray-400 hover:text-primary hover:bg-slate-700/50 rounded-md transition-colors text-sm"
                      >
                        <span className="text-primary">{service.icon}</span>
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                to="/blogs"
                onClick={handleNavClick}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary hover:bg-slate-700/50 rounded-md transition-colors"
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary hover:bg-slate-700/50 rounded-md transition-colors"
              >
                Contact
              </Link>
              
              <button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:from-primary/80 hover:to-secondary/80 transition-all">
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;