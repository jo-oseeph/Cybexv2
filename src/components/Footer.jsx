import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const solutionsLinks = [
    { name: "Website Design & Development", path: "/services/website-design-development" },
    { name: "Fully Managed Website Services", path: "/services/managed-website-services" },
    { name: "Website Security & Optimization", path: "/services/website-security-optimization" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/cybex", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/cybex", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com/cybex", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/cybex", label: "Instagram" },
  ];

  return (
    <footer className="bg-dark border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* ── Company Info ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/cybex.png"
                alt="Cybex"
                className="h-10 w-auto object-contain"
              />
              <span className="font-orbitron text-xl font-bold text-primary">
                CYBEX
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
              We help businesses grow online with professional websites, fully managed services, and reliable security, built to last and designed to impress.
            </p>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-primary uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {solutionsLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-primary uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact & Social ── */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-primary uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-light flex-shrink-0" />
                <a
                  href="mailto:info@cybextech.co.ke"
                  className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-300"
                >
                  info@cybextech.co.ke
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-light flex-shrink-0" />
                <a
                  href="tel:+254717378758"
                  className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-300"
                >
                  +254 (717) 378-758
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-light flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social icons */}
            <h5 className="font-orbitron text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Follow Us
            </h5>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-dark border border-primary/30 rounded-full flex items-center justify-center text-primary-light hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Copyright ── */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Cybex Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;