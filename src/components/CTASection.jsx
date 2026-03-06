import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="relative bg-dark py-14 sm:py-16 overflow-hidden">

    {/* Blob top-left accent */}
    <div
      className="absolute -top-16 -left-16 w-64 h-64 rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />

    {/* Blob bottom-right accent */}
    <div
      className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />

    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

        {/* Headline */}
        <h2
          className="font-orbitron font-bold text-white leading-tight"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            animation: 'fadeInLeft 0.6s ease forwards',
            opacity: 0,
          }}
        >
          Let's bring your{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(90deg, #06b6d4, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            vision to life.
          </span>
        </h2>

        {/* CTA Button */}
        <div
          style={{ animation: 'fadeInRight 0.6s ease forwards', animationDelay: '0.15s', opacity: 0 }}
          className="flex-shrink-0"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-primary text-primary-light bg-primary/10 hover:bg-primary/25 hover:shadow-[0_0_24px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            <span>Consult Us Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </div>

    {/* Top + bottom hairlines */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

    <style>{`
      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-24px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInRight {
        from { opacity: 0; transform: translateX(24px); }
        to   { opacity: 1; transform: translateX(0); }
      }
    `}</style>
  </section>
);

export default CTA;