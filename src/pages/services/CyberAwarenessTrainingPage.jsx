import React from 'react';

const CyberAwarenessTrainingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left: Text */}
      <div className="flex-1">
        <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
          Cyber Awareness<br />Training
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl">
          Human error is the #1 cause of cyber breaches. Our Cyber Awareness Training equips your staff with practical skills to recognize threats, follow secure habits, and protect your organization from the inside out.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 bg-dark/60 border border-primary/30 rounded-2xl px-8 py-6 text-center">
            <div className="font-orbitron text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-400 text-base">Successful Projects</div>
          </div>
          <div className="flex-1 bg-dark/60 border border-primary/30 rounded-2xl px-8 py-6 text-center">
            <div className="font-orbitron text-3xl sm:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-400 text-base">Client Satisfaction</div>
          </div>
          <div className="flex-1 bg-dark/60 border border-primary/30 rounded-2xl px-8 py-6 text-center">
            <div className="font-orbitron text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-400 text-base">Expert Support</div>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden max-w-md w-full bg-dark/40">
          <img src="/images/website-security-audit.jpg" alt="Cyber Awareness Training" className="w-full h-80 object-cover object-center" />
        </div>
      </div>
    </section>

    {/* Build a Human Firewall Section */}
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
      {/* Left: Text */}
      <div className="flex-1">
        <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-8 text-center lg:text-left">
          Build a Human Firewall
        </h2>
        <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4 text-left">Build a Human Firewall</h3>
        <p className="text-gray-300 text-base sm:text-lg mb-4 max-w-2xl">
          Even the most secure systems can be undone by a single careless click. That's why we train your team — from interns to executives — to detect and avoid today's most common cyber threats.
        </p>
        <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl">
          Our interactive, scenario-based training ensures staff understand the why behind security, not just the rules.
        </p>
        <ul className="space-y-3 mb-2">
          <li className="flex items-center text-primary text-base sm:text-lg"><span className="mr-2">✓</span>Recognize phishing and social engineering attacks</li>
          <li className="flex items-center text-primary text-base sm:text-lg"><span className="mr-2">✓</span>Use strong passwords and MFA confidently</li>
          <li className="flex items-center text-primary text-base sm:text-lg"><span className="mr-2">✓</span>Identify suspicious links, attachments, and fake websites</li>
          <li className="flex items-center text-primary text-base sm:text-lg"><span className="mr-2">✓</span>Develop a security-first mindset across your organization</li>
        </ul>
      </div>
      {/* Right: Image Card */}
      <div className="flex-1 flex flex-col items-center animate-fade-in" style={{animationDelay: '400ms'}}>
        <div className="rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden max-w-md w-full bg-dark/40 animate-pulse flex justify-center">
          <img src="/images/website-security-audit.jpg" alt="Security Framework Architecture Diagram" className="object-cover object-center w-4/5 sm:w-full h-72 mx-auto" />
        </div>
        <div className="text-center mt-4 text-gray-400 text-base">
          Security Framework<br />Architecture Diagram
        </div>
      </div>
    </section>

    {/* Services Involved Section */}
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-12 text-center animate-fade-in">
        Services Involved
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Incident Reporting and Response */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary text-3xl animate-bounce-slow">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><rect x='6' y='4' width='12' height='16' rx='2' stroke='currentColor' strokeWidth='2' fill='none'/><path d='M9 8h6M9 12h6M9 16h2' stroke='currentColor' strokeWidth='2'/></svg>
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">Incident Reporting and Response</h3>
          <p className="text-gray-300 mb-6 text-center">Teach employees what to do when they suspect something's off.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-primary"><span className="mr-2">▶</span>How to report phishing and breaches</li>
            <li className="flex items-center text-primary"><span className="mr-2">▶</span>What not to do during an incident</li>
          </ul>
        </div>
        {/* Password Hygiene & Access Control */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary text-3xl animate-bounce-slow">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' fill='none'/><path d='M12 8v4l3 3' stroke='currentColor' strokeWidth='2'/></svg>
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">Password Hygiene & Access Control</h3>
          <p className="text-gray-300 mb-6 text-center">Help your team build better habits around passwords and data access.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-primary"><span className="mr-2">▶</span>Password manager tutorials</li>
            <li className="flex items-center text-primary"><span className="mr-2">▶</span>Access control do's and don'ts</li>
            <li className="flex items-center text-primary"><span className="mr-2">▶</span>MFA setup guides</li>
          </ul>
        </div>
        {/* Phishing Awareness & Prevention */}
        <div className="bg-dark-light/60 border-2 border-primary/30 rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary text-3xl animate-bounce-slow">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' fill='none'/><path d='M12 16v-4m0 0V8m0 4h4m-4 0H8' stroke='currentColor' strokeWidth='2'/></svg>
            </span>
          </div>
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-4 text-center">Phishing Awareness & Prevention</h3>
          <p className="text-gray-300 mb-6 text-center">Train staff to detect real-world phishing emails using interactive examples and live simulations.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-primary"><span className="mr-2">▶</span>Email header analysis</li>
            <li className="flex items-center text-primary"><span className="mr-2">▶</span>Spotting spoofed URLs</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default CyberAwarenessTrainingPage;
