import React from 'react';
import { FaPhone } from 'react-icons/fa';

const DeviceEndpointProtectionPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-dark via-primary/30 to-dark flex flex-col justify-center items-center px-4 py-20">
    <section className="w-full max-w-4xl mx-auto text-center">
      <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 animate-fade-in">
        DEVICE & ENDPOINT<br />PROTECTION
      </h1>
      <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{animationDelay: '100ms'}}>
        Your frontline devices are your biggest risk surface. We secure every laptop, desktop, and mobile device with robust endpoint protection, encryption, patching, and backup systems so your business stays protected, productive, and resilient.
      </p>
      <a
        href="tel:+254717378158"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-orbitron font-bold text-lg bg-gradient-to-r from-primary to-secondary text-dark shadow-lg hover:from-primary-light hover:to-secondary-light transition-all duration-300 transform hover:scale-105 animate-fade-in"
        style={{animationDelay: '200ms'}}
      >
        <FaPhone className="w-6 h-6" /> Emergency Call
      </a>
    </section>

    {/* Comprehensive Endpoint Defence Section */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
      {/* Left: Text */}
      <div className="flex-1">
        <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-8 text-left">
          Comprehensive Endpoint<br />Defence
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl">
          Endpoints are the entry point for most modern attacks. From ransomware to phishing payloads, attackers exploit poorly secured user devices to get into your network.
        </p>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
          Our Device & Endpoint Protection service locks down every device — ensuring your employees can work securely, even in remote or hybrid environments.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden w-full max-w-md bg-dark/40 flex justify-center">
          <img src="/images/website-security-audit.jpg" alt="Endpoint Defence" className="object-cover object-center w-4/5 sm:w-full h-72 mx-auto" />
        </div>
      </div>
    </section>

    {/* Service Features Section */}
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-12 text-center animate-fade-in">
        Service Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Next-Gen Antivirus & Malware Protection */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary text-3xl animate-bounce-slow">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><circle cx='12' cy='12' r='8' stroke='currentColor' strokeWidth='2' fill='none'/><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3'/></svg>
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">Next-Gen Antivirus & Malware Protection</h3>
          <p className="text-gray-300 mb-6 text-center">We deploy lightweight, AI-powered antivirus tools that detect known and emerging threats in real-time.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>Signature-based and behavioral detection</li>
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>File reputation analysis</li>
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>Behavioral anomaly detection</li>
          </ul>
        </div>
        {/* Full Disk Encryption & Access Control */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary text-3xl animate-bounce-slow">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2'/><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 11V7a4 4 0 118 0v4'/></svg>
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">Full Disk Encryption & Access Control</h3>
          <p className="text-gray-300 mb-6 text-center">Keep sensitive data secure, even if a device is stolen or lost.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>Secure login and multi-factor authentication</li>
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>BIOS/UEFI security hardening</li>
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>AES 256-bit full disk encryption</li>
          </ul>
        </div>
        {/* Automated Patching & Backup */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary text-3xl animate-bounce-slow">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3'/><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 12l4 4m0 0l-4 4m4-4H8'/></svg>
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">Automated Patching & Backup</h3>
          <p className="text-gray-300 mb-6 text-center">Ensure every device stays updated — and never lose important files to human error or attack.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>OS and app patch automation</li>
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>Vulnerability remediation tracking</li>
            <li className="flex items-center text-primary"><span className="mr-2">✓</span>Encrypted cloud and local backup</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default DeviceEndpointProtectionPage;
