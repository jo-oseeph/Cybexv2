import React from 'react';
import { Scale, Settings, Shield, Search, Monitor, GraduationCap } from 'lucide-react';
import ServiceCard from './ServicesCard';

const ServicesSection = () => {
  const firstSectionServices = [
    {
      icon: Scale,
      title: "Real-Time Threat Monitoring (Basic Tier)",
      description: "We implement basic monitoring tools that alert you to suspicious activity on your website or systems in real time. Know when something goes wrong — before it becomes a disaster.",
      gradient: "from-primary to-secondary",
      route: "/threat-monitoring"
    },
    {
      icon: Settings,
      title: "Email Security Setup", 
      description: "We configure essential email protections like SPF, DKIM, and DMARC to prevent spoofing, phishing, and impersonation attacks. Prevent scammers from using your brand to attack others.",
      gradient: "from-primary to-secondary",
      route: "/email-security"
    },
    {
      icon: Shield,
      title: "Secure Cloud Setup",
      description: "We help you set up secure access to Google Workspace, Microsoft 365, or other cloud tools — with two-factor authentication, user access controls, and automated backups. Work safely from anywhere — with your data protected.",
      gradient: "from-primary to-secondary", 
      route: "/cloud-setup"
    }
  ];

  const solutionsServices = [
    {
      icon: Search,
      title: "Website Security Audit",
      description: "We scan your website for vulnerabilities like weak SSL certificates, outdated plugins, exposed admin panels, and insecure configurations, then fix them fast. Keep your site secure and trustworthy for your customers.",
      gradient: "from-primary to-secondary",
      route: "/security-audit"
    },
    {
      icon: Monitor,
      title: "Device & Endpoint Protection", 
      description: "We help you secure laptops, desktops, and mobile devices with strong encryption, antivirus tools, secure backups, and regular patching. Protect your business from ransomware, theft, and data loss.",
      gradient: "from-primary to-secondary",
      route: "/endpoint-protection"
    },
    {
      icon: GraduationCap,
      title: "Cyber Awareness Training",
      description: "We offer simple training sessions for your staff to recognize phishing emails, use strong passwords, and avoid costly security mistakes. Because even smart people click the wrong link sometimes.",
      gradient: "from-primary to-secondary", 
      route: "/awareness-training"
    }
  ];

  const handleServiceClick = (route) => {
    console.log(`Navigate to: ${route}`);
  };

  return (
    <div className="bg-dark py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Now at the top */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6 tracking-wider">
            OUR SOLUTIONS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive cybersecurity solutions powered by advanced AI and delivered by industry experts.
          </p>
        </div>

        {/* First Section Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {firstSectionServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              onClick={() => handleServiceClick(service.route)}
            />
          ))}
        </div>

        {/* Solutions Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutionsServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              onClick={() => handleServiceClick(service.route)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;