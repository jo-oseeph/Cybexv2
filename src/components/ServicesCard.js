import React from 'react';


const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText = "Learn More",
  onClick,
  gradient = "from-primary to-secondary"
}) => {
  return (
    <div className="relative bg-dark border border-primary rounded-2xl p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:transform hover:scale-[1.02] group">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 via-primary to-blue-500 rounded-t-2xl"></div>
      
      {/* Icon */}
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-black drop-shadow-md" />
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
  className="border-2 border-primary text-primary bg-transparent px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-lg"
>
 Learn More
</button>

    </div>
  );
};

export default ServiceCard;