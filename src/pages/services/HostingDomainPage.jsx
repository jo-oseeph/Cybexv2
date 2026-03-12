import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';
import { Globe, RefreshCw, Settings, Server, ArrowRightLeft, Mail } from 'lucide-react';

const data = {
  hero: {
    title: 'Hosting & Domain Management',
    tagline: 'The infrastructure your online presence depends on — in safe hands.',
    breadcrumb: 'Hosting & Domain Management',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
  },
  overview: {
    heading: 'Your Digital Foundation, Managed for You',
    paragraphs: [
      'Behind every website is a layer of critical infrastructure — domains, DNS, hosting, email — that must be configured correctly and renewed on time. When any of it fails, your entire online presence goes with it.',
      'We manage all of this for you. From registering your domain to configuring your hosting environment and setting up professional email, we ensure the foundation of your online presence is solid, secure, and always up to date.',
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80',
  },
  included: {
    heading: "What's Included",
    items: [
      { icon: Globe, title: 'Domain Registration', description: 'We register the right domain name for your business and keep full records on your behalf.' },
      { icon: RefreshCw, title: 'Domain Renewal Management', description: 'Never lose your domain to an accidental expiry — we track and handle all renewals proactively.' },
      { icon: Settings, title: 'DNS Configuration', description: 'Correct DNS setup for your website, email, and any third-party tools — done right, first time.' },
      { icon: Server, title: 'Hosting Setup', description: 'We configure fast, reliable hosting tailored to your site\'s size, traffic, and requirements.' },
      { icon: ArrowRightLeft, title: 'Hosting Migration', description: 'Moving from a slow or unreliable host? We migrate your site cleanly with zero downtime.' },
      { icon: Mail, title: 'Email Setup', description: 'Professional business email addresses configured and working on your custom domain.' },
    ],
  },
  why: {
    heading: 'Why It Matters',
    statement: 'Domain and hosting issues are silent killers — they take down your website with no warning.',
    points: [
      'An expired domain or misconfigured DNS can take your entire website and email offline instantly.',
      'Cheap, unmanaged hosting leads to slow sites, frequent downtime, and poor customer experience.',
      'Professional infrastructure management gives you reliability, security, and one less thing to worry about.',
    ],
  },
};

const HostingDomainPage = () => <ServiceDetailPage {...data} />;
export default HostingDomainPage;