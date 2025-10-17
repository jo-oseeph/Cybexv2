import React from 'react';

const serviceBenefits = [
  "Early detection of security flaws before they're exploited",
  "Stronger trust with users and customers",
  "Higher uptime and better performance",
  "Improved compliance with security standards",
  "Outdated plugin/theme identification"
];

const WebsiteSecurityAuditPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
    {/* Grid background */}
    <div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(135deg, rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(225deg, rgba(6,182,212,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left: Text */}
      <div className="flex-1">
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6 leading-tight">
          WEBSITE<br />SECURITY AUDIT
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl">
          Comprehensive vulnerability assessment to protect your website from common threats, hidden exploits, and misconfigurations — ensuring your digital presence stays secure, fast, and trusted.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 bg-dark/60 border border-primary/30 rounded-2xl px-8 py-6 text-center">
            <div className="font-orbitron text-3xl sm:text-4xl font-bold text-primary mb-2">48hrs</div>
            <div className="text-gray-400 text-base">Vulnerability Fixe Time</div>
          </div>
          <div className="flex-1 bg-dark/60 border border-primary/30 rounded-2xl px-8 py-6 text-center">
            <div className="font-orbitron text-3xl sm:text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-400 text-base">Security Checks</div>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden max-w-md w-full bg-dark/40">
          <img src="/images/website-security-audit.jpg" alt="Website Security Audit" className="w-full h-80 object-cover object-center" />
        </div>
      </div>
    </section>

    {/* Service Overview Section */}
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col lg:flex-row items-start gap-12 animate-fade-in">
      {/* Left: Overview Text */}
      <div className="flex-1">
        <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-8 animate-slide-in text-center lg:text-left">
          Service Overview
        </h2>
        <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4 animate-fade-in text-center lg:text-left" style={{animationDelay: '100ms'}}>
          Website Security Audit
        </h3>
        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl animate-fade-in text-center lg:text-left mx-auto lg:mx-0" style={{animationDelay: '200ms'}}>
          Complete Web Risk Visibility Our Website Security Audit identifies and addresses the most common yet dangerous — vulnerabilities found in websites today. Whether you’re using WordPress, Joomla, or a custom site, we check every layer of your web stack for weak spots that hackers target.
        </p>
        <ul className="space-y-4">
          {serviceBenefits.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-200 text-base sm:text-lg animate-fade-in" style={{animationDelay: `${300 + idx * 100}ms`}}>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary text-xl shadow-md animate-bounce-slow">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Right: Image Card */}
      <div className="flex-1 flex justify-center items-center animate-fade-in" style={{animationDelay: '400ms'}}>
        <div className="rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden w-full max-w-md bg-dark/40 animate-pulse flex justify-center">
          <img src="/images/website-security-audit.jpg" alt="Website Security Audit" className="object-cover object-center w-4/5 sm:w-full h-80 mx-auto" />
        </div>
      </div>
    </section>
    {/* Core Features & Capabilities Section */}
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-12 text-center animate-fade-in">
        Core Features & Capabilities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vulnerability Scanning Card */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary text-3xl mr-4 animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
            </span>
            <span className="font-orbitron text-2xl font-bold text-white">Vulnerability Scanning</span>
          </div>
          <p className="text-gray-300 mb-6">Automated scans for common and critical issues in your codebase, CMS, or plugin stack.</p>
          <ul className="list-disc pl-6 space-y-2 text-primary text-base">
            <li>OWASP Top 10 vulnerability detection</li>
            <li>Weak SSL protocol detection</li>
            <li>Exposed API or debug tools</li>
            <li>Directory listing & backup file checks</li>
          </ul>
        </div>
        {/* Manual Security Review Card */}
        <div className="bg-dark-light/60 border-2 border-accent/30 rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent text-3xl mr-4 animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13a5 5 0 00-10 0v3a5 5 0 0010 0v-3z" /></svg>
            </span>
            <span className="font-orbitron text-2xl font-bold text-white">Manual Security Review</span>
          </div>
          <p className="text-gray-300 mb-6">We don’t just rely on automated tools. Our team manually reviews your site to catch logic flaws or security missteps automation might miss</p>
          <ul className="list-disc pl-6 space-y-2 text-accent text-base">
            <li>Login security & brute-force protection</li>
            <li>Secure header validation</li>
            <li>User role & access control review</li>
            <li>Default credential detection</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default WebsiteSecurityAuditPage;
