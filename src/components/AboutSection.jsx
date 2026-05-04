import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative bg-dark py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — below text on mobile (order-last), left on desktop (lg:order-first) */}
          <motion.div
            className="relative order-last lg:order-first"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
                alt="Web development workspace"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 via-transparent to-primary/10" />
            </div>
          </motion.div>

          {/* Content — always first on mobile, right on desktop */}
          <motion.div
            className="space-y-8 pt-6 lg:pt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-4 leading-snug">
                About Us
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Cybex is a Kenya-based digital solutions business focused on
                building and managing reliable websites for small and
                medium-sized enterprises.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3">
                We help businesses establish a strong online presence and keep
                it running smoothly through structured, ongoing website
                management services.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-1">
                We design professional, responsive websites and provide fully
                managed website services including hosting management, domain
                renewals, updates, performance optimization, and ongoing technical
                support.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2"
            >
              <a
                href="/about"
                className="group relative inline-flex items-center gap-3 bg-transparent border border-primary text-white px-8 py-4 rounded-lg font-semibold font-orbitron text-sm transition-all duration-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Learn More</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;