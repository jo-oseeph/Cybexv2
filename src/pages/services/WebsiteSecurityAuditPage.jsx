import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Sparkles, Search, CheckCircle, Lock, Eye, AlertTriangle, Zap, FileSearch, ShieldCheck } from 'lucide-react';

const WebsiteSecurityAuditPage = () => {
  const navigate = useNavigate();
  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observers = [
      { ref: heroRef, setter: setHeroVisible },
      { ref: overviewRef, setter: setOverviewVisible },
      { ref: featuresRef, setter: setFeaturesVisible },
      { ref: statsRef, setter: setStatsVisible },
      { ref: ctaRef, setter: setCtaVisible }
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, observerOptions);
      if (ref.current) observer.observe(ref.current);
      return { observer, ref };
    });

    return () => {
      observerInstances.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const serviceBenefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Early detection of security flaws before they're exploited" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Stronger trust with users and customers" },
    { icon: <Zap className="w-5 h-5" />, text: "Higher uptime and better performance" },
    { icon: <FileSearch className="w-5 h-5" />, text: "Improved compliance with security standards" },
    { icon: <AlertTriangle className="w-5 h-5" />, text: "Outdated plugin/theme identification" }
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Vulnerability Scanning",
      description: "Automated scans for common and critical issues in your codebase, CMS, or plugin stack.",
      items: [
        "OWASP Top 10 vulnerability detection",
        "Weak SSL protocol detection",
        "Exposed API or debug tools",
        "Directory listing & backup file checks"
      ],
      delay: 0
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Manual Security Review",
      description: "We don't just rely on automated tools. Our team manually reviews your site to catch logic flaws or security missteps automation might miss.",
      items: [
        "Login security & brute-force protection",
        "Secure header validation",
        "User role & access control review",
        "Default credential detection"
      ],
      delay: 150
    }
  ];

  const stats = [
    { number: "48hrs", label: "Vulnerability Fix Time", delay: 0 },
    { number: "100+", label: "Security Checks", delay: 150 },
    { number: "99.9%", label: "Threat Detection Rate", delay: 300 },
    { number: "24/7", label: "Support Available", delay: 450 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-dark">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron uppercase tracking-wider">Comprehensive Protection</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>

            <h1 
              className={`font-orbitron text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary transition-all duration-700 delay-100 ${
                heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Website Security Audit
            </h1>

            <div 
              className={`relative w-32 h-1 mx-auto rounded-full overflow-hidden transition-all duration-700 delay-200 ${
                heroVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
            
            <p 
              className={`text-gray-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-700 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Comprehensive vulnerability assessment to protect your website from common threats, hidden exploits, and misconfigurations — ensuring your digital presence stays secure, fast, and trusted.
            </p>

            <div 
              className={`transition-all duration-700 delay-500 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button 
                onClick={() => navigate('/contact')}
                className="group relative px-8 py-4 rounded-full font-orbitron font-bold text-lg bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Audit
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-700 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${stat.delay}ms`,
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>
                <div className="font-orbitron text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section ref={overviewRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <FileSearch className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Service Overview</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              Complete Web Risk Visibility
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div 
              className={`flex-1 space-y-6 transition-all duration-700 ${
                overviewVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Our Website Security Audit identifies and addresses the most common yet dangerous vulnerabilities found in websites today. Whether you're using WordPress, Joomla, or a custom site, we check every layer of your web stack for weak spots that hackers target.
              </p>

              <div className="space-y-4">
                {serviceBenefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 group p-4 rounded-xl bg-dark/30 hover:bg-dark/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-300 text-base leading-relaxed pt-2 group-hover:text-white transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className={`flex-1 flex justify-center items-center transition-all duration-700 delay-200 ${
                overviewVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden w-full max-w-md group">
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <img 
                  src="/images/slide2.jpg" 
                  alt="Website Security Audit" 
                  className="relative object-cover w-full h-80 rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Core Features Section */}
      <section ref={featuresRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-dark-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Core Features</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              What's Included
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm rounded-3xl p-8 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${feature.delay}ms`,
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className={`transition-all duration-700 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Take Action Now</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Secure Your Website Today
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait for a security breach to take action. Get a comprehensive security audit and protect your digital assets before it's too late.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="group relative px-10 py-5 rounded-full font-orbitron font-bold text-xl bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Schedule Your Audit
                <Shield className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WebsiteSecurityAuditPage;