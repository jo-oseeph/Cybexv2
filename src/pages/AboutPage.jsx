import React from 'react';
import { FaCrosshairs, FaEye, FaGem, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  const cards = [
    {
      icon: <FaCrosshairs className="w-16 h-16 text-primary" />,
      title: "Mission",
      description: "To provide advanced cybersecurity solutions that empower organizations to operate securely in the digital landscape, protecting their most valuable assets through innovative AI-driven technologies and expert guidance.",
      delay: "0"
    },
    {
      icon: <FaEye className="w-16 h-16 text-primary" />,
      title: "Vision",
      description: "To be the global leader in cybersecurity innovation, creating a world where organizations can embrace digital transformation with complete confidence in their security posture.",
      delay: "200"
    },
    {
      icon: <FaGem className="w-16 h-16 text-primary" />,
      title: "Values",
      description: "Excellence, Innovation, Integrity, and Trust. We believe in delivering superior solutions while maintaining the highest ethical standards and building lasting partnerships with our clients.",
      delay: "400"
    }
  ];

  const teamMembers = [
    {
      name: "John Maina",
      role: "Chief Executive Officer",
      bio: "JM is a cybersecurity specialist with 5+ years of experience in threat intelligence and AI security solutions. Leads our strategic vision and innovation initiatives.",
      image: null, // You'll add the image path here
      socials: [
        { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
        { icon: <FaTwitter />, url: "#", label: "Twitter" }
      ],
      delay: "0"
    },
    {
      name: "JM",
      role: "Chief Technology Officer",
      bio: "Pioneered our threat detection algorithms and leads the development of next-generation cybersecurity technologies.",
      image: null, // You'll add the image path here
      socials: [
        { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
        { icon: <FaGithub />, url: "#", label: "GitHub" }
      ],
      delay: "200"
    },
    {
      name: "JM",
      role: "Head of Threat Intelligence",
      bio: "Certified Ethical Hacker with expertise in advanced persistent threats. Oversees our global threat monitoring and incident response operations.",
      image: null, // You'll add the image path here
      socials: [
        { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
        { icon: <FaTwitter />, url: "#", label: "Twitter" }
      ],
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
              ABOUT CYBEX
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in">
              Leading the future of cybersecurity with innovative AI-powered solutions and unparalleled expertise in protecting digital infrastructures worldwide.
            </p>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      </section>
      <AboutSection />  

      {/* Mission, Vision, Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-dark-light/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/50 rounded-2xl p-8 text-center transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{
                  background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.6), rgba(30, 41, 59, 0.4))',
                  animationDelay: `${card.delay}ms`,
                  borderImage: 'linear-gradient(135deg, #06b6d4, #2563eb, #7c3aed) 1',
                }}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Our Expert Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-4">
              Our Expert Team
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-dark-light/50 backdrop-blur-sm border-2 border-primary/20 rounded-3xl p-8 text-center transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 animate-fade-in"
                style={{
                  animationDelay: `${member.delay}ms`
                }}
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>

                {/* Image Container with Placeholder */}
                <div className="relative mb-6 mx-auto w-48 h-48 sm:w-56 sm:h-56">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-pulse group-hover:animate-none">
                    <div className="w-full h-full rounded-full bg-dark-light flex items-center justify-center overflow-hidden group-hover:scale-95 transition-transform duration-300">
                      {/* Placeholder for image - user will add their images here */}
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-6xl font-orbitron font-bold text-primary/50">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative ring animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:scale-110 group-hover:border-primary/60 transition-all duration-500"></div>
                </div>

                {/* Name */}
                <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-primary text-sm sm:text-base font-semibold mb-4 group-hover:text-primary-light transition-colors duration-300">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-dark hover:border-primary hover:scale-110 hover:rotate-12 transition-all duration-300 group/social"
                    >
                      <span className="text-xl group-hover/social:scale-125 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </section>
    </div>
  );
};

export default AboutPage;
