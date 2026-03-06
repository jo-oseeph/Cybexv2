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
      "We listen before we build. Every decision is guided by your goals, your audience, and your brand, not a one-size-fits-all template.",
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left: Image ── */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ animation: 'fadeInLeft 0.65s ease forwards', opacity: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            alt="Why choose us"
            className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center"
          />
        </div>

        {/* ── Right: Content ── */}
        <div
          className="space-y-8"
          style={{ animation: 'fadeInRight 0.65s ease forwards', animationDelay: '0.15s', opacity: 0 }}
        >
          {/* Section label */}
          <div>
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

          {/* Reasons list */}
          <ul className="space-y-6">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <li
                key={i}
                className="group flex items-start gap-3 p-3 rounded-xl border border-primary bg-dark-light/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                style={{
                  animation: 'fadeInRight 0.5s ease forwards',
                  animationDelay: `${0.25 + i * 0.12}s`,
                  opacity: 0,
                }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 flex items-center justify-center transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-light" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div className="space-y-1">
                  <h3 className="font-orbitron text-base sm:text-lg font-bold text-primary-light transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>

    <style>{`
      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-28px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInRight {
        from { opacity: 0; transform: translateX(28px); }
        to   { opacity: 1; transform: translateX(0); }
      }
    `}</style>
  </section>
);

export default WhyChooseUs;