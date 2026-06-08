'use client';

import { useState } from 'react';
import { getUniversityLogo } from '@/lib/universityLogos';

type UniversityCardProps = {
  name: string;
  count?: number;
};

// Stop-words stripped when deriving a monogram fallback for schools without a logo.
const STOP_WORDS = new Set([
  'of',
  'the',
  'and',
  'university',
  'college',
  'institute',
  'national',
  'state',
  'global',
  'foreign',
  'studies',
  'womans',
]);

function monogram(name: string): string {
  const letters = name
    .replace(/[&.,]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !STOP_WORDS.has(w.toLowerCase()))
    .map((w) => w[0].toUpperCase());
  const initials = (letters.length ? letters : name.split(/\s+/).map((w) => w[0])).join('');
  return initials.slice(0, 3) || name.slice(0, 2).toUpperCase();
}

export default function UniversityCard({ name, count }: UniversityCardProps) {
  const logo = getUniversityLogo(name);
  const [showFallback, setShowFallback] = useState(!logo);

  return (
    <div className="group flex flex-col items-center rounded-xl border border-gray-brand-light bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft hover:shadow-md">
      <div className="flex h-16 w-full items-center justify-center">
        {showFallback ? (
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy font-serif text-base font-bold tracking-tight text-white">
            {monogram(name)}
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={`${name} logo`}
            loading="lazy"
            className="max-h-16 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
            onError={() => setShowFallback(true)}
          />
        )}
      </div>
      <p className="mt-4 font-serif text-base font-bold leading-tight text-navy">{name}</p>
      {count && count > 1 && (
        <p className="mt-1 font-sans text-xs font-medium text-text-brand-light">
          {count} acceptances
        </p>
      )}
    </div>
  );
}
