import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Users, Globe, Clock } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      number: "5K+",
      label: "Protected Organizations",
      icon: Shield,
      delay: 0,
      color: "from-primary to-primary-light"
    },
    {
      number: "20+",
      label: "Countries Served",
      icon: Globe,
      delay: 100,
      color: "from-secondary to-secondary-light"
    },
    {
      number: "99.9%",
      label: "Threat Detection Rate",
      icon: Shield,
      delay: 200,
      color: "from-accent to-accent-light"
    },
    {
      number: "24/7",
      label: "Security Monitoring",
      icon: Clock,
      delay: 300,
      color: "from-primary-light to-secondary"
    }
  ];

  const handleLearnMore = () => {
    console.log('Navigate to about page');
  };

  return (
    <div className="relative bg-dark py-16 sm:py-20 lg:py-24 overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Section badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <Users className="w-4 h-4 text-primary-light" />
              <span className="text-sm font-medium text-primary-light">Who We Are</span>
            </div>

            <h2 
              className={`font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              About Us
            </h2>
            
            <div className="space-y-6">
              <p 
                className={`text-base sm:text-lg leading-relaxed text-gray-300 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <span className="text-primary-light font-semibold">Cybex</span> was founded in 2020 by a team of passionate students and professionals who recognized a growing gap, small businesses were being overlooked in the fight against cyber threats.
              </p>
              
              <p 
                className={`text-base sm:text-lg leading-relaxed text-gray-300 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                We're a <span className="text-secondary-light font-semibold">bold, mission-driven startup</span> focused on empowering SMEs with smart, affordable, and effective cybersecurity solutions designed for real-world challenges.
              </p>
              
              <p 
                className={`text-base sm:text-lg leading-relaxed text-gray-300 transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                As we grow, our commitment remains clear: to give you confidence and peace of mind by making cybersecurity simple, accessible, and reliable.
              </p>
            </div>

            {/* Learn More Button */}
            <div 
              className={`pt-4 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
             <a
  href="/about"
  className="group relative bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 inline-flex items-center gap-3 font-orbitron shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50"
>
  <span className="relative z-10">Learn More</span>
  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
  <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</a>

            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-dark-light/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/60 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${500 + stat.delay}ms`
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-3 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-light transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Number with animation */}
                  <div className="relative mb-3">
                    <span className={`font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} group-hover:scale-110 inline-block transition-transform duration-300`}>
                      {stat.number}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="relative text-gray-400 text-sm sm:text-base font-medium group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl animate-spin-slow-border" style={{
                      background: `conic-gradient(from 0deg, transparent 0%, ${stat.color === 'from-primary to-primary-light' ? '#06b6d4' : stat.color === 'from-secondary to-secondary-light' ? '#2563eb' : '#7c3aed'} 50%, transparent 100%)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      padding: '1px'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
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

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes spin-slow-border {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow-border {
          animation: spin-slow-border 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;