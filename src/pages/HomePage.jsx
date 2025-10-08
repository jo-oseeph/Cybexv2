import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
