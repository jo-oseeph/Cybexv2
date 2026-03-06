import CyberHero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
// import CTA from '../components/CTASection';

const HomePage = () => {
  return (
     <div className="pt-16">   {/* ← add this */}
      <CyberHero />
      <ServicesSection />
      <AboutSection /> 
      <WhyChooseUs /> 
      {/* <CTA /> */}
    </div>
  );
};

export default HomePage;
