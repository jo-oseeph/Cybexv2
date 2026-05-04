import React from "react";
import { motion } from "framer-motion";

const ApproachSection = () => {
  const pillars = [
    {
      number: "01",
      title: "Long-Term Partnership",
      body: "We don't disappear after launch. We stay alongside you, adapting your website as your business grows and evolves.",
    },
    {
      number: "02",
      title: "Always Functional",
      body: "Regular updates, performance checks, and proactive maintenance keep your site running smoothly every single day.",
    },
    {
      number: "03",
      title: "Goal Aligned",
      body: "Your website is a business tool. We keep it aligned with your objectives so it continues to work hard for you.",
    },
  ];

  return (
    <div className="relative bg-dark py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-5 leading-snug">
            Our Approach
          </h2>
          <div className="w-16 h-px bg-cyan-400 opacity-60 mx-auto mb-6" />
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            We believe websites should not be a one-time project. Instead of
            building and walking away, we partner with our clients long-term to
            ensure their websites remain functional, updated, and aligned with
            their business goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="bg-dark-light/40 border border-primary rounded-2xl p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
            >
              <span className="font-orbitron text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary block mb-5 leading-none">
                {pillar.number}
              </span>
              <div className="w-8 h-px bg-cyan-400 opacity-50 mb-5" />
              <h3 className="font-orbitron text-base sm:text-lg font-semibold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;