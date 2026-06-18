import Image from 'next/image';
import Link from 'next/link';
import { Music, Sparkles, Users, BookOpen, Heart, Brain } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Choir & Orchestra Music Program | WZIS',
  description:
    'WZIS Choir and Orchestra — nurturing creativity, discipline, and the joy of performance through comprehensive music education. Community performances and concerts at Weihai Zhongshi International School.',
  openGraph: {
    title: 'WZIS Choir & Orchestra Program',
    description:
      'Comprehensive music education, community performances, and ensemble programs at Weihai Zhongshi International School.',
  },
};

const ensembles = [
  {
    title: 'School Choir',
    description: 'Open to all grades, performing at school assemblies, community events, and the annual Christmas Festival.',
    icon: Music,
  },
  {
    title: 'Orchestra',
    description: 'String and wind ensembles performing at public venues including shopping malls, cultural centers, and school ceremonies.',
    icon: Music,
  },
  {
    title: 'Individual Lessons',
    description: 'Private and group instrument instruction available (piano, violin, guitar, cello, flute, and more).',
    icon: BookOpen,
  },
];

const performanceVenues = [
  'Zhongshi Christmas Festival',
  'Community Mall Performances',
  'Cultural Center Concerts',
  'School Assemblies and Ceremonies',
  'Regional Music Competitions',
  'TED x @WZIS Performances',
];

const musicBenefits = [
  {
    title: 'Character Development',
    description: 'Music builds discipline, perseverance, and self-confidence through dedicated practice and performance.',
    icon: Brain,
  },
  {
    title: 'Creative Expression',
    description: 'Students discover their unique voice and artistic identity through musical exploration and interpretation.',
    icon: Sparkles,
  },
  {
    title: 'Community Building',
    description: 'Ensemble work fosters collaboration, friendship, and a shared sense of purpose across diverse groups.',
    icon: Users,
  },
  {
    title: 'Academic Enhancement',
    description: 'Music education strengthens cognitive skills, memory, and academic performance across all subjects.',
    icon: Brain,
  },
];

export default function MusicPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/choir-mall-performance.jpeg"
        title="Choir & Orchestra"
        subtitle="Nurturing creativity, discipline, and the joy of performance"
      />

      {/* Program Overview */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              Our Performing Arts Program
            </h2>
            <p className="text-lg text-navy-mid leading-relaxed">
              WZIS offers a comprehensive music education including choir, orchestra, and individual instrument lessons. Students perform at school events, community venues, and regional competitions, developing not only musical excellence but also the confidence and artistry that shape well-rounded individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Ensembles Section */}
      <section className="w-full bg-accent-soft py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Our Ensembles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ensembles.map((ensemble, index) => {
              const IconComponent = ensemble.icon;
              return (
                <Card key={index} className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-navy pt-1">
                        {ensemble.title}
                      </h3>
                    </div>
                    <p className="text-navy-mid leading-relaxed flex-grow">
                      {ensemble.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Gallery */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Performance Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/choir-mall-performance.jpeg', alt: 'Choir performing at mall event' },
              { src: '/images/orchestra-mall-aerial.jpeg', alt: 'Aerial view of orchestra performance' },
              { src: '/images/orchestra-mall-christmas.jpeg', alt: 'Christmas Symphony performance at mall' },
            ].map((photo, i) => (
              <div
                key={i}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Opportunities */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Performance Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {performanceVenues.map((venue, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                <p className="text-navy font-sans text-lg">{venue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Music at WZIS */}
      <section className="w-full bg-accent-soft py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Why Music at WZIS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {musicBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold text-navy mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-navy-mid leading-relaxed flex-grow">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Music Program"
        subtitle="Discover your musical voice and become part of a vibrant performing arts community"
        primaryButton={{ label: 'Admissions', href: '/admissions' }}
        secondaryButton={{ label: 'Contact Us', href: '/contact' }}
      />
    </main>
  );
}
