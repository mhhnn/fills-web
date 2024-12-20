import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">Fills AI</Link>
      </div>
      <nav>
        <Link 
          to="/console" 
          className={location.pathname === '/console' ? 'active' : ''}
        >
          Console
        </Link>
      </nav>
    </header>
  );
} 