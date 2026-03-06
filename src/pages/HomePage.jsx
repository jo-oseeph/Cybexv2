import CyberHero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
import MissionVision from '../components/MissionVision';  
// import CTA from '../components/CTASection';

const HomePage = () => {
  return (
     <div className="pt-16">   {/* ← add this */}
      <CyberHero />
      <ServicesSection />
      <AboutSection /> 
      <MissionVision/>  
      <WhyChooseUs /> 
      {/* <CTA /> */}
    </div>
  );
};

export default HomePage;
