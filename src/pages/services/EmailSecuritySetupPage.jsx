import React from 'react';
import { FaClock, FaSearch, FaShieldAlt, FaEye, FaCrosshairs, FaServer } from 'react-icons/fa';
import { FaDollarSign, FaUsers, FaChartLine } from 'react-icons/fa';

const EmailSecuritySetupPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark">
    <section className="w-full max-w-6xl mx-auto text-center px-4 py-20">
      {/* Main Heading */}
      <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 animate-fade-in leading-tight">
        PROTECT YOUR BRAND. SECURE YOUR<br />INBOX.
      </h1>
      
      {/* Description */}
      <p className="text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto mb-16 animate-fade-in" style={{animationDelay: '100ms'}}>
        We configure advanced email security protocols that stop phishing, spoofing, and impersonation attacks before they reach your inbox—or your customers'.
      </p>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '200ms'}}>
        {/* 24/7 Monitoring */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <FaClock className="w-12 h-12 text-accent" />
          </div>
          <h3 className="font-orbitron text-xl font-bold text-white">24/7 Monitoring</h3>
        </div>
        
        {/* Threat Hunting */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <FaSearch className="w-12 h-12 text-accent" />
          </div>
          <h3 className="font-orbitron text-xl font-bold text-white">Threat Hunting</h3>
        </div>
        
        {/* Proactive Protection */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <FaShieldAlt className="w-12 h-12 text-accent" />
          </div>
          <h3 className="font-orbitron text-xl font-bold text-white">Proactive Protection</h3>
        </div>
      </div>
    </section>

    {/* Why Email Security Matters Section */}
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-primary mb-12 text-center animate-fade-in">
        Why Email Security Matters
      </h2>
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left: Text */}
        <div className="flex-1 space-y-6">
          <p className="text-gray-300 text-base sm:text-lg">
            Email is still the #1 vector for cyberattacks, including phishing, spoofing, and malware delivery. Without proper email authentication, your domain can be exploited to impersonate your brand—damaging your reputation and putting clients at risk.
          </p>
          <p className="text-gray-300 text-base sm:text-lg">
            Our Email Security Setup service configures essential protocols like SPF, DKIM, and DMARC to help prevent fraudulent emails from being sent on your behalf. We make email security simple, effective, and fully compliant.
          </p>
        </div>
        {/* Right: Image Card */}
        <div className="flex-1 flex flex-col items-center">
          <div className="rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden w-full max-w-md bg-dark/40">
            <img src="/images/email-security.jpg" alt="SOC Operations Center Dashboard" className="object-cover object-center w-full h-72" />
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">SOC Operations Center Dashboard</p>
        </div>
      </div>
    </section>

    {/* Key Benefits Section */}
    <section className="w-full bg-[#0a101f] py-16 px-2 md:px-8 flex flex-col items-center animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center font-['Orbitron']">Key Benefits</h2>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cost Efficiency */}
        <div className="bg-[#11182b] border border-cyan-700 rounded-xl flex flex-col items-center p-8 shadow-lg transition-transform duration-300 hover:scale-105">
          <FaDollarSign className="text-fuchsia-500 text-5xl mb-6 animate-bounce-slow" />
          <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron'] text-center">Cost Efficiency</h3>
          <p className="text-gray-300 text-center text-base">
            Reduce security costs by up to 60% compared to building an in-house SOC team while gaining access to enterprise-grade security capabilities.
          </p>
        </div>
        {/* Expert Team */}
        <div className="bg-[#11182b] border border-cyan-700 rounded-xl flex flex-col items-center p-8 shadow-lg transition-transform duration-300 hover:scale-105">
          <FaUsers className="text-fuchsia-500 text-5xl mb-6 animate-bounce-slow" />
          <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron'] text-center">Expert Team</h3>
          <p className="text-gray-300 text-center text-base">
            Access to certified security professionals with diverse expertise across multiple domains of cybersecurity and threat management.
          </p>
        </div>
        {/* Scalability */}
        <div className="bg-[#11182b] border border-cyan-700 rounded-xl flex flex-col items-center p-8 shadow-lg transition-transform duration-300 hover:scale-105">
          <FaChartLine className="text-fuchsia-500 text-5xl mb-6 animate-bounce-slow" />
          <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron'] text-center">Scalability</h3>
          <p className="text-gray-300 text-center text-base">
            Easily scale security operations up or down based on your business needs without the complexity of hiring and training staff.
          </p>
        </div>
      </div>
    </section>

    {/* What We Set Up Section */}
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-primary mb-12 text-center animate-fade-in">
        What We Set Up
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* SPF (Sender Policy Framework) */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in hover:border-primary/50 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary animate-bounce-slow">
              <FaEye className="w-8 h-8" />
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">SPF (Sender Policy Framework)</h3>
          <p className="text-gray-300 mb-6 text-center">Defines which servers are allowed to send email from your domain.</p>
          <ul className="space-y-2">
            <li className="flex items-start text-primary"><span className="mr-2 mt-1">✓</span><span className="text-gray-300">Prevents spoofing and unauthorized senders</span></li>
            <li className="flex items-start text-primary"><span className="mr-2 mt-1">✓</span><span className="text-gray-300">Protects users from fake "you" emails</span></li>
          </ul>
        </div>

        {/* DKIM (DomainKeys Identified Mail) */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in hover:border-primary/50 transition-all duration-300" style={{animationDelay: '100ms'}}>
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary animate-bounce-slow">
              <FaCrosshairs className="w-8 h-8" />
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">DKIM (DomainKeys Identified Mail)</h3>
          <p className="text-gray-300 mb-6 text-center">Adds a digital signature to your emails to verify authenticity.</p>
          <ul className="space-y-2">
            <li className="flex items-start text-primary"><span className="mr-2 mt-1">✓</span><span className="text-gray-300">Builds trust with mail providers like Gmail and Outlook</span></li>
            <li className="flex items-start text-primary"><span className="mr-2 mt-1">✓</span><span className="text-gray-300">Ensures the email content wasn't tampered with</span></li>
          </ul>
        </div>

        {/* DMARC */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in hover:border-primary/50 transition-all duration-300" style={{animationDelay: '200ms'}}>
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary animate-bounce-slow">
              <FaServer className="w-8 h-8" />
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">DMARC (Domain-based Message Authentication, Reporting & Conformance)</h3>
          <p className="text-gray-300 mb-6 text-center">Provides policies to tell receiving servers how to handle unauthenticated emails — plus visibility</p>
        </div>
      </div>
    </section>
  </div>
);

export default EmailSecuritySetupPage;
