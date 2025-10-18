import React from 'react';
import { FaBug, FaUserSecret, FaNetworkWired, FaEye, FaShieldAlt, FaCheckCircle, FaListAlt } from 'react-icons/fa';

const SecurityAuditAssessmentPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#0a1a2f] via-[#1a2340] to-[#0a1a2f]">
    {/* Hero Section */}
    <section className="w-full max-w-5xl mx-auto text-center px-4 py-20 animate-fade-in">
      <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-400 mb-8 leading-tight">
        SECURITY AUDITS &<br />ASSESSMENTS
      </h1>
      <p className="text-gray-200 text-lg md:text-xl mb-12 font-light">
        Comprehensive security evaluations to identify vulnerabilities, assess risks,<br />
        and strengthen your organization's cybersecurity posture through expert analysis and testing.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-4">
        <div className="bg-[#10182b] border border-cyan-700 rounded-xl px-12 py-8 flex flex-col items-center shadow-lg min-w-[260px]">
          <span className="text-cyan-400 text-5xl font-orbitron font-bold mb-2">500+</span>
          <span className="text-gray-300 text-base font-orbitron">Security Audits Completed</span>
        </div>
        <div className="bg-[#10182b] border border-cyan-700 rounded-xl px-12 py-8 flex flex-col items-center shadow-lg min-w-[260px]">
          <span className="text-cyan-400 text-5xl font-orbitron font-bold mb-2">99.8%</span>
          <span className="text-gray-300 text-base font-orbitron">Vulnerability Detection Rate</span>
        </div>
      </div>
    </section>

    {/* What Are Security Audits & Assessments Section */}
    <section className="w-full bg-[#0a0f1a] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What Are Security Audits &<br />Assessments?
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Security audits and assessments are systematic evaluations of your organization's information systems, networks, and security policies. These comprehensive reviews identify vulnerabilities, assess compliance with security standards, and provide actionable recommendations to strengthen your cybersecurity posture.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our expert team conducts thorough examinations using industry-leading methodologies and tools to ensure no stone is left unturned in protecting your digital assets.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex flex-col items-center">
          <div className="rounded-2xl border-2 border-cyan-700/40 shadow-lg overflow-hidden w-full max-w-md bg-[#10182b]/40">
            <img 
              src="/images/security-assessment.jpg" 
              alt="Security Assessment Overview Image" 
              className="object-cover object-center w-full h-80"
            />
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center font-orbitron">Security Assessment Overview Image</p>
        </div>
      </div>
    </section>

    {/* Our Assessment Services Section */}
    <section className="w-full bg-gradient-to-br from-[#0a1a2f] via-[#1a2340] to-[#0a1a2f] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-cyan-400 mb-6 text-center">
          Our Assessment Services
        </h2>
        <p className="text-gray-300 text-center text-lg mb-12 max-w-4xl mx-auto">
          Comprehensive security evaluations tailored to your organization's unique needs and risk profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vulnerability Assessments */}
          <div className="bg-[#0d1525] border-t-4 border-cyan-400 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <FaBug className="text-cyan-400 text-6xl animate-bounce-slow" />
            </div>
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
              Vulnerability<br />Assessments
            </h3>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              Systematic identification and analysis of security weaknesses in your systems, applications, and network infrastructure.
            </p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Automated vulnerability scanning</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Manual security reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Risk prioritization and remediation guidance</span>
              </li>
            </ul>
          </div>

          {/* Penetration Testing */}
          <div className="bg-[#0d1525] border-t-4 border-cyan-400 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <FaUserSecret className="text-cyan-400 text-6xl animate-bounce-slow" />
            </div>
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
              Penetration Testing
            </h3>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              Ethical hacking exercises that simulate real-world attacks to identify exploitable vulnerabilities and security gaps.
            </p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>External network penetration testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Internal network security testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Web application penetration testing</span>
              </li>
            </ul>
          </div>

          {/* Network Security Reviews */}
          <div className="bg-[#0d1525] border-t-4 border-cyan-400 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <FaNetworkWired className="text-cyan-400 text-6xl animate-bounce-slow" />
            </div>
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
              Network Security<br />Reviews
            </h3>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              In-depth analysis of network architecture, configurations, and security controls to identify potential attack vectors.
            </p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Network architecture analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Firewall and router configuration reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Wireless security assessments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Our Security Assessments Section */}
    <section className="w-full bg-[#0a0f1a] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-cyan-400 mb-6 text-center">
          Why Choose Our Security Assessments?
        </h2>
        <p className="text-gray-300 text-center text-lg mb-12 max-w-4xl mx-auto">
          Comprehensive benefits that go beyond basic vulnerability scanning to provide real security value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Complete Visibility */}
          <div className="bg-[#0d1525] border border-cyan-700/30 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-start mb-6">
              <FaEye className="text-cyan-400 text-5xl" />
            </div>
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">
              Complete Visibility
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Gain comprehensive insight into your security posture with detailed assessments covering all aspects of your digital infrastructure and identifying hidden vulnerabilities.
            </p>
          </div>

          {/* Proactive Protection */}
          <div className="bg-[#0d1525] border border-cyan-700/30 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-start mb-6">
              <FaShieldAlt className="text-cyan-400 text-5xl" />
            </div>
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">
              Proactive Protection
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Identify and address security weaknesses before attackers can exploit them, significantly reducing your risk of successful cyber attacks and data breaches.
            </p>
          </div>

          {/* Compliance Assurance */}
          <div className="bg-[#0d1525] border border-cyan-700/30 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-start mb-6">
              <FaCheckCircle className="text-cyan-400 text-5xl" />
            </div>
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">
              Compliance Assurance
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Ensure adherence to industry standards and regulatory requirements including PCI DSS, HIPAA, SOX, and other relevant compliance frameworks.
            </p>
          </div>

          {/* Risk Quantification */}
          <div className="bg-[#0d1525] border border-cyan-700/30 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-start mb-6">
              <FaListAlt className="text-cyan-400 text-5xl" />
            </div>
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">
              Risk Quantification
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Receive detailed risk assessments with quantified impact analysis, helping you prioritize security investments and resource allocation effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SecurityAuditAssessmentPage;
