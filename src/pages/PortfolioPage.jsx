import PortfolioGrid from "../components/PortfolioGrid";

const PortfolioPage = () => (
  <div className="pt-16">
    <section className="relative bg-dark py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-16 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute left-0 bottom-16 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-[0.36em] text-primary font-orbitron mb-4">
            Portfolio Showcase
          </p>
          <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary leading-tight">
            Full Work Portfolio
          </h1>
          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            Explore every project we’ve delivered with polished interactions,
            bright cyan accents, and a consistent modern design system. This
            page is built to highlight your complete body of work in one clean,
            responsive experience.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-dark py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGrid />
      </div>
    </section>
  </div>
);

export default PortfolioPage;
