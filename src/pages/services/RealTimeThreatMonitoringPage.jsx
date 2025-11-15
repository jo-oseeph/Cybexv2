import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Sparkles, Eye, Clock, Bell, TrendingUp, CheckCircle, AlertTriangle, Zap, Activity } from 'lucide-react';

const RealTimeThreatMonitoringPage = () => {
  const navigate = useNavigate();
  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [howItWorksVisible, setHowItWorksVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observers = [
      { ref: heroRef, setter: setHeroVisible },
      { ref: overviewRef, setter: setOverviewVisible },
      { ref: featuresRef, setter: setFeaturesVisible },
      { ref: benefitsRef, setter: setBenefitsVisible },
      { ref: howItWorksRef, setter: setHowItWorksVisible },
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

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "24/7 System Monitoring",
      description: "Continuous surveillance of your digital infrastructure with real-time threat detection and immediate alerts.",
      delay: 0
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Instant Alerts",
      description: "Receive immediate notifications via email, SMS, or dashboard when suspicious activity is detected.",
      delay: 150
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Traffic Analysis",
      description: "Advanced monitoring of network traffic patterns to identify anomalies and potential security threats.",
      delay: 300
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Threat Detection",
      description: "AI-powered detection of malware, unauthorized access attempts, and suspicious behavior patterns.",
      delay: 450
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Response",
      description: "Catch threats within minutes, not days or weeks"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cost Effective",
      description: "Prevent expensive breaches with affordable monitoring"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Peace of Mind",
      description: "Know your systems are protected around the clock"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Easy Setup",
      description: "Quick deployment with minimal technical overhead"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Initial Setup",
      description: "We deploy monitoring agents across your critical systems and configure alert thresholds based on your needs.",
      delay: 0
    },
    {
      step: "02",
      title: "Continuous Monitoring",
      description: "Our AI-powered system monitors your infrastructure 24/7, analyzing logs, traffic, and system behavior.",
      delay: 150
    },
    {
      step: "03",
      title: "Threat Detection",
      description: "When suspicious activity is detected, our system immediately flags it and categorizes the threat level.",
      delay: 300
    },
    {
      step: "04",
      title: "Instant Alerts",
      description: "You receive real-time notifications with detailed threat information and recommended actions.",
      delay: 450
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron uppercase tracking-wider">Premium Security Service</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>

            <h1 
              className={`font-orbitron text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary transition-all duration-700 delay-100 ${
                heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Real-Time Threat Monitoring
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
              See threats as they happen. Our Real-Time Threat Monitoring service alerts you instantly to suspicious activity across your website or network, so you can respond before small issues become serious breaches.
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
                  Get Started Today
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
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
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Service Overview</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              Early Warning Saves Time and Money
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div 
              className={`flex-1 transition-all duration-700 ${
                overviewVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                For many organizations, basic visibility is the first step to real cybersecurity. This service gives you the tools and alerts needed to monitor your critical assets in real time, without the complexity or cost of full threat intelligence systems.
              </p>
              <div className="space-y-4">
                {[
                  "Detect threats before they cause damage",
                  "Monitor multiple systems from one dashboard",
                  "Receive actionable alerts, not just logs",
                  "Affordable protection for growing businesses"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
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
                  alt="Real-Time Threat Monitoring" 
                  className="relative object-cover w-full h-80 rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Key Features</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              What You Get
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>
                
                <div className="relative p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 inline-block mb-4 group-hover:scale-110 transition-all duration-300">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-dark-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Benefits</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              Why Choose Real-Time Monitoring?
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
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
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Process</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
              How It Works
            </h2>
            <div className="relative w-32 h-1 mx-auto rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 ${
                  howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${step.delay}ms`,
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-orbitron font-bold text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
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
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get started with Real-Time Threat Monitoring today and gain the visibility you need to stay secure.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="group relative px-10 py-5 rounded-full font-orbitron font-bold text-xl bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Contact Us Now
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

export default RealTimeThreatMonitoringPage;