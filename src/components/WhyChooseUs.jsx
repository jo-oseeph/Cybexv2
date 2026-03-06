import React from 'react';
import { Zap, HeartHandshake, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    description:
      "We build and launch websites quickly without cutting corners. Your time matters, so we keep things moving while maintaining quality throughout.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    description:
      "We listen before we build. Every decision is guided by your goals, your audience, and your brand — not a one-size-fits-all template.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last & Stay Secure",
    description:
      "We don't just hand you a website and disappear. From security to performance, we make sure your site stays healthy, fast, and protected long-term.",
  },
];

const WhyChooseUs = () => (
  <section className="relative bg-dark py-16 sm:py-20 lg:py-24 overflow-hidden">

    {/* Top border glow */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

    {/* Background glow orbs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header — left on mobile, centered on lg+ */}
      <div
        className="text-left lg:text-center mb-12 lg:mb-16"
        style={{ animation: 'fadeInUp 0.5s ease forwards', opacity: 0 }}
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-6 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
            Why Choose Us
          </span>
        </div>
        <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
          The Partner Your{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(90deg, #06b6d4, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Business Deserves.
          </span>
        </h2>
      </div>

      {/* Cards — horizontal row on md+, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {reasons.map(({ icon: Icon, title, description }, i) => (
          <div
            key={i}
            className="group flex flex-col gap-4 p-6 sm:p-7 rounded-xl border border-primary/20 bg-dark-light/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            style={{
              borderTop: '2px solid rgba(6, 182, 212, 0.5)',
              animation: 'fadeInUp 0.5s ease forwards',
              animationDelay: `${0.15 + i * 0.12}s`,
              opacity: 0,
            }}
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
              <Icon className="w-6 h-6 text-primary-light" strokeWidth={1.5} />
            </div>

            {/* Text — always left aligned */}
            <div className="space-y-2 text-left">
              <h3 className="font-orbitron text-base sm:text-lg font-bold text-primary-light">
                {title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>

    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);

export default WhyChooseUs;