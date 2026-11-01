import React, { useState, useEffect } from 'react';
import { COUNTDOWN_TARGET } from '../constants/status';

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const diff = COUNTDOWN_TARGET.getTime() - Date.now();
    if (diff <= 0) {
      return {
        days: '0',
        hours: '00',
        mins: '00',
        secs: '00',
        isClosed: true,
      };
    }

    const totalSeconds = Math.floor(diff / 1000);
    return {
      days: String(Math.floor(totalSeconds / 86400)),
      hours: pad(Math.floor((totalSeconds % 86400) / 3600)),
      mins: pad(Math.floor((totalSeconds % 3600) / 60)),
      secs: pad(totalSeconds % 60),
      isClosed: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="countdown-addon" aria-label="Countdown to the end of the 2026 release window">
      <p className="countdown-label">Release window countdown</p>
      <div className="countdown" id="countdown">
        <div className="count-unit">
          <span id="cd-days">{timeLeft.days}</span>
          <em>days</em>
        </div>
        <div className="count-unit">
          <span id="cd-hours">{timeLeft.hours}</span>
          <em>hrs</em>
        </div>
        <div className="count-unit">
          <span id="cd-mins">{timeLeft.mins}</span>
          <em>min</em>
        </div>
        <div className="count-unit">
          <span id="cd-secs">{timeLeft.secs}</span>
          <em>sec</em>
        </div>
      </div>
      <p className="countdown-note" id="countdown-note">
        {timeLeft.isClosed
          ? 'The 2026 release window has closed.'
          : 'End of the 2026 release window: December 31, 2026'}
      </p>
    </aside>
  );
};
