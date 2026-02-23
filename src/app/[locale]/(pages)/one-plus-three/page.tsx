import Image from 'next/image';
import Link from 'next/link';
import { Users, BookOpen, Globe, ClipboardCheck, Award, Plane } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: '1 Plus 3 | WZIS',
  description: '1 Plus 3 University Pathway — One year of intensive preparation, three years at a world-class university.',
};

const whatIncluded = [
  {
    title: 'Personalized Mentorship',
    description: 'One-on-one guidance from experienced university counselors dedicated to your success.',
    icon: Users,
  },
  {
    title: 'A-Level Preparation',
    description: 'Intensive academic program aligned with university requirements and entrance standards.',
    icon: BookOpen,
  },
  {
    title: 'University Selection',
    description: 'Data-driven guidance on choosing the right university and program for your goals.',
    icon: Globe,
  },
  {
    title: 'Application Support',
    description: 'Essay writing, portfolio review, and comprehensive application management.',
    icon: ClipboardCheck,
  },
  {
    title: 'Interview Preparation',
    description: 'Mock interviews and presentation coaching to build confidence and communication skills.',
    icon: Award,
  },
  {
    title: 'Transition Support',
    description: 'Help with visa, housing, and settling into university life in your new city.',
    icon: Plane,
  },
];

const universityPlacements = [
  {
    region: 'South Korea',
    universities: [
      'Yonsei University (2 students)',
      'Korea University (1 student)',
      'Sungkyunkwan University (2 students)',
      'Sogang University (4 students)',
      'Hanyang University (3 students)',
      'Chung-Ang University (4 students)',
    ],
  },
  {
    region: 'International',
    universities: [
      'Rutgers University',
      'Stony Brook University',
      'University of Connecticut',
      'University of Nottingham',
      'University of Liverpool',
      'Chinese University of Hong Kong (CUHK)',
      'Hong Kong University of Science and Technology (HKUST)',
    ],
  },
];

const journeySteps = [
  {
    grade: 'Grade 10',
    phase: 'Foundation',
    highlights: [
      'Initial university exploration',
      'Academic strengthening',
      'Career interest assessment',
      'Foundation for future goals',
    ],
  },
  {
    grade: 'Grade 11',
    phase: 'Preparation',
    highlights: [
      'Standardized test prep (SAT/IELTS)',
      'University shortlisting',
      'Curriculum planning',
      'Profile development',
    ],
  },
  {
    grade: 'Grade 12',
    phase: 'Application',
    highlights: [
      'Intensive A-Levels',
      'University applications',
      'Interview preparation',
      'Final university selection',
    ],
  },
  {
    grade: 'University',
    phase: 'Launch',
    highlights: [
      'Begin your 3-year degree',
      'Transition support',
      'Ongoing mentorship',
      'Alumni network access',
    ],
  },
];

export default function OnePlusThreePage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/scholars-cup-boys-trophies.jpeg"
        title="1 Plus 3 University Pathway"
        subtitle="One year of intensive preparation. Three years at a world-class university."
      />

      {/* Program Overview */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              What is 1 Plus 3?
            </h2>
            <p className="text-lg text-navy-mid leading-relaxed">
              The 1 Plus 3 program is WZIS's dedicated university preparation pathway. Students spend one year (Grade 12) in intensive A-Level preparation with personalized mentorship, then transition to three years at a top global university. The program includes comprehensive academic counseling, university selection guidance, application support, and interview preparation to ensure each student finds the perfect fit for their ambitions and strengths.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="w-full bg-accent-soft py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIncluded.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold text-navy mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-navy-mid leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Class of 2025 University Placements */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Class of 2025 University Placements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {universityPlacements.map((placement, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy border-b-2 border-accent pb-4">
                  {placement.region}
                </h3>
                <div className="space-y-3">
                  {placement.universities.map((university, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-warm hover:bg-accent-soft transition-colors"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                      <p className="text-navy font-sans">{university}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/college-acceptance">
              <Button variant="secondary" size="lg">
                View Full College Acceptance Record
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Your 1 Plus 3 Journey */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Your 1 Plus 3 Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <div key={index}>
                <Card className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 pb-4 border-b-2 border-accent">
                      <h3 className="text-xl font-serif font-bold text-navy">
                        {step.grade}
                      </h3>
                      <p className="text-sm font-sans font-semibold text-accent mt-1">
                        {step.phase}
                      </p>
                    </div>
                    <ul className="space-y-2 flex-grow">
                      {step.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-navy-mid"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Plan Your University Journey"
        subtitle="Start your path to a world-class education with WZIS's 1 Plus 3 University Pathway. Let us guide you toward your academic and personal goals."
        primaryButton={{ label: 'Learn About Admissions', href: '/admissions' }}
        secondaryButton={{ label: 'Explore College Acceptance', href: '/college-acceptance' }}
      />
    </main>
  );
}
