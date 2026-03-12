import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';
import { LifeBuoy, Zap, ShieldCheck, Server, Trash2, Globe } from 'lucide-react';

const data = {
  hero: {
    title: 'Website Takeover & Recovery',
    tagline: 'Your developer vanished. Your site is broken. We fix it.',
    breadcrumb: 'Website Takeover & Recovery',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
  },
  overview: {
    heading: 'We Step In When Others Step Out',
    paragraphs: [
      'It happens more than you\'d think — a developer goes quiet, a freelancer disappears, or a site just slowly breaks down over time with no one to maintain it. You\'re left with a website that no longer works, and no idea where to start.',
      'We specialise in taking full ownership of existing websites, diagnosing every issue, and restoring them to a professional, secure, and fully functional state. Fast, clean, and with zero disruption to your business.',
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80',
  },
  included: {
    heading: "What's Included",
    items: [
      { icon: LifeBuoy, title: 'Website Takeover', description: 'We take full control of your existing site — gaining access, auditing the setup, and assuming responsibility.' },
      { icon: Trash2, title: 'Fixing Broken Sites', description: 'We diagnose and resolve errors, broken layouts, missing functionality, and outdated configurations.' },
      { icon: Zap, title: 'Speed Optimisation', description: 'After recovery, we optimise your site for fast load times and a smooth user experience.' },
      { icon: ShieldCheck, title: 'Security Hardening', description: 'We audit for vulnerabilities, remove malware, and implement protections to prevent future breaches.' },
      { icon: Server, title: 'Hosting Migration', description: 'We move your site to a better, more reliable hosting environment without any downtime.' },
      { icon: Globe, title: 'Website Cleanup', description: 'Old files, redundant plugins, bloated databases — we clean everything out and start fresh.' },
    ],
  },
  why: {
    heading: 'Why It Matters',
    statement: 'A broken website silently costs you customers and credibility every single day it stays broken.',
    points: [
      'Every day your site is down or dysfunctional is a day your competitors are winning customers you should have.',
      'Security vulnerabilities on abandoned sites make you an easy target for hackers and data breaches.',
      'A recovered, professionally managed website can immediately improve customer trust and business performance.',
    ],
  },
};

const WebsiteTakeoverPage = () => <ServiceDetailPage {...data} />;
export default WebsiteTakeoverPage;