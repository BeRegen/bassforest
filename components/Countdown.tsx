import React, { useState, useEffect } from 'react';

const EVENT_DATE = new Date('2026-06-05T00:00:00Z').getTime();
const STARTING_SOON_THRESHOLD = 5 * 60 * 1000; // 5 minutos

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLive, setIsLive] = useState(false);
  const [isStartingSoon, setIsStartingSoon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = EVENT_DATE - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsLive(true);
        return;
      }

      if (distance <= STARTING_SOON_THRESHOLD) {
        setIsStartingSoon(true);
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({
    value,
    label,
  }) => (
    <div className="flex flex-col items-center">
      <div className="bg-forest-950 border border-neon-green/40 rounded-xl px-6 py-5 w-full flex items-center justify-center shadow-[0_0_14px_rgba(57,255,20,0.2)]">
        <span className="text-3xl md:text-5xl font-display font-black text-white tabular-nums tracking-wide">
          {value.toString().padStart(2, '0')}
        </span>
      </div>

      {/* Label — estilo bonito original */}
      <span className="mt-3 text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-forest-300">
        {label}
      </span>
    </div>
  );

  /* ================= LIVE ================= */
  if (isLive) {
    return (
      <div className="relative z-20 isolate mt-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-700">
        <span className="text-neon-green font-display font-black text-4xl md:text-6xl tracking-widest mb-8">
          LIVE NOW
        </span>

        <a
          href="#join-event"
          className="
            bg-neon-green
            text-forest-950
            font-display font-black
            px-12 py-5
            rounded-full
            text-lg
            transition-all
            shadow-[0_0_35px_rgba(57,255,20,0.55)]
            animate-pulse
            hover:bg-emerald-400
          "
        >
          JOIN EVENT
        </a>

        <p className="mt-4 text-sm text-gray-400">
          The Bass Forest livestream is happening now
        </p>
      </div>
    );
  }

  /* ================= COUNTDOWN ================= */
  return (
    <div
      className="
        relative
        isolate
        z-20
        mt-10
        pb-24
        flex justify-center gap-6
        md:gap-10
        animate-in fade-in zoom-in duration-1000
      "
    >
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <TimeUnit value={timeLeft.minutes} label="MINUTES" />
      <TimeUnit value={timeLeft.seconds} label="SECONDS" />

      {/* Starting Soon */}
      {isStartingSoon && (
        <div className="col-span-2 mt-6 text-center">
          <span className="text-neon-green font-display font-bold uppercase tracking-widest animate-pulse">
            Starting Soon
          </span>
        </div>
      )}
    </div>
  );
};

export default Countdown;
