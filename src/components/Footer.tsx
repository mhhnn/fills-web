import React from 'react';
import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <span>© {year} Fills AI</span>
        <div className="footer-links">
          <a href="https://github.com/google/generative-ai-js" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
} 