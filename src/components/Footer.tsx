import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Roblox Tableboard Studios · Project 2026 · <span id="year">{currentYear}</span>
      </p>
    </footer>
  );
};
