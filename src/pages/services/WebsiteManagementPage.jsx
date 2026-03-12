import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';
import { Wrench, RefreshCw, BarChart2, HardDrive, Headphones, FileEdit } from 'lucide-react';

const data = {
  hero: {
    title: 'Website Management Services',
    tagline: 'We keep your website running — so you can keep running your business.',
    breadcrumb: 'Website Management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
  },
  overview: {
    heading: 'Peace of Mind, Every Single Day',
    paragraphs: [
      'Most businesses launch a website and then leave it to slowly break, fall behind, and lose relevance. We make sure that never happens to you. Our managed website service means your site is always updated, backed up, optimised, and supported.',
      'Think of us as your dedicated web team — without the overhead of hiring one. We handle every technical detail so your website remains a reliable, professional asset that works as hard as you do.',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
  },
  included: {
    heading: "What's Included",
    items: [
      { icon: Wrench, title: 'Ongoing Maintenance', description: 'Regular health checks, fixes, and improvements to keep your website in peak condition.' },
      { icon: RefreshCw, title: 'Plugin & Theme Updates', description: 'We keep all your site\'s components updated to prevent vulnerabilities and compatibility issues.' },
      { icon: BarChart2, title: 'Performance Monitoring', description: 'Continuous monitoring of your site\'s speed, uptime, and overall performance metrics.' },
      { icon: HardDrive, title: 'Regular Backups', description: 'Automated, secure backups so your data is always safe and recoverable in any situation.' },
      { icon: Headphones, title: 'Technical Support', description: 'Direct access to our team whenever something needs attention — no tickets, no waiting in queues.' },
      { icon: FileEdit, title: 'Content Updates', description: 'Need to update text, images, or pages? Send it our way and we\'ll handle it for you.' },
    ],
  },
  why: {
    heading: 'Why It Matters',
    statement: 'An unmanaged website is a liability, not an asset.',
    points: [
      'Outdated plugins and themes are the number one cause of website hacks and downtime.',
      'A slow or broken site drives visitors away and damages your brand reputation instantly.',
      'Ongoing management protects your investment and ensures your site keeps delivering results.',
    ],
  },
};

const WebsiteManagementPage = () => <ServiceDetailPage {...data} />;
export default WebsiteManagementPage;