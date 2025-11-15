import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaEnvelope, FaComments, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Shield, Sparkles, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [methodsVisible, setMethodsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  
  const heroRef = useRef(null);
  const methodsRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHeroVisible(true);
    }, observerOptions);

    const methodsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setMethodsVisible(true);
    }, observerOptions);

    const formObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFormVisible(true);
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (methodsRef.current) methodsObserver.observe(methodsRef.current);
    if (formRef.current) formObserver.observe(formRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (methodsRef.current) methodsObserver.unobserve(methodsRef.current);
      if (formRef.current) formObserver.unobserve(formRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\n` +
      `Last Name: ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:realsejjo2001@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="w-12 h-12 text-primary" />,
      title: "Call Us",
      description: "Speak directly with our cybersecurity specialists",
      contact: "+254 717-378-158",
      subtext: "24/7 Emergency Hotline",
      link: "tel:+254717378158",
      delay: 0
    },
    {
      icon: <FaEnvelope className="w-12 h-12 text-primary" />,
      title: "Email Support",
      description: "Send us detailed information about your security needs",
      contact: "info@cybex.com",
      subtext: "Response within 2 hours",
      link: "mailto:info@cybex.com",
      delay: 150
    },
    {
      icon: <FaComments className="w-12 h-12 text-primary" />,
      title: "Live Chat",
      description: "Instant support from our technical team",
      contact: "Start Chat",
      subtext: "Available 24/7",
      link: "https://wa.me/254717378758?text=Hello%20Cybex,%20I%20would%20like%20to%20know%20more%20about%20your%20cybersecurity%20services.",
      isButton: true,
      delay: 300
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
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Get In Touch</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>

            <h1 
              className={`font-orbitron text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary transition-all duration-700 delay-100 ${
                heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              CONTACT CYBEX
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
              Get in touch with our cybersecurity experts. We're here to help protect your digital infrastructure 24/7 with rapid response times and personalized solutions.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      </section>

      {/* Contact Methods Section */}
      <section ref={methodsRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              methodsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-light font-orbitron">Contact Methods</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`group relative bg-dark-light/50 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden ${
                  methodsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${method.delay}ms`,
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                {/* Animated gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>

                {/* Top shine effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                {/* Icon with pulse effect */}
                <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="relative p-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                    <div className="relative">{method.icon}</div>
                  </div>
                </div>

                <h3 className="font-orbitron text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {method.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {method.description}
                </p>

                {method.isButton ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-orbitron font-semibold text-base px-6 py-3 rounded-full hover:from-primary-light hover:to-secondary-light hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 mb-3"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <a
                    href={method.link}
                    className="block font-orbitron text-primary text-lg font-bold mb-3 hover:text-primary-light transition-all duration-300 hover:scale-105 inline-block"
                  >
                    {method.contact}
                  </a>
                )}

                <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                  {method.subtext}
                </p>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Contact Form & Address Section */}
      <section ref={formRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div 
              className={`relative bg-dark-light/50 backdrop-blur-sm rounded-3xl p-8 sm:p-10 transition-all duration-700 overflow-hidden ${
                formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

              <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-semibold mb-2 font-orbitron text-sm">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="w-full bg-dark/70 border-2 border-primary/30 rounded-xl px-4 py-3 text-gray-500 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                      style={{ color: '#333' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-semibold mb-2 font-orbitron text-sm">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full bg-dark/70 border-2 border-primary/30 rounded-xl px-4 py-3 text-gray-500 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                      style={{ color: '#333' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2 font-orbitron text-sm">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@example.com"
                      className="w-full bg-dark/70 border-2 border-primary/30 rounded-xl px-4 py-3 text-gray-500 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                      style={{ color: '#333' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2 font-orbitron text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 712 345 678"
                      className="w-full bg-dark/70 border-2 border-primary/30 rounded-xl px-4 py-3 text-gray-500 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                      style={{ color: '#333' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2 font-orbitron text-sm">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your cybersecurity needs..."
                    className="w-full bg-dark/70 border-2 border-primary/30 rounded-xl px-4 py-3 text-gray-500 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none hover:border-primary/50"
                    style={{ color: '#333' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-orbitron font-bold text-lg px-8 py-4 rounded-full hover:from-primary-light hover:to-secondary-light hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <FaPaperPlane className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Address Card */}
            <div 
              className={`relative bg-dark-light/50 backdrop-blur-sm rounded-3xl p-8 sm:p-10 flex flex-col transition-all duration-700 overflow-hidden ${
                formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{
                transitionDelay: '200ms',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

              <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
                Our Location
              </h2>

              <div className="flex-1 flex items-center">
                <div className="bg-dark/50 border-2 border-primary/30 rounded-2xl p-6 w-full group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 relative">
                        <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <MapPin className="w-7 h-7 text-primary relative z-10" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        Headquarters
                      </h3>
                      <div className="text-gray-300 space-y-1 leading-relaxed">
                        <p className="text-base">123 Tech Solutions</p>
                        <p className="text-base">Cyber City Building, 6th Floor</p>
                        <p className="text-base">Woodvale Grove, Westlands</p>
                        <p className="text-base">Nairobi, Kenya</p>
                        <p className="text-base">P.O. Box CC 12345</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-10 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
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
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
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
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;