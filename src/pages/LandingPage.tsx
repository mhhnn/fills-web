import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Fills AI</h1>
        <p>Real-time multimodal AI interactions</p>
        <div className="cta">
          <Link to="/console" className="cta-button">
            Open Console
          </Link>
        </div>
      </section>
    </div>
  );
} 