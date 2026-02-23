type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
};

export default function Card({ children, className = '', hover = true, style }: CardProps) {
  const hoverClasses = hover ? 'hover:-translate-y-1 hover:shadow-glow' : '';
  return (
    <div className={'bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden ' + hoverClasses + ' ' + className} style={style}>
      {children}
    </div>
  );
}
