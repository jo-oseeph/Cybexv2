
import { Globe, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Professional, responsive websites tailored for your business or organization. We craft clean, fast, and conversion-focused designs that make a lasting impression and grow with your brand.",
    route: "/services/website-design-development",
  },
  {
    icon: Wrench,
    title: "Fully Managed Website Services",
    description:
      "We handle hosting, renewals, updates, and ongoing support — so you never have to worry about technical issues. Focus on running your business while we keep your website running smoothly.",
    route: "/services/managed-website-services",
  },
  {
    icon: ShieldCheck,
    title: "Website Security & Optimization",
    description:
      "Basic security hardening, real-time monitoring, and performance optimization to keep your site safe, fast, and always available. We protect your online presence so your customers always trust you.",
    route: "/services/website-security-optimization",
  },
];

const ServiceCard = ({ icon: Icon, title, description, route, index }) => (
  <div
    className="group relative bg-dark-light/40 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer"
    style={{
      borderTop: '2px solid rgba(6, 182, 212, 0.5)',
      borderLeft: '1px solid rgba(6, 182, 212, 0.2)',
      borderRight: '1px solid rgba(6, 182, 212, 0.2)',
      borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
      animation: `fadeInUp 0.6s ease forwards`,
      animationDelay: `${index * 0.15}s`,
      opacity: 0,
    }}
  >
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500" />

    {/* Top glow on hover */}
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative p-6 sm:p-8 space-y-4">
      {/* Icon */}
      <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary-light" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-primary ">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-base leading-relaxed">
        {description}
      </p>

      {/* Learn more */}
      <Link
        to={route}
        className="inline-flex items-center gap-2 text-sm font-semibold border border-primary text-primary-light px-3 py-2 rounded-md hover:bg-primary/20 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>

    {/* Corner decoration */}
    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-primary rounded-tl-full" />
    </div>
  </div>
);

const ServicesSection = () => (
  <div id="services" className="relative bg-dark py-16 sm:py-20 lg:py-24 overflow-hidden">
    {/* Background blobs */}
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16" style={{ animation: 'fadeInUp 0.6s ease forwards' }}>
        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6">
          OUR SERVICES
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Simple, reliable digital services built to help your business grow online, without the tech headaches.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center" style={{ animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.5s', opacity: 0 }}>
        <Link
          to="/services"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base border border-primary bg-primary/10 text-primary-light hover:bg-primary/20 transition-all duration-300 group"
        >
          <span>View All Services</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>

    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50%       { opacity: 0.5; transform: scale(1.1); }
      }
      .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
    `}</style>
  </div>
);

export default ServicesSection;