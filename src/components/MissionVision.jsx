

const MissionVision = () => {
  const cards = [
    {
      label: 'Our Vision',
      body: (
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          To grow into a trusted digital infrastructure and security partner for businesses across Kenya.
        </p>
      ),
    },
    {
      label: 'Our Mission',
      body: (
        <ul className="space-y-3 text-left">
          {[
            'To help businesses build a strong and professional online presence.',
            'To provide reliable website development and management services.',
            'To deliver practical and affordable digital solutions that support business growth.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-400 text-sm sm:text-base leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="relative bg-dark py-8 sm:py-12 lg:py-16 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-4 leading-snug">
            Our Foundation
          </h2>
          <div className="w-16 h-px bg-cyan-400 opacity-60 mx-auto" />
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-dark-light/40 border border-primary/20 rounded-2xl p-8 hover:scale-[1.02]"
            >
              {/* Label */}
              <div className="mb-5">
                <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white mb-3">
                  {card.label}
                </h3>
                <div className="w-8 h-px bg-cyan-400 opacity-50" />
              </div>

              {/* Content */}
              {card.body}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionVision;