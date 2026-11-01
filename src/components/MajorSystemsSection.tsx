import React from 'react';
import { MAJOR_SYSTEMS } from '../constants/status';

export const MajorSystemsSection: React.FC = () => {
  return (
    <section id="systems" className="section">
      <h3 className="section-title">Major Systems</h3>
      <ul className="updates">
        {MAJOR_SYSTEMS.map((item) => (
          <li key={item.id}>
            <span className="date">{item.title}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
