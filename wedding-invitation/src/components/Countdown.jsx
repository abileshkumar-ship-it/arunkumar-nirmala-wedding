import weddingData from '../data/weddingData';
import { useCountdown } from '../hooks/useCountdown';
import Reveal from './Reveal';
import { GoldDivider } from './Floral';

const pad = (n) => String(n).padStart(2, '0');

function Unit({ value, label }) {
  return (
    <div className="count-card">
      {/* key restarts the small "tick" animation whenever the number changes */}
      <span key={value} className="count-card__value">
        {pad(value)}
      </span>
      <span className="count-card__label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { date } = weddingData;
  // Target is midnight at the start of 12 January 2027, Asia/Kolkata (UTC+05:30)
  const time = useCountdown(date.countdownTarget);

  return (
    <section id="countdown" className="section section--lilac" aria-labelledby="countdown-title">
      <div className="container text-center">
        <Reveal>
          <p className="section__eyebrow">Save the date</p>
          <h2 id="countdown-title" className="section__title">
            Counting Down to Our Wedding
          </h2>
          <GoldDivider />
        </Reveal>

        <Reveal delay={150}>
          {time.isDone ? (
            <p className="count-done" role="status">
              The Wedding Day Is Here!
            </p>
          ) : (
            <div className="count-grid" role="timer" aria-label="Time remaining until the wedding">
              <Unit value={time.days} label="Days" />
              <Unit value={time.hours} label="Hours" />
              <Unit value={time.minutes} label="Minutes" />
              <Unit value={time.seconds} label="Seconds" />
            </div>
          )}
          <p className="count-note">Counting to 12 January 2027, 12:00 AM (India Standard Time)</p>
        </Reveal>
      </div>
    </section>
  );
}
