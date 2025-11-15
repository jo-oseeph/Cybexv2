import React, { useEffect, useRef, useState } from 'react';
import { Scale, Settings, Shield, Search, Monitor, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, gradient, route, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  const handleCardClick = (e) => {
    // Don't navigate if clicking the "Learn more" button
    if (e.target.closest('a')) return;
    navigate(route);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative bg-dark-light/40 backdrop-blur-sm rounded-xl overflow-hidden transition-transform duration-500 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      } hover:scale-105 hover:-translate-y-2 cursor-pointer`}
      style={{
        transitionDelay: `${delay}ms`,
        borderTop: '2px solid rgba(6, 182, 212, 0.5)',
        borderLeft: '1px solid rgba(6, 182, 212, 0.2)',
        borderRight: '1px solid rgba(6, 182, 212, 0.2)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
      }}
      onClick={handleCardClick}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/5 transition-all duration-500" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </div>

      {/* Top border glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

      <div className="relative p-6 sm:p-8 space-y-4">
        {/* Icon container */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow" />
          <div className={`relative p-4 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-700`}>
            <Icon className="w-8 h-8 text-primary-light group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-orbitron text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {description}
        </p>

        {/* Learn more link */}
        <Link
          to={route}
          className="inline-flex items-center gap-2 font-semibold text-sm border border-accent bg-transparent text-white px-3 py-2 rounded-md transition-all duration-500 ease-in-out hover:bg-accent hover:text-white"
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
        <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-primary rounded-tl-full" />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
 
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const firstSectionServices = [
    {
      icon: Scale,
      title: "Real-Time Threat Monitoring (Basic Tier)",
      description: "We implement basic monitoring tools that alert you to suspicious activity on your website or systems in real time. Know when something goes wrong — before it becomes a disaster.",
      gradient: "from-primary to-secondary",
      route: "/services/real-time-threat-monitoring"
    },
    {
      icon: Settings,
      title: "Email Security Setup",
      description: "We configure essential email protections like SPF, DKIM, and DMARC to prevent spoofing, phishing, and impersonation attacks. Prevent scammers from using your brand to attack others.",
      gradient: "from-primary to-secondary",
      route: "/services/email-security-setup"
    },
    {
      icon: Shield,
      title: "Secure Cloud Setup",
      description: "We help you set up secure access to Google Workspace, Microsoft 365, or other cloud tools — with two-factor authentication, user access controls, and automated backups. Work safely from anywhere — with your data protected.",
      gradient: "from-primary to-secondary",
      route: "/services/security-audit-assessment"
    }
  ];

  const solutionsServices = [
    {
      icon: Search,
      title: "Website Security Audit",
      description: "We scan your website for vulnerabilities like weak SSL certificates, outdated plugins, exposed admin panels, and insecure configurations, then fix them fast. Keep your site secure and trustworthy for your customers.",
      gradient: "from-primary to-secondary",
      route: "/services/website-security-audit"
    },
    {
      icon: Monitor,
      title: "Device & Endpoint Protection",
      description: "We help you secure laptops, desktops, and mobile devices with strong encryption, antivirus tools, secure backups, and regular patching. Protect your business from ransomware, theft, and data loss.",
      gradient: "from-primary to-secondary",
      route: "/services/device-endpoint-protection"
    },
    {
      icon: GraduationCap,
      title: "Cyber Awareness Training",
      description: "We offer simple training sessions for your staff to recognize phishing emails, use strong passwords, and avoid costly security mistakes. Because even smart people click the wrong link sometimes.",
      gradient: "from-primary to-secondary",
      route: "/services/cyber-awareness-training"
    }
  ];

  return (
    <div id="services" className="relative bg-dark py-16 sm:py-20 lg:py-24 overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Shield className="w-4 h-4 text-primary-light" />
            <span className="text-sm font-medium text-primary-light">What We Offer</span>
          </div>

          <h2 
            className={`font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            OUR SOLUTIONS
          </h2>
          <div className={`relative w-32 h-1 mx-auto mb-8 rounded-full overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer" />
          </div>

          <p className={`text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We offer comprehensive cybersecurity solutions powered by advanced AI and delivered by industry experts.
          </p>
        </div>

        {/* First Section Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {firstSectionServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              route={service.route}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Solutions Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutionsServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              route={service.route}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-ping { animation: ping 1s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>
    </div>
  );
};

export default ServicesSection;