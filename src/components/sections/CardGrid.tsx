import Card from '@/components/ui/Card';
import Image from 'next/image';

type CardItem = {
  title: string;
  description: string;
  image?: string;
  href?: string;
  icon?: React.ReactNode;
};

type CardGridProps = {
  title?: string;
  subtitle?: string;
  items: CardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const columnClasses = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export default function CardGrid({ title, subtitle, items, columns = 3, className = '' }: CardGridProps) {
  return (
    <section className={'py-20 px-4 ' + className}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">{title}</h2>
            {subtitle && <p className="text-text-brand-light text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <div className={'grid gap-8 ' + columnClasses[columns]}>
          {items.map((item, i) => (
            <Card key={i} className="animate-fadeUp" hover>
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              )}
              <div className="p-6">
                {item.icon && <div className="text-accent mb-3">{item.icon}</div>}
                <h3 className="font-serif text-xl text-navy mb-2">{item.title}</h3>
                <p className="text-text-brand-light leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
