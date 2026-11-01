import React from 'react';
import { ELEVATOR_FEATURES } from '../constants/status';

export const ElevatorSection: React.FC = () => {
  return (
    <section id="elevator" className="section elevator">
      <h3 className="section-title">Elevator AI</h3>
      <div className="card elevator-card">
        <p className="elevator-name">Elevator</p>
        <p className="elevator-sub">
          Our AI model, built in-house. Chat with it right from this page.
        </p>
        <ul className="elevator-features">
          {ELEVATOR_FEATURES.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
