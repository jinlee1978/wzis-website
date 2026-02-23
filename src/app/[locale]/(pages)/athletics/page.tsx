import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Users, Target, Zap } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Athletics | WZFS Eagles',
  description: 'WZFS Eagles athletics — competitive sports programs, interschool tournaments, and athletic achievement building character through competition and teamwork.',
};

const competitiveSports = [
  {
    title: 'Volleyball',
    description: 'ZSA Eagles compete in regional tournaments. Lingang Volleyball Tournament champions. After-school training Tue/Thu.',
    icon: Trophy,
  },
  {
    title: 'Athletic Achievement',
    description: 'Students compete in cross-country, track and field, and sports day events throughout the year.',
    icon: Target,
  },
  {
    title: "Scholar's Cup",
    description: 'BoBaes compete in the World Scholar\'s Cup academic tournaments, bringing home trophies from regional and global rounds.',
    icon: Users,
  },
  {
    title: 'Cross Country / Track',
    description: 'Annual cross-country events and track meets building endurance, discipline, and team spirit.',
    icon: Zap,
  },
];

const facilities = [
  {
    name: 'Indoor Gymnasium',
    icon: '🏀',
  },
  {
    name: 'Outdoor Sports Field',
    icon: '⚽',
  },
  {
    name: 'Swimming Pool',
    icon: '🏊',
  },
  {
    name: 'Baseball Diamond',
    icon: '⚾',
  },
  {
    name: 'Volleyball Courts',
    icon: '🏐',
  },
  {
    name: 'Running Track',
    icon: '🏃',
  },
];

export default function AthleticsPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/sports-ceremony.jpeg"
        title="WZFS Eagles Athletics"
        subtitle="Building character through competition, teamwork, and sportsmanship"
      />

      {/* Overview Section */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              Sports as Central to Our Experience
            </h2>
            <p className="text-lg text-navy-mid leading-relaxed">
              Athletics are integral to the WZFS Eagles experience. Our competitive programs and interschool tournaments bring together students to compete, collaborate, and grow. Through sports, our Eagles develop resilience, leadership, and the values of fair play and sportsmanship that define our community.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Sports Grid */}
      <section className="w-full bg-accent-soft py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Our Competitive Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveSports.map((sport, index) => {
              const IconComponent = sport.icon;
              return (
                <Card key={index} className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-navy pt-1">
                        {sport.title}
                      </h3>
                    </div>
                    <p className="text-navy-mid leading-relaxed flex-grow">
                      {sport.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Our Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-accent-soft hover:bg-accent hover:text-white transition-colors text-center"
              >
                <div className="text-4xl mb-3">{facility.icon}</div>
                <p className="text-sm font-sans font-semibold text-navy hover:text-white">
                  {facility.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports in Action Gallery */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Eagles in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/volleyball-boys-group.jpeg', alt: 'Volleyball Team' },
              { src: '/images/scholars-cup-girls-trophies.jpeg', alt: 'Scholar\'s Cup Winners' },
              { src: '/images/scholars-cup-stage.jpeg', alt: 'Students on Stage' },
              { src: '/images/students-moose-field-2.jpeg', alt: 'Students at Sports Day' },
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

      {/* CTA Section */}
      <CTASection
        title="Join the Eagles"
        subtitle="Be part of our athletic community and discover your potential"
        primaryButton={{ label: 'Admissions', href: '/admissions' }}
        secondaryButton={{ label: 'Sports Academy', href: '/sports-academy' }}
      />
    </main>
  );
}
