type BadgeProps = {
  children: React.ReactNode;
  variant?: 'accent' | 'navy' | 'warm';
  className?: string;
};

const badgeVariants = {
  accent: 'bg-accent/10 text-accent',
  navy: 'bg-navy/10 text-navy',
  warm: 'bg-warm text-text-brand',
};

export default function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  return (
    <span className={'inline-block px-3 py-1 rounded-full text-sm font-medium ' + badgeVariants[variant] + ' ' + className}>
      {children}
    </span>
  );
}
