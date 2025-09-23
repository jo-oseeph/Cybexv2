import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "YOUR NEW",
      highlight: "CYBERSECURITY",
      subtitle: "SOLUTIONS",
      description: "Protect your business from cyber attacks, secure customer data, and respond fast with affordable AI-powered tools built for small teams.",
      cta: "Book A Free Consultation",
      bgImage: "/images/slide1.webp", // Local image path
      bgClass: "bg-gradient-to-br from-dark/80 via-secondary-dark/80 to-dark/80"
    },
    {
      title: "ADVANCED THREAT",
      highlight: "DETECTION",
      subtitle: "& RESPONSE",
      description: "Stay ahead of cyber threats with our cutting-edge AI monitoring systems that detect and neutralize attacks before they impact your business.",
      cta: "Learn More",
      bgImage: "/images/slide2.jpg", // Network/Server room image
      bgClass: "bg-gradient-to-br from-dark/80 via-accent-dark/80 to-dark/80"
    },
    {
      title: "SECURE YOUR",
      highlight: "DIGITAL",
      subtitle: "FUTURE",
      description: "Comprehensive security audits and consulting services to ensure your business stays protected in an ever-evolving threat landscape.",
      cta: "Get Started",
      bgImage: "/images/slide3.jpg", // Digital security/Lock image
      bgClass: "bg-gradient-to-br from-dark/80 via-primary-dark/80 to-dark/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden bg-dark">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              index === currentSlide 
                ? 'translate-x-0 opacity-100 z-20' 
                : index < currentSlide 
                  ? '-translate-x-full opacity-0 z-10' 
                  : 'translate-x-full opacity-0 z-10'
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 ${slide.bgClass}`} />
            
            {/* Content */}
            <div className="relative z-30 flex items-center justify-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    {slide.title}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {slide.highlight}
                    </span>{' '}
                    {slide.subtitle}
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                  
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary/80 hover:to-secondary/80 transition-all transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg backdrop-blur-sm">
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/50 rounded-full animate-pulse backdrop-blur-sm" />
            <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-secondary/50 rounded-full animate-pulse delay-1000 backdrop-blur-sm" />
            <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-primary/30 rounded-full animate-pulse delay-2000 backdrop-blur-sm" />
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125 shadow-md' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-40">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-5000 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: currentSlide === 0 ? 'width 5000ms ease-linear' : 'width 5000ms ease-linear'
          }}
        />
      </div>
    </div>
  );
};

export default Hero;