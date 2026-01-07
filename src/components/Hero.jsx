import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: '/images/slide1.jpeg',
      tagline: 'Secure Your Digital Future',
      description: 'Advanced threat detection and real-time protection for your organization with AI-powered security solutions.',
      cta: 'Get Started'
    },
    {
      id: 2,
      image: 'images/slid1.jpeg',
      tagline: 'Enterprise-Grade Protection',
      description: 'Comprehensive cybersecurity infrastructure designed to safeguard your business from evolving digital threats.',
      cta: 'Learn More'
    },
    {
      id: 3,
      image: '/images/slide3.jpeg',
      tagline: '24/7 Security Monitoring',
      description: 'Round-the-clock threat surveillance and instant response protocols to keep your systems protected at all times.',
      cta: 'Contact Us'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with filter */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: 'brightness(0.5) contrast(1.1)',
            }}
          />

          {/* Dark Overlay - Extra strong for guaranteed visibility */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* Content */}
          <div className="absolute inset-0 z-20 h-full flex items-center justify-center">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
              <div className="text-center max-w-4xl mx-auto">
                {/* Tagline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
                  {slide.tagline}
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                  {slide.description}
                </p>

                {/* CTA Button */}
                <Link to="/contact" className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-[30px] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/60 overflow-hidden">
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[30]"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-400/20 blur-lg"></div>
                  
                  {/* Content */}
                  <span className="relative z-10 text-base sm:text-lg">{slide.cta}</span>
                  <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3 sm:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 sm:w-16 h-2 sm:h-2.5 bg-cyan-500'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          className="h-full bg-cyan-500 transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default HeroSlider;