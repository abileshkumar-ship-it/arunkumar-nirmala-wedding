import { useEffect, useState } from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function calculate(targetMs) {
  const diff = targetMs - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isDone: true };
  }
  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
    isDone: false,
  };
}

/**
 * Counts down to an ISO timestamp (with offset), updating every second.
 * The interval is cleared on unmount, or once the target is reached.
 */
export function useCountdown(targetIso) {
  const targetMs = new Date(targetIso).getTime();
  const [time, setTime] = useState(() => calculate(targetMs));

  useEffect(() => {
    setTime(calculate(targetMs));
    const id = setInterval(() => {
      const next = calculate(targetMs);
      setTime(next);
      if (next.isDone) clearInterval(id);
    }, SECOND);
    return () => clearInterval(id);
  }, [targetMs]);

  return time;
}

export default useCountdown;
