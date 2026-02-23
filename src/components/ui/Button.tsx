import Link from 'next/link';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

const variants = {
  primary: 'bg-accent text-white hover:bg-accent/90 shadow-md hover:shadow-lg',
  secondary: 'bg-navy text-white hover:bg-navy-mid shadow-md hover:shadow-lg',
  outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  ghost: 'text-accent hover:bg-accent-glow',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 ' + variants[variant] + ' ' + sizes[size] + ' ' + className;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
