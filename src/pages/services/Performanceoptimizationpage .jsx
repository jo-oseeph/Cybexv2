import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';
import { Zap, Image, Database, Layers, BarChart2, Gauge } from 'lucide-react';

const data = {
  hero: {
    title: 'Performance Optimization',
    tagline: 'Fast websites win. Slow websites lose. It\'s that simple.',
    breadcrumb: 'Performance Optimization',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
  },
  overview: {
    heading: 'Speed Is a Business Decision',
    paragraphs: [
      'Website speed is no longer just a technical metric — it directly affects your revenue, your search rankings, and how customers perceive your brand. A one-second delay in load time can reduce conversions by up to 7%.',
      'We conduct a thorough performance audit of your website and implement targeted optimisations that deliver measurable improvements — faster load times, better Google scores, and a smoother experience for every visitor.',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
  },
  included: {
    heading: "What's Included",
    items: [
      { icon: Zap, title: 'Speed Optimisation', description: 'End-to-end performance tuning to reduce load times and deliver a faster experience for every user.' },
      { icon: Image, title: 'Image Optimisation', description: 'Compressing and converting images to modern formats without any visible loss in quality.' },
      { icon: Database, title: 'Database Optimisation', description: 'Cleaning and restructuring your database to reduce query times and eliminate unnecessary bloat.' },
      { icon: Layers, title: 'Caching Setup', description: 'Browser and server-side caching configured correctly to serve pages instantly to returning visitors.' },
      { icon: BarChart2, title: 'Core Web Vitals Improvement', description: 'Targeting Google\'s Core Web Vitals — LCP, FID, and CLS — to improve rankings and user experience.' },
      { icon: Gauge, title: 'Performance Reporting', description: 'Before-and-after reports showing exactly what improved and the measurable impact on your site.' },
    ],
  },
  why: {
    heading: 'Why It Matters',
    statement: 'Your website\'s speed is your first impression — and Google is watching.',
    points: [
      'Google uses page speed as a direct ranking factor — a slow site means lower visibility in search results.',
      'Users abandon websites that take more than 3 seconds to load, regardless of how good the content is.',
      'Optimised performance reduces bounce rates, increases engagement, and directly improves your conversion rate.',
    ],
  },
};

const PerformanceOptimizationPage = () => <ServiceDetailPage {...data} />;
export default PerformanceOptimizationPage;