import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Users, Award, Heart, Zap, Globe } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Zhongshi Sports Academy (ZSA) | WZIS Eagles',
  description:
    'Zhongshi Sports Academy (ZSA) — competitive baseball and volleyball programs rooted in discipline, teamwork, and excellence. Training the next generation of student-athletes in Weihai, China.',
  openGraph: {
    title: 'Zhongshi Sports Academy — ZSA Eagles',
    description:
      'Competitive baseball and volleyball programs building discipline, teamwork, and excellence in Weihai, China.',
  },
};

const sportsPrograms = [
  {
    title: 'Baseball',
    description: 'Professional coaching, regional league competition, and skills development from fundamentals to advanced play.',
    details: [
      'Professional coaching staff',
      'Regional league competition',
      'Mon/Wed/Fri training after school',
      'Skills development progression',
    ],
    icon: Trophy,
    accentColor: 'from-blue-100 to-blue-50',
    image: '/images/zsa-baseball-team.jpeg',
    imageAlt: 'ZSA Baseball Team',
  },
  {
    title: 'Volleyball',
    description: 'Competitive team training with boys and girls teams. Lingang Tournament champions bringing excellence to the court.',
    details: [
      'Boys and girls teams',
      'Tue/Thu training after school',
      'Lingang Tournament champions',
      'Competitive tournaments',
    ],
    icon: Users,
    accentColor: 'from-orange-100 to-orange-50',
    image: '/images/volleyball-match.jpeg',
    imageAlt: 'Volleyball Match',
  },
];

const galleryPhotos = [
  { src: '/images/baseball-practice-field.jpeg', alt: 'Baseball Practice' },
  { src: '/images/baseball-catcher.jpeg', alt: 'Baseball Catcher' },
  { src: '/images/volleyball-huddle.jpeg', alt: 'Volleyball Huddle' },
  { src: '/images/volleyball-girls-coach.jpeg', alt: 'Girls Volleyball' },
  { src: '/images/volleyball-boys-korea.jpeg', alt: 'Boys Team in Korea' },
];

const facilities = [
  {
    title: 'Baseball Diamond',
    description: 'Full-size field with dugouts and modern amenities',
    icon: Trophy,
  },
  {
    title: 'Indoor Gymnasium',
    description: 'Multi-purpose facility for year-round training',
    icon: Zap,
  },
  {
    title: 'Volleyball Courts',
    description: 'Professional-grade courts for competition and practice',
    icon: Users,
  },
  {
    title: 'Outdoor Sports Field',
    description: 'Expansive open area for various athletic activities',
    icon: Globe,
  },
  {
    title: 'Weight Room',
    description: 'Equipped training area for strength and conditioning',
    icon: Award,
  },
  {
    title: 'Training Facilities',
    description: 'Modern equipment supporting athletic development',
    icon: Heart,
  },
];

const coreValues = [
  {
    title: 'Discipline',
    description: 'Commitment to training, improvement, and personal excellence through consistent effort',
    icon: Award,
  },
  {
    title: 'Teamwork',
    description: 'Collaboration, communication, and mutual support both on and off the field',
    icon: Users,
  },
  {
    title: 'Excellence',
    description: 'Pursuit of greatness in competition, sportsmanship, and personal development',
    icon: Trophy,
  },
  {
    title: 'Sportsmanship',
    description: 'Respect for opponents, coaches, and the game—winning and losing with character',
    icon: Heart,
  },
];

export default function SportsAcademyPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/baseball-practice-field.jpeg"
        title="Zhongshi Sports Academy"
        subtitle="ZSA Eagles — competitive athletics rooted in discipline, teamwork, and excellence"
      />

      {/* Academy Overview */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              About ZSA Eagles
            </h2>
            <p className="text-lg text-text-brand-light leading-relaxed">
              The Zhongshi Sports Academy (ZSA) is WZIS's competitive athletics program, providing professional coaching and training in baseball and volleyball. Our Eagles compete in regional and national tournaments, building champions both in sport and in character. Open to students across all grades, ZSA emphasizes excellence, teamwork, and the pursuit of athletic greatness.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Badge variant="accent">Competitive Athletics</Badge>
              <Badge variant="navy">ZSA Eagles</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Programs */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Our Sports Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sportsPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
                >
                  <div className="relative h-56 md:h-64">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-navy">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-text-brand-light mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <ul className="space-y-3">
                      {program.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-navy-mid"
                        >
                          <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Gallery */}
      <section className="w-full bg-accent-soft py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            ZSA Eagles in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative h-48 md:h-56 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
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

      {/* Junior Program */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-accent-soft to-white border border-accent/20">
            <div className="h-1 bg-accent" />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-accent" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
                  Junior Athletics &amp; Sports Day
                </h2>
              </div>
              <p className="text-text-brand-light text-lg leading-relaxed mb-6">
                Our junior athletics programs and annual Sports Day introduce primary students to the fundamentals of sports and physical activity. Through fun, engaging instruction, young athletes build confidence, coordination, and a love for movement that lasts a lifetime.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="accent">Youth Development</Badge>
                <Badge variant="navy">Fundamentals</Badge>
                <Badge variant="navy">Fun & Community</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="w-full bg-navy py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white text-center mb-12 md:mb-16">
            World-Class Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {facility.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="h-full flex flex-col">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-navy-mid flex-grow leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join the ZSA Eagles"
        subtitle="Become part of our competitive athletics program and develop excellence through sport, teamwork, and character. Apply today to start your athletic journey."
        primaryButton={{ label: 'Explore Admissions', href: '/admissions' }}
        secondaryButton={{ label: 'Learn About Athletics', href: '/athletics' }}
      />
    </main>
  );
}
