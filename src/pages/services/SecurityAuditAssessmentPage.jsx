import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Sparkles, CheckCircle, Eye, Bug, UserCheck, Network, Zap, Target, Award, TrendingUp } from 'lucide-react';

const SecurityAuditAssessmentPage = () => {
  const navigate = useNavigate();
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observers = [
      { ref: heroRef, setter: setHeroVisible },
      { ref: statsRef, setter: setStatsVisible },
      { ref: overviewRef, setter: setOverviewVisible },
      { ref: servicesRef, setter: setServicesVisible },
      { ref: benefitsRef, setter: setBenefitsVisible },
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

  const stats = [
    { number: "500+", label: "Security Audits Completed", delay: 0 },
    { number: "99.8%", label: "Vulnerability Detection Rate", delay: 150 }
  ];

  const services = [
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Vulnerability Assessments",
      description: "Systematic identification and analysis of security weaknesses in your systems, applications, and network infrastructure.",
      items: [
        "Automated vulnerability scanning",
        "Manual security reviews",
        "Risk prioritization and remediation guidance",
        "Continuous monitoring recommendations"
      ],
      delay: 0
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Penetration Testing",
      description: "Ethical hacking exercises that simulate real-world attacks to identify exploitable vulnerabilities and security gaps.",
      items: [
        "External network penetration testing",
        "Internal network security testing",
        "Web application penetration testing",
        "Social engineering assessments"
      ],
      delay: 150
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Security Reviews",
      description: "In-depth analysis of network architecture, configurations, and security controls to identify potential attack vectors.",
      items: [
        "Network architecture analysis",
        "Firewall and router configuration reviews",
        "Wireless security assessments",
        "Segmentation and access control evaluation"
      ],
      delay: 300
    }
  ];

  const benefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Complete Visibility",
      description: "Gain comprehensive insight into your security posture with detailed assessments covering all aspects of your digital infrastructure."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proactive Protection",
      description: "Identify and address security weaknesses before attackers can exploit them, reducing your risk significantly."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance Assurance",
      description: "Ensure adherence to industry standards and regulatory requirements including PCI DSS, HIPAA, and SOX."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Risk Quantification",
      description: "Receive detailed risk assessments with quantified impact analysis for better security investment decisions."
    }
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
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron uppercase tracking-wider">Comprehensive Security</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>

            <h1 
              className={`font-orbitron text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary transition-all duration-700 delay-100 ${
                heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Security Audits & Assessments
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
              Comprehensive security evaluations to identify vulnerabilities, assess risks, and strengthen your organization's cybersecurity posture through expert analysis and testing.
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
                  Request Assessment
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-700 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ${
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
                <div className="font-orbitron text-4xl sm:text-5xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors duration-300">
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

      {/* Overview Section */}
      <section ref={overviewRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Service Overview</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              What Are Security Audits?
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div 
              className={`flex-1 space-y-6 transition-all duration-700 ${
                overviewVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Security audits and assessments are systematic evaluations of your organization's information systems, networks, and security policies. These comprehensive reviews identify vulnerabilities, assess compliance with security standards, and provide actionable recommendations to strengthen your cybersecurity posture.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Our expert team conducts thorough examinations using industry-leading methodologies and tools to ensure no stone is left unturned in protecting your digital assets.
              </p>

              <div className="space-y-4 pt-6">
                {[
                  "Systematic security evaluations",
                  "Compliance verification",
                  "Vulnerability identification",
                  "Risk assessment and prioritization",
                  "Actionable remediation plans"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 group p-4 rounded-xl bg-dark/30 hover:bg-dark/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 text-base leading-relaxed pt-2 group-hover:text-white transition-colors duration-300">
                      {item}
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
                  alt="Security Assessment Overview" 
                  className="relative object-cover w-full h-80 rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Assessment Services Section */}
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-dark-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Assessment Services</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              What We Assess
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive security evaluations tailored to your organization's unique needs and risk profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm rounded-3xl p-8 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${service.delay}ms`,
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10"></div>
                
                <div className="flex justify-center mb-6">
                  <div className="relative p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                </div>

                <h3 className="font-orbitron text-xl font-bold text-white mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
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

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Key Benefits</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              Why Choose Our Assessments?
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive benefits that go beyond basic vulnerability scanning to provide real security value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
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
              <span className="text-sm font-medium text-primary-light font-orbitron">Get Started</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Strengthen Your Security?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive security assessment and identify vulnerabilities before attackers do. Protect your organization with expert evaluation.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="group relative px-10 py-5 rounded-full font-orbitron font-bold text-xl bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Schedule Your Assessment
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
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

export default SecurityAuditAssessmentPage;