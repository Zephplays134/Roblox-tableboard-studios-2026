import React from 'react';
import { UPDATES, STATUS } from '../constants/status';

export const UpdatesSection: React.FC = () => {
  return (
    <section id="updates" className="section">
      <h3 className="section-title">Updates</h3>
      <ul className="updates">
        {UPDATES.map((item) => (
          <li key={item.id}>
            <span className="date">{item.date}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <p className="updated-note">
        Page last updated: <span id="last-updated">{STATUS.lastUpdated}</span>
      </p>
    </section>
  );
};
