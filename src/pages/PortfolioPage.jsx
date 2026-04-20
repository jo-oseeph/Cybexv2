import PortfolioGrid from "../components/PortfolioGrid";
import AboutPage from "../components/PortfolioAbout";

const PortfolioPage = () => (
  <div className="pt-16">
    <AboutPage />

    <section className="bg-dark py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGrid />
      </div>
    </section>
  </div>
);

export default PortfolioPage;
