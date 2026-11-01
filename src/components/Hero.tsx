import React from 'react';
import { Countdown } from './Countdown';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h2>
          Project <span className="accent">2026</span>
        </h2>
        <p className="hero-sub">
          The official yes-or-no status page for our upcoming Roblox cruise ship simulator.
        </p>
      </div>
      <Countdown />
    </section>
  );
};
