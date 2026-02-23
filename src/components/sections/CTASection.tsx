import Button from '@/components/ui/Button';

type CTASectionProps = {
  title: string;
  subtitle?: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
  variant?: 'navy' | 'accent' | 'warm';
};

const bgVariants = {
  navy: 'bg-navy text-white',
  accent: 'bg-accent text-white',
  warm: 'bg-warm text-navy',
};

export default function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  variant = 'navy',
}: CTASectionProps) {
  const btnVariant = variant === 'warm' ? 'primary' : 'outline';
  return (
    <section className={'py-20 px-4 ' + bgVariants[variant]}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">{title}</h2>
        {subtitle && <p className="text-lg opacity-80 mb-8">{subtitle}</p>}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href={primaryButton.href} variant={variant === 'warm' ? 'primary' : 'secondary'} size="lg">
            {primaryButton.label}
          </Button>
          {secondaryButton && (
            <Button href={secondaryButton.href} variant={btnVariant} size="lg">
              {secondaryButton.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
