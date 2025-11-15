import React, { useEffect, useRef, useState } from 'react';
import { FaCrosshairs, FaEye, FaGem, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Shield, Sparkles } from 'lucide-react';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHeroVisible(true);
    }, observerOptions);

    const missionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setMissionVisible(true);
    }, observerOptions);

    const teamObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTeamVisible(true);
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (teamRef.current) teamObserver.observe(teamRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (missionRef.current) missionObserver.unobserve(missionRef.current);
      if (teamRef.current) teamObserver.unobserve(teamRef.current);
    };
  }, []);

  const cards = [
    {
      icon: <FaCrosshairs className="w-16 h-16 text-primary" />,
      title: "Mission",
      description: "To provide advanced cybersecurity solutions that empower organizations to operate securely in the digital landscape, protecting their most valuable assets through innovative AI-driven technologies and expert guidance.",
      delay: 0
    },
    {
      icon: <FaEye className="w-16 h-16 text-primary" />,
      title: "Vision",
      description: "To be the global leader in cybersecurity innovation, creating a world where organizations can embrace digital transformation with complete confidence in their security posture.",
      delay: 150
    },
    {
      icon: <FaGem className="w-16 h-16 text-primary" />,
      title: "Values",
      description: "Excellence, Innovation, Integrity, and Trust. We believe in delivering superior solutions while maintaining the highest ethical standards and building lasting partnerships with our clients.",
      delay: 300
    }
  ];

  const teamMembers = [
    {
      name: "John Maina",
      role: "CEO & Founder",
      bio: "JM is a cybersecurity specialist with 5+ years of experience in threat intelligence and AI security solutions. Leads our strategic vision and innovation initiatives.",
      image: "/images/jm.jpeg",
      socials: [
        { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
        { icon: <FaTwitter />, url: "#", label: "Twitter" }
      ],
      delay: 0
    },
    {
      name: "Joseph Situma",
      role: "Software Developer",
      bio: "Builds scalable web applications and delivers end-to-end software solutions focused on performance and reliability.",
      image: "/images/sj.jpeg", 
      socials: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/joseph-situma-2876ab391/", label: "LinkedIn" },
        { icon: <FaGithub />, url: "https://github.com/jo-oseeph", label: "GitHub" }
      ],
      delay: 150
    },
    {
      name: "JM",
      role: "Head of Threat Intelligence",
      bio: "Certified Ethical Hacker with expertise in advanced persistent threats. Oversees our global threat monitoring and incident response operations.",
      image: null, // Add your image path here
      socials: [
        { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
        { icon: <FaTwitter />, url: "#", label: "Twitter" }
      ],
      delay: 300
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        {/* Animated background with geometric patterns */}
        <div className="absolute inset-0 bg-dark">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge with slide-in animation */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Who We Are</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>

            {/* Main Heading with staggered animation */}
            <h1 
              className={`font-orbitron text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary transition-all duration-700 delay-100 ${
                heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              ABOUT CYBEX
            </h1>

            {/* Decorative line */}
            <div 
              className={`relative w-32 h-1 mx-auto rounded-full overflow-hidden transition-all duration-700 delay-200 ${
                heroVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
            
            {/* Subtitle with fade-in animation */}
            <p 
              className={`text-gray-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-700 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Leading the future of cybersecurity with innovative AI-powered solutions and unparalleled expertise in protecting digital infrastructures worldwide.
            </p>

            {/* Stats or features with staggered slide-in */}
            <div 
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 transition-all duration-700 delay-500 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-dark-light/40 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary font-orbitron">10+</div>
                  <div className="text-gray-400 text-sm mt-1">Years Experience</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-dark-light/40 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary font-orbitron">500+</div>
                  <div className="text-gray-400 text-sm mt-1">Clients Protected</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-dark-light/40 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary font-orbitron">24/7</div>
                  <div className="text-gray-400 text-sm mt-1">Security Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      </section>

      <AboutSection />  

      {/* Mission, Vision, Values Section */}
      <section ref={missionRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Our Foundation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 rounded-2xl p-8 text-center transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                  missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${card.delay}ms`
                }}
              >
                {/* Animated border gradient glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                {/* Icon with bounce animation on hover */}
                <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 relative">
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">{card.icon}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Bottom accent line with expansion animation */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Our Expert Team Section */}
      <section ref={teamRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-25 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Meet The Team</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-4">
              Our Expert Team
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 text-center transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-50'
                }`}
                style={{
                  transitionDelay: `${member.delay}ms`
                }}
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>

                {/* Professional Circular Image Container */}
                <div className="relative mb-6 mx-auto w-32 h-32 sm:w-40 sm:h-40">
                  {/* Animated border ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[3px] animate-spin-slow group-hover:animate-none">
                    <div className="w-full h-full rounded-full bg-dark-light"></div>
                  </div>
                  
                  {/* Image container */}
                  <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-95 transition-transform duration-500">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-light to-dark">
                        <span className="text-5xl font-orbitron font-bold text-primary/50">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Outer glow ring on hover */}
                  <div className="absolute -inset-2 rounded-full border-2 border-primary/0 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500"></div>
                </div>

                {/* Name with gradient on hover */}
                <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-primary text-xs sm:text-sm font-semibold mb-4 group-hover:text-primary-light transition-colors duration-300 uppercase tracking-wider">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-500 transition-colors duration-300">
                  {member.bio}
                </p>

                {/* Social Links with hover effects */}
                <div className="flex justify-center gap-3 mt-6">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      aria-label={social.label}
                      className="relative w-10 h-10 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300 group/social overflow-hidden"
                    >
                      {/* Ripple effect on hover */}
                      <span className="absolute inset-0 bg-primary/20 scale-0 group-hover/social:scale-100 rounded-full transition-transform duration-300"></span>
                      <span className="relative text-lg group-hover/social:scale-110 group-hover/social:rotate-12 transition-all duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;