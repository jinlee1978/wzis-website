import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Globe, Users, Award, Zap, CheckCircle } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'HSK Program | WZIS',
  description: 'HSK Chinese Language Program — Master Mandarin in Weihai with native teachers and immersion learning.',
};

const hskLevels = [
  {
    level: 'HSK 1',
    title: 'Beginner',
    description: 'Understand basic phrases, introduce yourself.',
    vocabulary: '~150 words',
    icon: BookOpen,
  },
  {
    level: 'HSK 2',
    title: 'Elementary',
    description: 'Daily conversations, simple tasks.',
    vocabulary: '~300 words',
    icon: BookOpen,
  },
  {
    level: 'HSK 3',
    title: 'Intermediate',
    description: 'Travel, work, study in Chinese.',
    vocabulary: '~600 words',
    icon: BookOpen,
  },
  {
    level: 'HSK 4',
    title: 'Upper Intermediate',
    description: 'Fluent conversations on various topics.',
    vocabulary: '~1,200 words',
    icon: BookOpen,
  },
  {
    level: 'HSK 5',
    title: 'Advanced',
    description: 'Read Chinese newspapers, write essays.',
    vocabulary: '~2,500 words',
    icon: BookOpen,
  },
  {
    level: 'HSK 6',
    title: 'Mastery',
    description: 'Express ideas fluently, comprehend complex texts.',
    vocabulary: '~5,000+ words',
    icon: BookOpen,
  },
];

const immersionAdvantages = [
  {
    title: 'Daily Immersion',
    description: 'Living in a Chinese city means constant language practice in real-world contexts.',
    icon: Globe,
  },
  {
    title: 'Native Teachers',
    description: 'Learn from experienced Chinese language educators with deep cultural expertise.',
    icon: Users,
  },
  {
    title: 'Cultural Context',
    description: 'Understand language through authentic cultural experiences and community interaction.',
    icon: Award,
  },
  {
    title: 'Test Center',
    description: 'Take HSK exams right on campus with official certification.',
    icon: CheckCircle,
  },
];

const curriculumStructure = [
  {
    title: 'Primary School',
    grades: 'Grades 1-5',
    highlights: [
      'Foundational Mandarin',
      'Character writing',
      'Songs and games',
      'Phonetics and tone',
    ],
    colorClass: 'from-blue-100 to-blue-50',
    gradientBar: 'bg-gradient-to-r from-blue-400 to-blue-300',
  },
  {
    title: 'Middle School',
    grades: 'Grades 6-8',
    highlights: [
      'Conversational fluency',
      'HSK 3-4 preparation',
      'Cultural studies',
      'Reading and writing',
    ],
    colorClass: 'from-gray-100 to-gray-50',
    gradientBar: 'bg-gradient-to-r from-gray-400 to-gray-300',
  },
  {
    title: 'High School',
    grades: 'Grades 9-12',
    highlights: [
      'Academic Chinese',
      'HSK 5-6 preparation',
      'University readiness',
      'Advanced proficiency',
    ],
    colorClass: 'from-navy to-navy-mid',
    gradientBar: 'bg-gradient-to-r from-navy-mid to-navy',
  },
];

export default function HSKPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/weihai-sign.jpeg"
        title="HSK Chinese Language Program"
        subtitle="Master Mandarin in one of China's most livable cities"
      />

      {/* Program Overview */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              Why Choose WZIS for Chinese?
            </h2>
            <p className="text-lg text-navy-mid leading-relaxed">
              Living in Weihai provides daily immersion in Mandarin, giving students constant exposure to the language in authentic contexts. Our HSK program combines structured classroom instruction with real-world practice, allowing students to progress through official HSK certification levels with support from native Chinese teachers. WZIS is an authorized HSK test center, enabling students to take exams on campus with official certification.
            </p>
          </div>
        </div>
      </section>

      {/* HSK Levels Grid */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            HSK Certification Levels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hskLevels.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-serif font-bold text-accent">{item.level}</span>
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-navy-mid mb-4 flex-grow">
                      {item.description}
                    </p>
                    <p className="text-sm font-sans font-semibold text-accent">
                      {item.vocabulary}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Immersion Advantage */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            The Weihai Immersion Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {immersionAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold text-navy mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-navy-mid leading-relaxed flex-grow">
                      {advantage.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Curriculum Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculumStructure.map((division, index) => (
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

      {/* CTA Section */}
      <CTASection
        title="Start Your Chinese Language Journey"
        subtitle="Join WZIS and master Mandarin while experiencing authentic immersion in a vibrant Chinese community."
        primaryButton={{ label: 'Learn About Admissions', href: '/admissions' }}
        secondaryButton={{ label: 'Explore Academics', href: '/academics' }}
      />
    </main>
  );
}
