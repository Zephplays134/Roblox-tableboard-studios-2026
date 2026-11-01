import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark" role="img" aria-label="Anchor">⚓</span>
        <div>
          <h1>Roblox Tableboard Studios</h1>
          <p className="tagline">Developers of the cruise ship simulator</p>
        </div>
      </div>
      <nav aria-label="Main Navigation">
        <a href="#status">Status</a>
        <a href="#updates">Updates</a>
        <a href="#systems">Major Systems</a>
        <a href="#elevator">Elevator AI</a>
      </nav>
    </header>
  );
};
