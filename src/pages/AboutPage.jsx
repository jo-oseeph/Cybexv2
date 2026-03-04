import React, { useEffect, useRef, useState } from 'react';
import {  FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Shield,  } from 'lucide-react';
import AboutSection from '../components/AboutSection';
import ApproachSection from '../components/ApproachSection';
import MissionVision from '../components/MissionVision'

const AboutPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  
  const heroRef = useRef(null);
  
  const teamRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHeroVisible(true);
    }, observerOptions);

  

    const teamObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTeamVisible(true);
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
   
    if (teamRef.current) teamObserver.observe(teamRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (teamRef.current) teamObserver.unobserve(teamRef.current);
    };
  }, []);

 

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
<section
  ref={heroRef}
  className="relative overflow-hidden"
  style={{ height: 'calc(100vh - 64px)', maxHeight: '420px' }}
>
  {/* Background Image — desk setup */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80')`,
      filter: 'brightness(0.4) contrast(1.1)',
    }}
  />

  {/* Dark overlay */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, rgba(5, 15, 35, 0.80) 0%, rgba(10, 25, 55, 0.65) 50%, rgba(0, 0, 0, 0.50) 100%)',
    }}
  />

  {/* Centered Title */}
  <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
    <h1
      className={`font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-100 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ textShadow: '0 2px 24px rgba(0,0,0,0.4)', letterSpacing: '-0.01em' }}
    >
      ABOUT CYBEX
    </h1>
  </div>
</section>

      <AboutSection />  
      <ApproachSection />
      <MissionVision />

     

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
              {/* <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div> */}
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