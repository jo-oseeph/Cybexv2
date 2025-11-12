import React from 'react';
import './bhero.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Insights & Articles
        </h1>
        <p className="hero-description">
          Stay informed on the latest trends in cybersecurity, threat
          intelligence, and digital defense.
        </p>
      </div>
    </section>
  );
}