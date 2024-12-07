import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Alan Gothard</h1>
        <div className="title-badge">
          <span className="title-text">Frontend Developer</span>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default Header; 