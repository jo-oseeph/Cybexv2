import React from "react";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import ApproachSection from "../components/ApproachSection";
import MissionVision from "../components/MissionVision";
import TeamSection from "../components/TeamSection";
import CTA from "../components/CTASection";
import {
  useSEO,
  generateSchemaMarkup,
  useInsertSchemaMarkup,
} from "../utils/SEO";

const AboutPage = () => {
  useSEO({
    title: "About Cybex Tech - Website Design & Development Experts Kenya",
    description:
      "Learn about Cybex Tech's mission, vision, and team. We provide professional website design, development, and digital solutions for businesses in Kenya since 2024.",
    keywords:
      "about cybex tech, web design company Kenya, website development services, digital agency Nairobi, web development team",
    ogUrl: "https://cybextech.co.ke/about",
  });

  const schema = generateSchemaMarkup("Organization", {
    name: "Cybex Tech",
    url: "https://cybextech.co.ke/about",
    logo: "https://cybextech.co.ke/cybex.png",
    description:
      "Professional website design, development, management, and security services for businesses in Kenya",
  });

  useInsertSchemaMarkup(schema);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ height: "calc(100vh - 64px)", maxHeight: "420px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80')`,
            filter: "brightness(0.5) contrast(1.1)",
          }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(5, 15, 35, 0.80) 0%, rgba(10, 25, 55, 0.65) 50%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        />

        {/* Centered Title */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <motion.h1
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            ABOUT CYBEX
          </motion.h1>
        </div>
      </section>

      <AboutSection />
      <ApproachSection />
      <MissionVision />
      <TeamSection />
      <CTA />
    </div>
  );
};

export default AboutPage;