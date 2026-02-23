import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpen, Globe, Users, Zap, Music } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import StatsSection from '@/components/sections/StatsSection';

export const metadata = {
  title: 'Academics | WZIS',
  description: 'Cambridge International Curriculum - globally recognized education preparing students for top universities worldwide.',
};

const schoolDivisions = [
  {
    title: 'Primary School',
    grades: 'Grades 1-5',
    highlights: [
      'Cambridge Primary',
      'Strong foundations',
      'Character development',
      'Small class sizes',
    ],
    colorClass: 'from-blue-100 to-blue-50',
    gradientBar: 'bg-gradient-to-r from-blue-400 to-blue-300',
  },
  {
    title: 'Middle School',
    grades: 'Grades 6-8',
    highlights: [
      'Cambridge Lower Secondary',
      'Expanded subjects',
      'HSK prep',
      'Critical thinking',
      'CGD introduction',
    ],
    colorClass: 'from-gray-100 to-gray-50',
    gradientBar: 'bg-gradient-to-r from-gray-400 to-gray-300',
  },
  {
    title: 'High School',
    grades: 'Grades 9-12',
    highlights: [
      'IGCSE (Grades 9-10)',
      'A-Levels (Grades 11-12)',
      '1 Plus 3 mentorship',
      'University counseling',
      'SAT Test Center',
    ],
    colorClass: 'from-navy to-navy-mid',
    gradientBar: 'bg-gradient-to-r from-navy-mid to-navy',
  },
];

const signaturePrograms = [
  {
    title: 'Creative Thinking & Good Deeds',
    shortTitle: 'CGD',
    description: 'Creativity, gratitude, and emotional resilience through the Gratitude Olympics',
    href: '/cgd',
    icon: Globe,
  },
  {
    title: '1 Plus 3',
    shortTitle: '1 Plus 3',
    description: 'Dedicated mentorship pairing each bobae with a teacher for holistic support',
    href: '/one-plus-three',
    icon: Users,
  },
  {
    title: 'HSK Program',
    shortTitle: 'HSK',
    description: 'Chinese Proficiency — aligned with HSK certification standards',
    href: '/hsk',
    icon: BookOpen,
  },
  {
    title: 'Performing Arts',
    shortTitle: 'Choir & Orchestra',
    description: 'Music education with performance opportunities',
    href: '/music',
    icon: Music,
  },
];

const stats = [
  {
    value: '20',
    label: 'Years',
  },
  {
    value: '100+',
    label: 'Universities',
  },
  {
    value: '4',
    label: 'Continents',
  },
  {
    value: '15+',
    label: 'Countries',
  },
];

export default function AcademicsPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/2024_GraduatingClass_CapToss.webp"
        title="Cambridge International Curriculum"
        subtitle="Globally recognized, rigorous education preparing BoBaes for top universities worldwide"
      />

      {/* Curriculum Overview */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              Our Curriculum
            </h2>
            <p className="text-lg text-navy-mid leading-relaxed">
              WZIS offers the Cambridge International curriculum, one of the world's most respected
              educational frameworks. Our program spans from Primary through A-Levels, providing a
              seamless and rigorous academic journey. Accredited by WASC and ACSI, and an official
              SAT Test Center.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Badge variant="navy">WASC Accredited</Badge>
              <Badge variant="navy">ACSI Accredited</Badge>
              <Badge variant="accent">SAT Test Center</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* School Divisions */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            School Divisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schoolDivisions.map((division, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b ${division.colorClass}`}
              >
                <div className={`h-2 ${division.gradientBar}`} />
                <div className="p-6 md:p-8">
                  <h3 className={`text-2xl font-serif font-bold mb-2 ${
                    division.colorClass.includes('navy') ? 'text-white' : 'text-navy'
                  }`}>
                    {division.title}
                  </h3>
                  <p className={`text-sm font-sans font-semibold mb-6 ${
                    division.colorClass.includes('navy') ? 'text-white/70' : 'text-navy-light'
                  }`}>
                    {division.grades}
                  </p>
                  <ul className="space-y-3">
                    {division.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 text-sm ${
                          division.colorClass.includes('navy') ? 'text-white' : 'text-navy-mid'
                        }`}
                      >
                        <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                          division.colorClass.includes('navy') ? 'bg-accent' : 'bg-accent'
                        }`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Graduates Go */}
      <section className="w-full bg-navy py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Where Our Graduates Go
            </h2>
            <p className="text-navy-light text-lg max-w-2xl mx-auto">
              Our alumni attend prestigious universities across the world, with a legacy of
              excellence spanning multiple continents.
            </p>
          </div>
          <StatsSection stats={stats} />
          <div className="flex justify-center mt-10">
            <Link href="/college-acceptance">
              <Button variant="primary" size="lg">
                View College Acceptance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Programs */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Signature Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signaturePrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Link key={index} href={program.href} className="group">
                  <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft mb-4 group-hover:bg-accent transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-navy mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-navy-mid flex-grow">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                      Learn More
                      <span>→</span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Start Your Academic Journey"
        subtitle="Join WZIS and experience world-class education that prepares you for success at top universities worldwide."
        primaryButton={{ label: 'Apply Now', href: '/admissions' }}
      />
    </main>
  );
}
