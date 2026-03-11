import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';
import { Layout, Smartphone, ShoppingCart, Megaphone, RefreshCw, Search } from 'lucide-react';

const data = {
  hero: {
    title: 'Website Design & Development',
    tagline: 'Professional websites built to impress, convert, and grow.',
    breadcrumb: 'Website Design & Development',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80',
  },
  overview: {
    heading: 'Your Website Is Your Most Powerful Business Tool',
    paragraphs: [
      'In today\'s digital world, your website is often the first — and sometimes the only — impression a potential customer gets of your business. We build websites that are not just visually compelling, but strategically designed to turn visitors into customers.',
      'Whether you\'re starting from scratch or need a full redesign, we craft every detail to reflect your brand, communicate your value, and perform flawlessly across every device.',
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=80',
  },
  included: {
    heading: "What's Included",
    items: [
      { icon: Layout, title: 'Custom Business Websites', description: 'Tailored designs that reflect your brand identity and speak directly to your target audience.' },
      { icon: Megaphone, title: 'Corporate Websites', description: 'Professional, structured sites built for credibility, trust, and enterprise-level presentation.' },
      { icon: ShoppingCart, title: 'E-commerce Websites', description: 'Fully functional online stores with secure checkout, product management, and payment integration.' },
      { icon: Smartphone, title: 'Landing Pages', description: 'High-converting single pages designed to capture leads, promote offers, or launch products.' },
      { icon: RefreshCw, title: 'Website Redesign', description: 'Transform your outdated website into a modern, fast, and effective digital presence.' },
      { icon: Search, title: 'SEO-Ready Structure', description: 'Every site we build is structured for search engines so you can be found by the right people.' },
    ],
  },
  why: {
    heading: 'Why It Matters',
    statement: 'A poorly designed website can cost you customers before you ever get a chance to speak to them.',
    points: [
      '75% of users judge a business\'s credibility based on its website design.',
      'A fast, mobile-friendly site directly impacts your Google ranking and customer trust.',
      'A conversion-focused layout turns passive visitors into active leads and paying customers.',
    ],
  },
};

const WebsiteDesignPage = () => <ServiceDetailPage {...data} />;
export default WebsiteDesignPage;