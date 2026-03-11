import React from "react";

const ServiceDetailPage = ({ hero, overview, included, why }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      <section
        className="relative overflow-hidden"
        style={{ height: "calc(100vh - 64px)", maxHeight: "420px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${hero.image}')`,
            filter: "brightness(0.5) contrast(1.1)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(5, 15, 35, 0.80) 0%, rgba(10, 25, 55, 0.65) 50%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <p className="text-sm tracking-widest text-primary-light mb-2 uppercase">
            {hero.breadcrumb}
          </p>
          <h1
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-100"
            style={{
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              letterSpacing: "-0.01em",
            }}
          >
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-gray-200 text-base sm:text-lg leading-relaxed">
            {hero.tagline}
          </p>
        </div>
      </section>

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {overview.heading}
            </h2>
            <div className="space-y-4 text-gray-300">
              {overview.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
            <img
              src={overview.image}
              alt={overview.heading}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            {included.heading}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {included.items.map((item, index) => (
              <div
                key={index}
                className="relative bg-dark-light/40 backdrop-blur-sm rounded-xl p-6 border border-primary hover:border-primary transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {why.heading}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed mb-8">
            {why.statement}
          </p>
          <ul className="space-y-3 text-gray-300 list-disc list-inside max-w-3xl">
            {why.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ServiceDetailPage;
