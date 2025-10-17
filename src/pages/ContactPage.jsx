import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaComments, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      icon: <FaPhone className="w-16 h-16 text-primary" />,
      title: "Call Us",
      description: "Speak directly with our cybersecurity specialists",
      contact: "+254) 717-378-158",
      subtext: "24/7 Emergency Hotline",
      link: "tel:+254717378158",
      delay: "0"
    },
    {
      icon: <FaEnvelope className="w-16 h-16 text-primary" />,
      title: "Email Support",
      description: "Send us detailed information about your security needs",
      contact: "info@cybex.com",
      subtext: "Response within 2 hours",
      link: "mailto:info@cybex.com",
      delay: "200"
    },
    {
      icon: <FaComments className="w-16 h-16 text-primary" />,
      title: "Live Chat",
      description: "Instant support from our technical team",
      contact: "Start Chat",
      subtext: "Available 24/7",
      link: "#",
      isButton: true,
      delay: "400"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Main Heading */}
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary animate-fade-in">
              CONTACT CYBEX
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in">
              Get in touch with our cybersecurity experts. We're here to help protect your digital infrastructure 24/7 with rapid response times and personalized solutions.
            </p>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative bg-dark-light/50 backdrop-blur-sm border-2 border-primary/20 rounded-3xl p-8 text-center transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 animate-fade-in"
                style={{
                  animationDelay: `${method.delay}ms`
                }}
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>

                {/* Top gradient border effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-70 rounded-t-3xl"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <div className="p-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {method.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {method.description}
                </p>

                {/* Contact Info */}
                {method.isButton ? (
                  <a
                    href={method.link}
                    className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-orbitron font-semibold text-lg px-8 py-3 rounded-full hover:from-primary-light hover:to-secondary-light hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 mb-3"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <a
                    href={method.link}
                    className="block font-orbitron text-primary text-lg sm:text-xl font-bold mb-3 hover:text-primary-light transition-colors duration-300 group-hover:scale-110 inline-block"
                  >
                    {method.contact}
                  </a>
                )}

                {/* Subtext */}
                <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                  {method.subtext}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Contact Form & Address Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-dark-light/50 backdrop-blur-sm border-2 border-primary/20 rounded-3xl p-8 sm:p-10 animate-fade-in">
              <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-primary mb-8">
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark/50 border-2 border-primary/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark/50 border-2 border-primary/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark/50 border-2 border-primary/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-dark/50 border-2 border-primary/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Please provide detailed information about your cybersecurity needs."
                    className="w-full bg-dark/50 border-2 border-primary/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-orbitron font-bold text-lg px-8 py-4 rounded-full hover:from-primary-light hover:to-secondary-light hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Address Card */}
            <div className="bg-dark-light/50 backdrop-blur-sm border-2 border-primary/20 rounded-3xl p-8 sm:p-10 animate-fade-in flex flex-col" style={{ animationDelay: '200ms' }}>
              <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-primary mb-8">
                Address
              </h2>

              {/* Address Info */}
              <div className="flex-1 flex items-start">
                <div className="bg-dark/50 border-2 border-primary/30 rounded-2xl p-6 w-full group hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Address Details */}
                    <div className="flex-1">
                      <h3 className="font-orbitron text-xl font-bold text-white mb-3">
                        Headquarters
                      </h3>
                      <div className="text-gray-400 space-y-1 leading-relaxed">
                        <p className="text-base">123 Tech Solutions</p>
                        <p className="text-base">Cyber City Building, 6th Floor Woodvale Grove, Westlands Nairobi,</p>
                        <p className="text-base">Kenya P.O. Box CC 12345</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative line */}
                  <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </section>
    </div>
  );
};

export default ContactPage;
