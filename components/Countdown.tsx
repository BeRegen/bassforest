import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-22T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-3 md:mx-5">

      {/* NUMBER CARD — sharp, no blur */}
      <div
        className="
          bg-forest-950
          border border-neon-green/40
          rounded-xl
          p-4 md:p-6
          min-w-[80px] md:min-w-[110px]
          flex items-center justify-center
          shadow-[0_0_12px_rgba(57,255,20,0.18)]
        "
      >
        <span
          className="
            text-3xl md:text-5xl
            font-display font-black
            text-white
            tabular-nums
            tracking-wide
          "
        >
          {value.toString().padStart(2, '0')}
        </span>
      </div>

      {/* LABEL — high contrast, no blur */}
      <span
        className="
          mt-4
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold
          uppercase
          tracking-[0.12em]
          text-white
          bg-forest-900
          border border-white/20
        "
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center mt-8 md:mt-12 animate-in fade-in zoom-in duration-1000">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
