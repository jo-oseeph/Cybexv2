import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './HHero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "YOUR NEW",
      highlight: "CYBERSECURITY",
      subtitle: "SOLUTIONS",
      description: "Protect your business from cyber attacks, secure customer data, and respond fast with affordable AI-powered tools built for small teams.",
      cta: "Book A Free Consultation",
      bgImage: "/images/slide4.webp"
    },
    {
      title: "ADVANCED THREAT",
      highlight: "DETECTION",
      subtitle: "& RESPONSE",
      // description: "Stay ahead of cyber threats with our cutting-edge AI monitoring systems that detect and neutralize attacks before they impact your business.",
      cta: "Learn More",
      bgImage: "/images/slide4.webp"
    },
    {
      title: "SECURE YOUR",
      highlight: "DIGITAL",
      subtitle: "FUTURE",
      // description: "Comprehensive security audits and consulting services to ensure your business stays protected in an ever-evolving threat landscape.",
      cta: "Get Started",
      bgImage: "/images/slide4.webp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const getSlideClass = (index) => {
    if (index === currentSlide) return 'hero-slide active';
    if (index === (currentSlide - 1 + slides.length) % slides.length) return 'hero-slide prev';
    return 'hero-slide next';
  };

  return (
    <div className="hero-container">
      {/* Dark Overlay for Better Text Visibility */}
      <div className="hero-overlay" />
      
      {/* Slides Container */}
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={getSlideClass(index)}
            style={{
              backgroundImage: `url(${slide.bgImage})`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="hero-content">
        <div className="hero-content-inner">
          <div className="hero-text-wrapper">
            {/* Title with key for re-animation on slide change */}
            <h1 key={`title-${currentSlide}`} className="hero-title hero-content-fade">
              {slides[currentSlide].title}{' '}
              <span className="hero-highlight">
                {slides[currentSlide].highlight}
              </span>{' '}
              {slides[currentSlide].subtitle}
            </h1>
            
            {/* Description */}
            <p key={`desc-${currentSlide}`} className="hero-description hero-content-fade">
              {slides[currentSlide].description}
            </p>
            
            {/* CTA Button */}
            <button key={`cta-${currentSlide}`} className="hero-cta hero-content-fade">
              <span>{slides[currentSlide].cta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="hero-progress-bar">
        <div 
          key={`progress-${currentSlide}`}
          className="hero-progress-fill"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default Hero;