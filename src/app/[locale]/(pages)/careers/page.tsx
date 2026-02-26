import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, DollarSign, BookOpen, Home, Users, Utensils, Award, Plane, MapPin, Mail } from 'lucide-react';
import CareerForm from '@/components/forms/CareerForm';
import { careersPageSchema, breadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Teaching Jobs at WZIS | International School Careers in China',
  description:
    'Join Weihai Zhongshi International School. We are hiring experienced teachers for Elementary, English, Math, Science, and PE positions. Competitive salary, furnished housing, tuition benefits, annual flights, and professional development in Weihai, China.',
  openGraph: {
    title: 'Teaching Careers at WZIS — International School Jobs in China',
    description:
      'Now hiring teachers. Competitive salary, furnished housing, tuition benefits, and professional development at a Cambridge International school in Weihai.',
  },
};

interface Job {
  id: string;
  title: string;
  details: string[];
  contact: string;
}

// TODO: Replace with Sanity CMS query
const jobs: Job[] = [
  {
    id: 'elementary-teacher',
    title: 'Elementary Teacher (Lower Years)',
    details: ['24 periods/week', 'Cambridge Primary Curriculum', 'ELL training preferred'],
    contact: 'jobs@zhongshischool.org',
  },
  {
    id: 'english-teacher',
    title: 'Middle & High School English Teacher',
    details: ['2-3 classes', 'CEFR-aligned UK curriculum', 'IGCSE', 'Small classes'],
    contact: 'jobs@zhongshischool.org',
  },
  {
    id: 'math-teacher',
    title: 'High School Mathematics Teacher',
    details: ['20 x 45-minute classes', 'IGCSE/A-Level preparation'],
    contact: 'jobs@zhongshischool.org',
  },
  {
    id: 'science-teacher',
    title: 'Middle & High School Science Teacher (Physical Sciences)',
    details: ['Chemistry and Physics', '20 x 45-minute classes'],
    contact: 'jobs@zhongshischool.org',
  },
  {
    id: 'pe-teacher',
    title: 'PE Teacher (Grades 3-12)',
    details: ['1-2 PE lessons per class', 'Badminton, soccer, basketball, baseball'],
    contact: 'jobs@zhongshischool.org',
  },
  {
    id: 'open-applications',
    title: 'Open Applications',
    details: ['Welcome applications from talented educators in all subject areas'],
    contact: 'jobs@zhongshischool.org',
  },
];

// TODO: Replace with Sanity CMS query
const benefits = [
  {
    id: 'salary',
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Attractive compensation packages competitive with international schools',
  },
  {
    id: 'cost-of-living',
    icon: Home,
    title: 'Cost of Living Advantage',
    description: 'Housing 70-80% lower than Shanghai, and overall living costs significantly reduced',
    featured: true,
  },
  {
    id: 'tuition',
    icon: BookOpen,
    title: 'Tuition-Free Education',
    description: 'Free tuition for your children at WZIS',
  },
  {
    id: 'housing',
    icon: Home,
    title: 'Housing Allowance',
    description: 'Generous housing allowance to support your accommodation needs',
  },
  {
    id: 'spouse',
    icon: Users,
    title: 'Spouse Employment',
    description: 'Support and assistance for spouse employment opportunities',
  },
  {
    id: 'meals',
    icon: Utensils,
    title: 'Free Transportation & Meals',
    description: 'Complimentary school meals and transportation benefits',
  },
  {
    id: 'development',
    icon: Award,
    title: 'Professional Development',
    description: 'Ongoing professional development programs and training opportunities',
  },
  {
    id: 'relocation',
    icon: MapPin,
    title: 'Relocation Assistance',
    description: 'Comprehensive support to help your family settle in Weihai',
  },
  {
    id: 'flights',
    icon: Plane,
    title: 'Flight Benefits',
    description: 'Annual flight allowances for home visits and travel',
  },
  {
    id: 'community',
    icon: Heart,
    title: 'Community & Recognition',
    description: 'Strong community support and recognition of your contributions',
  },
];

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema('Careers', 'https://wzis.org/careers')) }}
      />
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Career Opportunities at WZIS
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80">
              Join a vibrant community dedicated to shaping future leaders
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Join the vibrant community at WZIS, where we are dedicated to shaping future leaders
              through excellence in education and a nurturing, collaborative environment. We are
              seeking passionate educators who share our commitment to student success and
              innovative teaching practices.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 text-center">
            Current Openings
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            {/* TODO: Replace with dynamic content from Sanity CMS */}
            We are currently hiring for the following positions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-t-4 border-accent"
              >
                <h3 className="text-xl font-serif font-bold text-navy mb-4">{job.title}</h3>

                <ul className="space-y-2 mb-6">
                  {job.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">
                    For inquiries about this position:
                  </p>
                  <a
                    href={'mailto:' + job.contact}
                    className="inline-flex items-center gap-2 text-accent hover:text-navy font-semibold transition-colors"
                  >
                    <Mail size={18} />
                    {job.contact}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join WZIS Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 text-center">
            Why Join WZIS?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            {/* TODO: Replace with dynamic content from Sanity CMS */}
            We offer comprehensive benefits and a supportive environment for our educators.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              const containerClasses = benefit.featured
                ? 'lg:col-span-1 bg-gradient-to-br from-accent/10 to-accent/5 ring-2 ring-accent'
                : 'bg-gray-50';
              const titleClasses = benefit.featured
                ? 'text-accent'
                : 'text-navy';

              return (
                <div
                  key={benefit.id}
                  className={containerClasses + ' rounded-lg p-6 transition-all hover:shadow-md'}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-accent flex-shrink-0">
                      <IconComponent size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className={'text-lg font-serif font-bold mb-2 ' + titleClasses}>
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
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

      {/* Life in Weihai Section */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
            Life in Weihai
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-white/80">
              Weihai is one of China's most livable cities, known for its beautiful coastline,
              temperate climate, and high quality of life. With a strong expat community, excellent
              healthcare facilities, and numerous recreational opportunities, your family will enjoy
              a safe, welcoming, and enriching environment. The city offers a perfect balance between
              a thriving international community and authentic Chinese culture.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 text-center">
            Apply Now
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Submit your application below. Remember to attach your resume and send it to
            jobs@zhongshischool.org as well.
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
            {/* TODO: Replace with Sanity CMS integration if needed */}
            <CareerForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            We'd love to hear from you. Get in touch with us to learn more about opportunities at WZIS.
          </p>
          <a
            href="mailto:jobs@zhongshischool.org"
            className="inline-flex items-center gap-2 bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>
    </main>
    </>
  );
}
