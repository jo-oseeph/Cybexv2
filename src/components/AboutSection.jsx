import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const stats = [
    {
      number: "5K+",
      label: "Protected Organizations",
      delay: "0"
    },
    {
      number: "20+",
      label: "Countries Served", 
      delay: "200"
    },
    {
      number: "99.9%",
      label: "Threat Detection Rate",
      delay: "400"
    },
    {
      number: "24/7",
      label: "Security Monitoring",
      delay: "600"
    }
  ];

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="bg-dark py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
              About Us
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-base sm:text-lg leading-relaxed">
                Cybex was founded in 2020 by a team of passionate students and professionals who recognized a growing gap—small businesses were being overlooked in the fight against cyber threats.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                We're a bold, mission-driven startup focused on empowering SMEs with smart, affordable, and effective cybersecurity solutions designed for real-world challenges.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                As we grow, our commitment remains clear: to give you confidence and peace of mind by making cybersecurity simple, accessible, and reliable.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <button 
                onClick={handleLearnMore}
                className="bg-gradient-to-r from-primary to-primary-light text-dark px-8 py-3 rounded-full font-semibold hover:from-primary-light hover:to-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 font-orbitron"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-dark-light/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 group"
                style={{
                  animationDelay: `${stat.delay}ms`
                }}
              >
                <div className="mb-4">
                  <span className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-primary-light group-hover:to-secondary-light transition-all duration-300">
                    {stat.number}
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base font-medium group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;