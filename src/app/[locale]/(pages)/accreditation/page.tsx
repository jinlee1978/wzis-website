import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Globe, Award, TrendingUp, Users, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accreditation | WASC, ACSI & Cambridge International',
  description:
    'WZIS is accredited by WASC (Western Association of Schools and Colleges), ACSI, and Cambridge International. Internationally recognized quality assurance for your child\'s education at Weihai Zhongshi International School, China.',
  openGraph: {
    title: 'WZIS Accreditation — WASC, ACSI & Cambridge International',
    description:
      'Triple-accredited international school in Weihai, China. WASC, ACSI, and Cambridge International recognized.',
  },
};

export default function AccreditationPage() {
  const accreditations = [
    {
      title: 'WASC',
      fullName: 'Western Association of Schools and Colleges',
      description: 'US-based accrediting body recognized worldwide. Ensures rigorous academic standards and continuous school improvement.',
      since: '2010',
      icon: Award,
    },
    {
      title: 'ACSI',
      fullName: 'ACSI',
      description: 'Global network of schools committed to academic excellence and character development. Provides professional development and curriculum resources.',
      since: '2012',
      icon: Users,
    },
    {
      title: 'Cambridge International',
      fullName: 'Cambridge Assessment International Education',
      description: 'WZIS is an authorized Cambridge school offering Primary, Lower Secondary, IGCSE, and A-Level programs. Official SAT Test Center.',
      since: '2008',
      icon: Globe,
    },
  ];

  const benefits = [
    {
      title: 'Global Recognition',
      description: 'Transcripts and diplomas accepted worldwide',
      icon: Globe,
    },
    {
      title: 'Quality Assurance',
      description: 'Regular external evaluations ensure high standards',
      icon: CheckCircle,
    },
    {
      title: 'University Acceptance',
      description: 'Streamlined applications to top universities',
      icon: Award,
    },
    {
      title: 'Continuous Improvement',
      description: 'Schools must show ongoing improvement',
      icon: TrendingUp,
    },
    {
      title: 'Professional Teachers',
      description: 'Qualified, certified educators',
      icon: Users,
    },
    {
      title: 'International Curriculum',
      description: 'Globally benchmarked academic programs',
      icon: BookOpen,
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy via-navy to-navy">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Accreditation & Recognition
          </h1>
          <p className="text-lg sm:text-xl text-text-brand-light max-w-3xl mx-auto">
            Internationally recognized quality assurance for your child's education
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-6">
              Why Accreditation Matters
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Accreditation ensures our school meets rigorous international standards. It means our programs, teaching, and student outcomes are regularly evaluated by independent bodies. This commitment to external accountability demonstrates our dedication to educational excellence and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* ACCREDITATION CARDS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accreditations.map((accred, idx) => {
              const IconComponent = accred.icon;
              return (
                <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-10 h-10 text-accent mr-3" />
                      <h3 className="text-2xl font-serif font-bold text-navy">{accred.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 font-sans mb-4">{accred.fullName}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {accred.description}
                    </p>
                    <div className="pt-4 border-t border-accent-soft">
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-navy">WZIS Accredited Since:</span> {accred.since}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
              What Accreditation Means for You
            </h2>
            <p className="text-lg text-gray-700">
              Benefits of choosing an accredited international school
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div key={idx} className="bg-accent-soft rounded-lg p-8 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-navy mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-8">
            Explore Our Accredited Programs
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/academics"
              className="inline-block px-8 py-3 bg-white text-navy font-bold rounded-lg hover:bg-accent-soft transition-colors"
            >
              View Academics
            </Link>
            <Link
              href="/admissions"
              className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-warm transition-colors"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
