import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="relative bg-dark py-20 sm:py-24 overflow-hidden">

    {/* Top border glow */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

    {/* Diagonal cyan wash */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, rgba(6,182,212,0.07) 0%, transparent 55%, rgba(6,182,212,0.04) 100%)',
      }}
    />

    {/* Grid texture */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(6,182,212,1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,1)_1px,transparent_1px)] bg-[size:60px_60px]" />

    {/* Glow orbs */}
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      {/* Eyebrow */}
      <div
        className="inline-flex items-center gap-2 mb-8"
        style={{ animation: 'fadeInUp 0.5s ease forwards', opacity: 0 }}
      >
        <div className="h-px w-8 bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
          Get Started Today
        </span>
        <div className="h-px w-8 bg-primary" />
      </div>

      {/* Headline */}
      <h2
        className="font-orbitron font-bold text-white leading-tight mb-6"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          animation: 'fadeInUp 0.55s ease forwards',
          animationDelay: '0.1s',
          opacity: 0,
        }}
      >
        Your Website Should Be{' '}
        <span
          style={{
            backgroundImage: 'linear-gradient(90deg, #06b6d4, #67e8f9, #06b6d4)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmerText 3s linear infinite',
          }}
        >
          Working For You.
        </span>
      </h2>

      {/* Subtext */}
      <p
        className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        style={{ animation: 'fadeInUp 0.55s ease forwards', animationDelay: '0.2s', opacity: 0 }}
      >
        Stop losing customers to a slow, outdated, or non-existent website.
        Let's build something you're proud of — fast.
      </p>

      {/* Buttons */}
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        style={{ animation: 'fadeInUp 0.55s ease forwards', animationDelay: '0.3s', opacity: 0 }}
      >
        {/* Primary filled */}
        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-dark overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          style={{ background: 'linear-gradient(90deg, #06b6d4, #67e8f9)' }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>Let's Talk</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

        {/* Secondary outline */}
        <Link
          to="/services"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-primary/40 text-primary-light bg-transparent hover:border-primary hover:bg-primary/10 transition-all duration-300"
        >
          <span>View Our Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Trust strip */}
      <div
        className="flex flex-wrap items-center justify-center gap-8 sm:gap-14"
        style={{ animation: 'fadeInUp 0.55s ease forwards', animationDelay: '0.4s', opacity: 0 }}
      >
        {[
          { value: '100%', label: 'Responsive Design' },
          { value: '24/7', label: 'Ongoing Support' },
          { value: '∞', label: 'Dedication' },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="font-orbitron text-2xl font-bold text-primary-light">{value}</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>

    </div>

    {/* Bottom border glow */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes shimmerText {
        0%   { background-position: 0% center; }
        100% { background-position: 200% center; }
      }
    `}</style>
  </section>
);

export default CTA;