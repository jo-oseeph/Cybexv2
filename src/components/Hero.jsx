import React, { useEffect, useState } from 'react';
import { Shield, ArrowRight, Lock, Zap } from 'lucide-react';

const CyberHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark-lighter"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Gradient spotlight following mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-4xl w-full">
          {/* Centered content */}
          <div className="space-y-8 text-left lg:text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 backdrop-blur-sm border border-primary/30 animate-fade-in">
              <Zap className="h-4 w-4 text-primary-light" />
              <span className="text-sm font-medium text-primary-light">Enterprise Security Solutions</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl animate-slide-up font-orbitron">
              Secure Your
              <span className="block bg-gradient-to-r from-primary-light via-secondary to-accent bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 lg:text-xl animate-slide-up-delay leading-relaxed max-w-3xl lg:mx-auto">
              Advanced threat detection and real-time protection for your organization. 
              Stay ahead of cyber threats with AI-powered security solutions that adapt 
              to evolving risks.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 animate-slide-up-delay-2 lg:justify-center">
              <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:shadow-primary/60 hover:scale-105">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark to-secondary-dark opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              
              <button className="group inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-dark-light/50 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-dark-light/80 hover:scale-105">
                <Shield className="h-5 w-5 text-primary-light" />
                <span>View Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-delay max-w-2xl lg:mx-auto">
              <div className="space-y-1 transform transition-all duration-500 hover:scale-110">
                <div className="text-3xl font-bold text-white font-orbitron">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="space-y-1 transform transition-all duration-500 hover:scale-110" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-white font-orbitron">24/7</div>
                <div className="text-sm text-gray-400">Monitoring</div>
              </div>
              <div className="space-y-1 transform transition-all duration-500 hover:scale-110" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-white font-orbitron">500K+</div>
                <div className="text-sm text-gray-400">Protected</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin 15s linear infinite reverse;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CyberHero;