import React from 'react';
import { Shield, Clock, Users, Zap, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      text: "24/7 Support"
    },
    {
      icon: Users,
      text: "Expert Team"
    },
    {
      icon: Zap,
      text: "Instant Setup"
    }
  ];

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-dark-light/90 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-primary to-blue-500 rounded-3xl blur-sm opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-primary to-blue-500 rounded-3xl"></div>
          
          {/* Main Card Content */}
          <div className="relative bg-dark backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 border border-primary">
            {/* Top Gradient Border */}
            <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 via-primary to-blue-500 rounded-t-3xl"></div>
            
            {/* Shield Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-6">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6 tracking-wide">
                SECURE YOUR DIGITAL FUTURE
              </h2>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl text-white font-orbitron mb-4">
                Don't Wait for a Breach to Happen
              </h3>
              
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                Every second your systems remain unprotected, cybercriminals are plotting their next attack. Our AI-powered cybersecurity solutions provide real-time threat detection and instant response to keep your business safe.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                {/* Warning Alert */}
                <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-red-400 rounded-full px-6 py-3 flex items-center space-x-2 backdrop-blur-sm "> 
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-red-300 font-medium text-sm sm:text-base">
                    ⚠ Cyber attacks happen every 39 seconds
                  </span>
                </div>

                {/* Contact Button */}
                <button 
                  onClick={handleContactUs}
                  className="bg-gradient-to-r from-primary to-primary-light text-dark px-8 py-3 rounded-full font-semibold hover:from-primary-light hover:to-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 font-orbitron text-base sm:text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Us Now</span>
                </button>
              </div>

              {/* Feature Icons */}
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-primary">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-gray-300 font-medium font-orbitron text-sm sm:text-base">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;