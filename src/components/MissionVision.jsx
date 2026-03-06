import { Target, Eye } from 'lucide-react';

const MissionVision = () => (
  <section className="relative bg-dark overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">

      {/* ── Left: Content ── */}
      <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 bg-dark z-10">

        {/* Subtle background dots */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/60"
              style={{
                top: `${15 + i * 14}%`,
                left: `${8 + (i % 3) * 30}%`,
              }}
            />
          ))}
        </div>

        <div className="relative space-y-10 max-w-lg">

          {/* Our Mission */}
          <div className="flex items-start gap-5">
            {/* Icon box */}
            <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Target className="w-7 h-7 text-primary-light" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                To help businesses build a strong, professional online presence through reliable
                website development, management services, and practical digital solutions that
                support real business growth.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-primary/15 w-full" />

          {/* Our Vision */}
          <div className="flex items-start gap-5">
            {/* Icon box */}
            <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Eye className="w-7 h-7 text-primary-light" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-3">
                Our Vision
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                To grow into a trusted digital infrastructure partner for businesses across Kenya,
                crafting online experiences that resonate, inspire, and leave a lasting impact.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Right: Image ── */}
      <div className="relative min-h-[320px] lg:min-h-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
          alt="Team collaborating"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

    </div>
  </section>
);

export default MissionVision;