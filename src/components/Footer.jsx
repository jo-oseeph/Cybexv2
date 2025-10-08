import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const solutionsLinks = [
    { name: "Threat Detection", path: "/threat-monitoring" },
    { name: "Incident Response", path: "/incident-response" },
    { name: "Security Consulting", path: "/security-consulting" },
    { name: "Security Audit", path: "/security-audit" }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/cybex", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/cybex", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com/cybex", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/cybex", label: "Instagram" }
  ];

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-dark border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-orbitron text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
              CYBEX
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Advanced cybersecurity solutions powered by AI, protecting organizations worldwide with cutting-edge threat detection and response capabilities.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-orbitron text-lg font-semibold text-primary mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutionsLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-orbitron text-lg font-semibold text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-orbitron text-lg font-semibold text-primary mb-4">
              Contact
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@cybex.com"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                >
                  info@cybex.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+254717378758"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                >
                  +254 (717) 378-758
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>123 Tech Solutions</p>
                  <p>Woodvale Grove, Westlands</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h5 className="font-orbitron text-base font-semibold text-primary mb-3">
                Follow Us
              </h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cybex. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;