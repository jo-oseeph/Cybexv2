import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText = "Learn More",
  onClick,
  gradient = "from-primary to-secondary"
}) => {
  return (
    <div className="bg-dark-light/90 backdrop-blur-sm border-2 border-primary/60 rounded-2xl p-6 sm:p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:transform hover:scale-[1.02] group">
      {/* Icon */}
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-md" />
      </div>
      
       {/* Content */}
      <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary-light transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      {/* Button */}
      <button 
        onClick={onClick}
        className="bg-gradient-to-r from-primary to-primary-light text-dark px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:from-primary-light hover:to-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 inline-flex items-center space-x-2 group/btn transform hover:scale-105"
      >
        <span className="font-medium">{buttonText}</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default ServiceCard;