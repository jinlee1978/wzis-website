'use client';

import { useEffect, useRef, useState } from 'react';

type StatItem = {
  value: string;
  label: string;
};

type StatsSectionProps = {
  stats: StatItem[];
  className?: string;
};

export default function StatsSection({ stats, className = '' }: StatsSectionProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={'py-16 bg-navy text-white ' + className} ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={visible ? 'animate-fadeUp' : 'opacity-0'}
              style={{ animationDelay: (i * 0.15) + 's' }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-soft mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
