'use client';

type MarqueeStripProps = {
  items: string[];
};

export default function MarqueeStrip({ items }: MarqueeStripProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <section className="bg-navy py-6 overflow-hidden">
      <div className="relative flex animate-marquee">
        {duplicatedItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 whitespace-nowrap flex-shrink-0"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-white text-sm md:text-base font-medium">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
