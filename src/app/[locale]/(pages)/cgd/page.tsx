import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Globe, Compass, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CGD | WZIS',
  description: 'Cultural Global Development - Experiential learning through travel, service, and cross-cultural engagement at Weihai International School.',
};

export default function CGDPage() {
  const pillars = [
    {
      title: 'Cultural Awareness',
      description: 'Understanding diverse cultures, traditions, and perspectives through immersive experiences.',
      icon: Globe,
    },
    {
      title: 'Global Citizenship',
      description: 'Developing responsibility as members of a global community through service and engagement.',
      icon: Heart,
    },
    {
      title: 'Personal Growth',
      description: 'Building resilience, independence, and self-confidence through travel and new experiences.',
      icon: Compass,
    },
    {
      title: 'Leadership Development',
      description: 'Cultivating servant leadership skills through real-world challenges and teamwork.',
      icon: Users,
    },
  ];

  const journey = [
    {
      stage: 'Grades 1-3',
      title: 'Local Discovery',
      description: 'Exploring Weihai and surrounding areas, cultural field trips',
      color: 'bg-accent-soft',
      borderColor: 'border-blue-300',
    },
    {
      stage: 'Grades 4-5',
      title: 'Regional Exploration',
      description: 'Extended trips within Shandong province, cultural exchanges',
      color: 'bg-accent-soft',
      borderColor: 'border-teal-300',
    },
    {
      stage: 'Grades 6-8',
      title: 'National Experience',
      description: 'Multi-day trips across China, service projects, cultural immersion',
      color: 'bg-emerald-50',
      borderColor: 'border-emerald-300',
    },
    {
      stage: 'Grades 9-12',
      title: 'Global Engagement',
      description: 'International travel, service learning, cross-cultural partnerships',
      color: 'bg-purple-50',
      borderColor: 'border-purple-300',
    },
  ];

  const stats = [
    { value: '17+', label: 'Years of CGD' },
    { value: '4', label: 'Countries Visited' },
    { value: '100+', label: 'Service Projects' },
    { value: '500+', label: 'Students Impacted' },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy via-navy to-navy">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Cultural Global Development
          </h1>
          <p className="text-lg sm:text-xl text-text-brand-light max-w-3xl mx-auto">
            Experiential learning through travel, service, and cross-cultural engagement
          </p>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-6">
              What is CGD?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              CGD is WZIS's signature experiential learning program. Students engage in cultural immersion, community service, and global travel experiences that build empathy, leadership, and cross-cultural understanding. CGD runs from Grade 1 through Grade 12, creating a continuum of growth and development across our entire school community.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-5">
                      <IconComponent className="w-12 h-12 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-navy mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CGD JOURNEY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
              CGD Journey: Grades 1-12
            </h2>
            <p className="text-lg text-gray-700">
              A progressive curriculum of growth and global engagement
            </p>
          </div>

          <div className="space-y-6">
            {journey.map((stage, idx) => (
              <div key={idx} className={`${stage.color} border-l-4 ${stage.borderColor} rounded-lg p-8 transition-transform hover:scale-105`}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white border-2 border-gray-400">
                      <span className="text-sm font-bold text-navy">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-1">
                      {stage.stage}
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-navy mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              CGD Impact by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl font-serif font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-text-brand-light font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-8">
            Begin Your CGD Journey
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Discover how WZIS develops global citizens and empowered leaders through experiential learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-block px-8 py-3 bg-white text-accent font-bold rounded-lg hover:bg-accent-soft transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-navy text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Learn More About WZIS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
