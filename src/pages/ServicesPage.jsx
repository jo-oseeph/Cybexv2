import React from "react";
import {
  Globe,
  Wrench,
  LifeBuoy,
  Server,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  useSEO,
  generateSchemaMarkup,
  useInsertSchemaMarkup,
} from "../utils/SEO";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Your website is your first impression — make it count. We build custom, responsive, and conversion-focused websites that look great, load fast, and grow with your business.",
    features: [
      "Custom business & corporate sites",
      "E-commerce & landing pages",
      "SEO-ready & mobile-first",
    ],
    route: "/services/website-design-development",
  },
  {
    icon: Wrench,
    title: "Website Management Services",
    description:
      "Stop worrying about updates, backups, and technical issues. We manage your website end-to-end so you stay focused on your business while we keep everything running smoothly.",
    features: [
      "Ongoing maintenance & updates",
      "Regular backups & monitoring",
      "Content updates & support",
    ],
    route: "/services/website-management",
  },
  {
    icon: LifeBuoy,
    title: "Website Takeover & Recovery",
    description:
      "Developer went quiet? Site broken or outdated? We step in, take full control, and restore your website to a professional, secure, and fully functional state — fast.",
    features: [
      "Fixing broken & outdated sites",
      "Speed & security recovery",
      "Hosting migration & cleanup",
    ],
    route: "/services/website-takeover-recovery",
  },
  {
    icon: Server,
    title: "Hosting & Domain Management",
    description:
      "From domain registration to DNS configuration and hosting setup, we handle the infrastructure behind your online presence so it stays reliable, secure, and always online.",
    features: [
      "Domain registration & renewals",
      "Hosting setup & migration",
      "DNS & email configuration",
    ],
    route: "/services/hosting-domain-management",
  },
  {
    icon: ShieldCheck,
    title: "Website Security & Protection",
    description:
      "A single breach can cost you everything. We harden your website against threats, install SSL, scan for malware, and put the right protections in place before problems arise.",
    features: [
      "WordPress security hardening",
      "SSL, malware & login protection",
      "Vulnerability checks & backups",
    ],
    route: "/services/website-security-protection",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Slow websites lose customers. We tune your site for speed, optimize images and databases, configure caching, and improve Core Web Vitals so every visitor gets a fast experience.",
    features: [
      "Speed & image optimization",
      "Database & caching setup",
      "Core Web Vitals improvement",
    ],
    route: "/services/performance-optimization",
  },
];

// ─── Service Card ─────────────────────────────────────────────────────────────

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  route,
  index,
}) => (
  <div
    className="group relative bg-dark-light/40 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col"
    style={{
      borderTop: "2px solid rgba(6, 182, 212, 0.5)",
      borderLeft: "1px solid rgba(6, 182, 212, 0.2)",
      borderRight: "1px solid rgba(6, 182, 212, 0.2)",
      borderBottom: "1px solid rgba(6, 182, 212, 0.2)",
      animation: "fadeInUp 0.6s ease forwards",
      animationDelay: `${0.3 + index * 0.15}s`,
      opacity: 0,
    }}
  >
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500" />

    {/* Top glow on hover */}
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative p-6 sm:p-8 flex flex-col flex-1 space-y-4">
      {/* Icon */}
      <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary-light" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>

      {/* Feature list */}
      <ul className="space-y-2 pt-1 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Learn more */}
      <div className="pt-2">
        <Link
          to={route}
          className="inline-flex items-center gap-2 text-sm font-semibold border border-primary text-primary-light px-4 py-2 rounded-md hover:bg-primary/20 transition-all duration-300"
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>

    {/* Corner decoration */}
    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-primary rounded-tl-full" />
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const ServicesPage = () => {
  useSEO({
    title: "Web Design & Development Services Kenya - Cybex Tech",
    description:
      "Comprehensive web design, development, management, security, and optimization services. Get professional digital solutions for your business in Kenya.",
    keywords:
      "web development services Kenya, website design, hosting, domain management, website security, performance optimization, Nairobi web services",
    ogUrl: "https://cybextech.co.ke/services",
  });

  const schema = generateSchemaMarkup("Service", {
    name: "Professional Web Services",
    description:
      "Website design, development, management, security, and optimization services",
    areaServed: { "@type": "Country", name: "KE" },
  });

  useInsertSchemaMarkup(schema);

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "calc(100vh - 64px)", maxHeight: "420px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80')`,
            filter: "brightness(0.5) contrast(1.1)",
          }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(5, 15, 35, 0.80) 0%, rgba(10, 25, 55, 0.65) 50%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        />

        {/* Centered Title */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <h1
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-100"
            style={{
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              letterSpacing: "-0.01em",
            }}
          >
            OUR SERVICES
          </h1>
        </div>
      </section>

      {/* ── Services Cards ── */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div
            className="text-center mb-12 sm:mb-16"
            style={{
              animation: "fadeInUp 0.6s ease forwards",
              animationDelay: "0.1s",
              opacity: 0,
            }}
          >
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-3">
              Everything You Need Online
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              From building your site to keeping it secure, we've got you
              covered end to end.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          {/* CTA strip */}
          <div
            className="mt-16 rounded-xl overflow-hidden relative"
            style={{
              animation: "fadeInUp 0.6s ease forwards",
              animationDelay: "0.7s",
              opacity: 0,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20" />
            <div
              className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8"
              style={{
                border: "1px solid rgba(6, 182, 212, 0.3)",
                borderRadius: "0.75rem",
              }}
            >
              <div className="text-center sm:text-left">
                <h3 className="font-orbitron text-xl font-bold text-white mb-1">
                  Got a project in mind?
                </h3>
                <p className="text-gray-300 text-sm">
                  Let's talk, we'll help you figure out the best solution for
                  your business.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-primary bg-primary/10 text-primary-light hover:bg-primary/25 transition-all duration-300 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(28px); }
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
};

export default ServicesPage;
