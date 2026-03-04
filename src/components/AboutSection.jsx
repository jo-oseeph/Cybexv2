import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <div className="relative bg-dark py-16 sm:py-20 lg:py-28 overflow-hidden" ref={sectionRef}>

      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image — below text on mobile (order-last), left on desktop (lg:order-first) */}
          <div
            className={`relative order-last lg:order-first transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
                alt="Web development workspace"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 via-transparent to-primary/10" />
            </div>
          </div>

          {/* Content — always first on mobile, right on desktop */}
          <div className="space-y-8 pt-6 lg:pt-0">
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-4 leading-snug">
                About Cybex
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Cybex is a Kenya-based digital solutions business focused on building and managing reliable websites for small and medium-sized enterprises.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3">
                We help businesses establish a strong online presence and keep it running smoothly through structured, ongoing website management services.
              </p>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We design professional, responsive websites and provide fully managed website services including hosting management, domain renewals, updates, performance optimization, and ongoing technical support.
            </p>

            <div
              className={`pt-2 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold font-orbitron text-sm transition-all duration-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Get In Touch</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;