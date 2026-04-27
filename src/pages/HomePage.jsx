import CyberHero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import OurPreviousWork from "../components/OurPreviousWork";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";
import CTA from "../components/CTASection";
import TestimonialsSection from "../components/TestimonialsSection";
import {
  useSEO,
  generateSchemaMarkup,
  useInsertSchemaMarkup,
} from "../utils/SEO";

const HomePage = () => {
  useSEO({
    title:
      "Cybex Tech - Professional Website Design & Development Services Kenya",
    description:
      "Professional website design, development, management, and security services for businesses in Kenya. Build a strong online presence with Cybex Tech's reliable digital solutions.",
    keywords:
      "web design Kenya, website development, website design services, web development Nairobi, digital solutions, professional website design",
    ogUrl: "https://cybextech.co.ke/",
  });

  const schema = generateSchemaMarkup("Organization", {
    name: "Cybex Tech",
    url: "https://cybextech.co.ke/",
    logo: "https://cybextech.co.ke/cybex.png",
    description:
      "Professional website design, development, management, and security services for businesses",
  });

  useInsertSchemaMarkup(schema);

  return (
    <div className="pt-16">
      <CyberHero />
      <ServicesSection />
      <OurPreviousWork />
      <AboutSection />
      <MissionVision />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTA />
    </div>
  );
};

export default HomePage;
