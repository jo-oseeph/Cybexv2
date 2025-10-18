import React from 'react';

const RealTimeThreatMonitoringPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex flex-col justify-center items-center px-4 py-20">
    <section className="w-full max-w-5xl mx-auto text-center">
      {/* Premium Badge */}
      <div className="inline-block mb-8 animate-fade-in">
        <span className="px-6 py-2 rounded-full border-2 border-primary text-primary font-orbitron text-sm font-bold uppercase tracking-wider">
          Premium Security Service
        </span>
      </div>
      
      {/* Main Heading */}
      <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-bold text-primary mb-8 animate-fade-in" style={{animationDelay: '100ms'}}>
        Real-Time Threat<br />Monitoring
      </h1>
      
      {/* Description */}
      <p className="text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto mb-10 animate-fade-in" style={{animationDelay: '200ms'}}>
        See threats as they happen. Our Real-Time Threat Monitoring service alerts you instantly to suspicious activity across your website or network, so you can respond before small issues become serious breaches.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '300ms'}}>
        <button className="px-8 py-4 rounded-full font-orbitron font-bold text-lg bg-gradient-to-r from-primary to-secondary text-dark shadow-lg hover:from-primary-light hover:to-secondary-light transition-all duration-300 transform hover:scale-105">
          Get Started Today
        </button>
        <button className="px-8 py-4 rounded-full font-orbitron font-bold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-dark transition-all duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>

    {/* Service Overview Section */}
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-8 text-center animate-fade-in">
        Service Overview
      </h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 text-center animate-fade-in">
        For many organizations, basic visibility is the first step to real cybersecurity. This service gives you the tools and alerts needed to monitor your critical assets in real time without the complexity or cost of full threat intelligence systems.
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <h3 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-6 text-left">Early Warning Saves Time and Money</h3>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-2">
            For many organizations, basic visibility is the first step to real cybersecurity. This service gives you the tools and alerts needed to monitor your critical assets in real time, without the complexity or cost of full threat intelligence systems.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden w-full max-w-md bg-dark/40 flex justify-center">
            <img src="/images/real-time-threat-monitoring.jpg" alt="Real-Time Threat Monitoring" className="object-cover object-center w-4/5 sm:w-full h-72 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default RealTimeThreatMonitoringPage;
