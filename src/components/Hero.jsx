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
      tagline: 'Reliable Websites. Managed for You',
      description: 'We design, build, and fully manage professional websites so you can focus on growing your business.',
      cta: 'Get Started'
    },
    {
      id: 2,
      image: 'images/slid1.jpeg',
      tagline: 'Turn Your Website Into a Growth Engine',
      description: 'We create fast, conversion-focused websites designed to attract customers, and scale with your business.',
      cta: 'Learn More'
    },
    {
      id: 3,
      image: '/images/slide3.jpeg',
      tagline: 'Build Once. Stay Supported Always.',
      description: 'No disappearing developers. No technical headaches. We provide continuous support, updates, and optimization as your business evolves.',
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

  const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % slides.length); setIsAutoPlaying(false); };
  const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); setIsAutoPlaying(false); };
  const goToSlide = (index) => { setCurrentSlide(index); setIsAutoPlaying(false); };

  return (
    <>
      <style>{`
        .hero-section {
          height: calc(100vh - 64px);
          max-height: 520px;
        }
        @media (min-width: 640px) {
          .hero-section {
            max-height: 680px;
          }
        }
        @media (min-width: 1024px) {
          .hero-section {
            height: calc(100vh - 64px);
            max-height: none;
          }
        }
      `}</style>

      <div className="hero-section relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})`, filter: 'brightness(0.65) contrast(1.05)' }}
            />
            <div
              className="absolute inset-0 z-10"
              style={{ background: 'linear-gradient(135deg, rgba(5, 15, 35, 0.72) 0%, rgba(10, 25, 55, 0.55) 50%, rgba(0, 0, 0, 0.38) 100%)' }}
            />
            <div className="absolute inset-0 z-20 h-full flex items-center justify-center">
              <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
                <div className="text-center max-w-4xl mx-auto">
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight"
                    style={{ letterSpacing: '-0.01em', textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
                  >
                    {slide.tagline}
                  </h1>
                  <div className="mx-auto mb-4 sm:mb-6 w-16 h-px bg-cyan-400 opacity-70" />
                  <p
                    className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-7 sm:mb-9 leading-relaxed max-w-2xl mx-auto font-medium"
                    style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
                  >
                    {slide.description}
                  </p>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg font-semibold transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/60 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-400/20 blur-lg" />
                    <span className="relative z-10 text-sm sm:text-base tracking-wide">{slide.cta}</span>
                    <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2.5 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/10" aria-label="Previous slide">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2.5 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/10" aria-label="Next slide">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3 sm:gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-10 sm:w-12 h-1.5 bg-cyan-400' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-30">
          <div className="h-full bg-cyan-400 transition-all duration-300" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
        </div>
      </div>
    </>
  );
};

export default HeroSlider;