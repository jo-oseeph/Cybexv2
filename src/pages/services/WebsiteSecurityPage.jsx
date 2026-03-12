import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';
import { ShieldCheck, Lock, Search, KeyRound, HardDrive, AlertTriangle } from 'lucide-react';

const data = {
  hero: {
    title: 'Website Security & Protection',
    tagline: 'Protect your business before a breach protects itself at your expense.',
    breadcrumb: 'Website Security & Protection',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80',
  },
  overview: {
    heading: 'Security Is Not Optional — It\'s Essential',
    paragraphs: [
      'Every website, regardless of size, is a potential target. Hackers don\'t just go after big companies — small business websites are frequently exploited precisely because they tend to be under-protected and overlooked.',
      'We implement the right security measures to harden your website, detect threats early, and ensure that if something does go wrong, your data is safe and recovery is fast.',
    ],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&q=80',
  },
  included: {
    heading: "What's Included",
    items: [
      { icon: ShieldCheck, title: 'WordPress Security Hardening', description: 'We lock down your WordPress installation — permissions, file access, admin settings, and more.' },
      { icon: Lock, title: 'SSL Installation', description: 'SSL certificates installed and configured to encrypt data and build customer trust instantly.' },
      { icon: Search, title: 'Malware Scanning', description: 'Regular automated scans to detect and remove malicious code before it causes damage.' },
      { icon: KeyRound, title: 'Login Protection', description: 'Two-factor authentication, login attempt limits, and brute-force blocking to keep accounts secure.' },
      { icon: HardDrive, title: 'Backup Security', description: 'Encrypted, offsite backups so your data is always recoverable — no matter what happens.' },
      { icon: AlertTriangle, title: 'Vulnerability Checks', description: 'Routine audits to identify outdated software, weak configurations, and exploitable entry points.' },
    ],
  },
  why: {
    heading: 'Why It Matters',
    statement: 'A single security breach can destroy years of brand trust in a matter of hours.',
    points: [
      '43% of cyberattacks target small businesses — yet most have little to no security in place.',
      'A hacked website can be blacklisted by Google, wiping out your search visibility overnight.',
      'Proactive security is always cheaper — and less damaging — than recovering from an attack.',
    ],
  },
};

const WebsiteSecurityPage = () => <ServiceDetailPage {...data} />;
export default WebsiteSecurityPage;