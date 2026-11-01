import React from 'react';
import { STATUS } from '../constants/status';

export const StatusGrid: React.FC = () => {
  const isTestingInternally = STATUS.testingInternally === 'YES';
  const isFinalizing = STATUS.finalizingTesting === 'YES';

  return (
    <section id="status" className="status-grid">
      <article className={`card ${isTestingInternally ? 'yes' : 'no'}`}>
        <h3>Currently Testing Internally</h3>
        <p className="answer">{STATUS.testingInternally}</p>
        <p className="detail">
          Project 2026 is live inside the studio. Our team is testing the build internally right now.
        </p>
      </article>

      <article className={`card ${isFinalizing ? 'yes' : 'no'}`}>
        <h3>Finalizing Internal Testing</h3>
        <p className="answer">{STATUS.finalizingTesting}</p>
        <p className="detail">
          Testing is underway but not finished, so it is not being finalized yet. This flips to YES when it is.
        </p>
      </article>

      <article className="card">
        <h3>Public Release</h3>
        <p className="answer tbd">TBA</p>
        <p className="detail">No release date yet. Updates land here first.</p>
      </article>
    </section>
  );
};
