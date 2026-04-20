import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PortfolioGrid from "./PortfolioGrid";

const OurPreviousWork = () => (
  <section
    id="previous-work"
    className="relative bg-dark py-16 sm:py-20 lg:py-24 overflow-hidden"
  >
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
    <div className="absolute right-0 top-12 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="absolute left-0 bottom-10 w-60 h-60 rounded-full bg-secondary/10 blur-3xl" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-sm uppercase tracking-[0.36em] text-primary font-orbitron mb-3">
          Featured work
        </p>
        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary leading-tight">
          Our Previous Work
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
         Here are some of our recent projects that showcase our expertise in delivering high-quality web solutions. 
        </p>
      </div>

      <PortfolioGrid featuredOnly />

      <div className="flex justify-center mt-10">
        <Link
          to="/portfolio"
          className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition duration-300 hover:bg-cyan-500/20 hover:text-primary-light"
        >
          View more
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

export default OurPreviousWork;
