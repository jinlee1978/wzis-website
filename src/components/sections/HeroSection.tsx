'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';

type HeroProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttons?: Array<{
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  overlay?: boolean;
  height?: 'full' | 'large' | 'medium';
};

const heights = {
  full: 'min-h-screen',
  large: 'min-h-[80vh]',
  medium: 'min-h-[60vh]',
};

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  buttons,
  overlay = true,
  height = 'large',
}: HeroProps) {
  return (
    <section className={'relative flex items-center justify-center overflow-hidden pt-[74px] ' + heights[height]}>
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
      )}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 animate-fadeUp">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center animate-fadeUp" style={{ animationDelay: '0.4s' }}>
            {buttons.map((btn, i) => (
              <Button key={i} href={btn.href} variant={btn.variant || 'primary'} size="lg">
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
