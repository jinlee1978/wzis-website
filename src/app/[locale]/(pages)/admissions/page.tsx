import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Mail, Phone, MessageSquare, MapPin } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { admissionsFaqSchema, breadcrumbSchema } from '@/lib/schemas';

export const metadata = {
  title: 'Admissions | Apply to WZIS',
  description:
    'Apply to Weihai Zhongshi International School. Learn about our admissions process, required documents, tuition fees, grade placement, and visa support for Korean and international families. Pre-K through Grade 12 enrollment open.',
  openGraph: {
    title: 'WZIS Admissions — Apply to Our International School in Weihai',
    description:
      'Step-by-step admissions process, required documents, tuition information, and enrollment for international families.',
  },
};

export default function AdmissionsPage() {
  const admissionsSteps = [
    {
      phase: 'Before Enrollment',
      steps: [
        {
          number: 1,
          title: 'Admissions Consultation',
          description: 'Contact Andy Kim to discuss your child\'s educational journey and WZIS programs',
        },
        {
          number: 2,
          title: 'Create Group Chat',
          description: 'Join our WeChat or KakaoTalk group for ongoing communication and updates',
        },
        {
          number: 3,
          title: 'Submit Application',
          description: 'Complete and submit the application form with required documents',
        },
        {
          number: 4,
          title: 'Interview',
          description: 'Meet with parents and student to assess fit and discuss educational goals',
        },
        {
          number: 5,
          title: 'Approval Confirmation',
          description: 'Receive acceptance confirmation and enrollment details',
        },
        {
          number: 6,
          title: 'Invoice & Letter',
          description: 'Obtain formal acceptance letter and payment invoice',
        },
      ],
    },
    {
      phase: 'After Enrollment',
      steps: [
        {
          number: 7,
          title: 'Placement Test & Orientation',
          description: 'Complete placement assessments and attend school orientation',
        },
        {
          number: 8,
          title: 'Administrative Steps',
          description: 'Complete enrollment paperwork, uniforms, and access setup',
        },
        {
          number: 9,
          title: 'Enrollment Complete',
          description: 'Welcome to WZIS! Begin your academic journey with us',
        },
      ],
    },
  ];

  const requiredDocuments = [
    {
      title: 'New Admission to Y1/G1',
      documents: [
        'Application Form',
        'Passport Copy (student & parents)',
        'Certificate of Family Relations',
      ],
    },
    {
      title: 'Transfer Students (G2+)',
      documents: [
        'Application Form',
        'Passport Copy (student & parents)',
        'Certificate of Family Relations',
        'Current School Enrollment Certificate (Original)',
        'School Records (Past 3 years)*',
      ],
      notes: '*G1 no records required. G5+ records from G2-G4. G8+ records from G5-G7.',
    },
    {
      title: 'Important Notes',
      documents: [
        'Passport must have 18 months validity',
        'Photos acceptable first, originals after enrollment',
      ],
    },
  ];

  const tuitionTable = [
    { grade: 'Preschool Y1 (Age 4-5)', tuition: '30,000' },
    { grade: 'Primary G1-2', tuition: '44,000' },
    { grade: 'Primary G3-5', tuition: '48,000' },
    { grade: 'Middle G6-8', tuition: '54,000' },
    { grade: 'High G9-12', tuition: '60,000' },
  ];

  const mandatoryFees = [
    { name: 'Admission Fee (first time)', grades: 'Y1-G12', amount: '6,000' },
    { name: 'Capital Fee', grades: 'Y1-G12', amount: '1,000' },
    { name: 'Lunch Fee (89 days)', grades: 'Y1-G2', amount: '2,225' },
    { name: 'Lunch Fee (89 days)', grades: 'G3-G5', amount: '2,670' },
    { name: 'Lunch Fee (89 days)', grades: 'G6-G12', amount: '3,115' },
    { name: 'Lunch Fee (5 days)', grades: 'Y1-G2', amount: '125' },
    { name: 'Lunch Fee (5 days)', grades: 'G3-G5', amount: '150' },
    { name: 'Lunch Fee (5 days)', grades: 'G6-G12', amount: '175' },
    { name: 'Dinner Fee (89 days)', grades: 'G6-G12', amount: '3,115' },
    { name: 'Dinner Fee (5 days)', grades: 'G6-G12', amount: '175' },
    { name: 'Dormitory', grades: 'G6-G12', amount: '7,000' },
    { name: 'School Bus (Optional/month)', grades: 'All', amount: '800' },
    { name: 'Cambridge Exam (IGCSE/A-Level)', grades: 'G10-G12', amount: 'Varies' },
    { name: 'SAT/TOEFL Registration', grades: 'G10-G12', amount: 'Varies' },
    { name: 'Uniform', grades: 'All', amount: 'Varies' },
    { name: 'Textbooks', grades: 'All', amount: 'Varies' },
  ];

  const optionalFees = [
    { name: 'Musical Instrument Lesson (Group)', description: '30 weeks, 1hr/week', amount: '3,000-5,000' },
    { name: 'Musical Instrument Lesson (Private)', description: '30 weeks, 1hr/week', amount: '5,000-8,000' },
    { name: 'Orchestra Program', description: 'Includes instrument rental', amount: '2,500' },
    { name: 'Sports Academy Baseball', description: 'After school, Mon/Wed/Fri', amount: '2,500' },
    { name: 'Sports Academy Volleyball', description: 'After school, Tue/Thu', amount: '2,500' },
    { name: 'Swimming', description: '30 weeks, includes pool pass', amount: '2,500' },
  ];

  const gradeLevels = [
    { year: 'Year 1', birthYear: '2020-2021', age: '4-5' },
    { year: 'Grade 1', birthYear: '2019-2020', age: '5-6' },
    { year: 'Grade 2', birthYear: '2018-2019', age: '6-7' },
    { year: 'Grade 3', birthYear: '2017-2018', age: '7-8' },
    { year: 'Grade 4', birthYear: '2016-2017', age: '8-9' },
    { year: 'Grade 5', birthYear: '2015-2016', age: '9-10' },
    { year: 'Grade 6', birthYear: '2014-2015', age: '10-11' },
    { year: 'Grade 7', birthYear: '2013-2014', age: '11-12' },
    { year: 'Grade 8', birthYear: '2012-2013', age: '12-13' },
    { year: 'Grade 9', birthYear: '2011-2012', age: '13-14' },
    { year: 'Grade 10', birthYear: '2010-2011', age: '14-15' },
    { year: 'Grade 11', birthYear: '2009-2010', age: '15-16' },
    { year: 'Grade 12', birthYear: '2008-2009', age: '16-17' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionsFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema('Admissions', 'https://wzis.org/admissions')) }}
      />
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/weihai-mall-shop.jpeg"
        title="Admissions"
        subtitle="Begin your journey at WZIS — where every BoBae matters"
      />

      {/* Admissions Process Timeline */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-16">
            Admissions Process
          </h2>

          {admissionsSteps.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-serif font-bold text-accent mb-8 text-center">
                {phase.phase}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="bg-gradient-to-br from-warm to-white p-8 rounded-lg border border-gray-brand-light hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-serif font-bold text-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-navy mb-2">
                          {step.title}
                        </h4>
                        <p className="text-navy-mid text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Card - Start Your Journey */}
      <section className="w-full bg-navy py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-gradient-to-br from-navy-mid to-navy border border-accent/20 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 text-center">
              Start Your Journey
            </h2>
            <p className="text-accent text-center mb-8 font-semibold">
              Contact Our Admissions Team
            </p>

            <div className="bg-white/10 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Andy Kim</h3>
              <p className="text-accent font-semibold text-sm mb-6">Vice Principal</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm">WeChat</p>
                    <p className="text-white font-semibold">Andy_pku</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm">KakaoTalk</p>
                    <p className="text-white font-semibold">andypku</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm">Korea</p>
                    <p className="text-white font-semibold">010.8750.8090</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm">China</p>
                    <p className="text-white font-semibold">186.1405.8090</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button href="mailto:info@zkis.org" variant="primary" size="md" className="flex-1">
                Send Email
              </Button>
              <Button href="/contact" variant="outline" size="md" className="flex-1">
                Contact Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-16">
            Required Documents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requiredDocuments.map((docGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-navy mb-6 pb-4 border-b border-gray-brand-light">
                  {docGroup.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {docGroup.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-navy-mid text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
                {docGroup.notes && (
                  <div className="bg-accent-soft/30 p-4 rounded-lg border border-accent-soft">
                    <p className="text-xs text-navy-mid">{docGroup.notes}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition and Fees */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-16">
            Tuition and Fees (SY2025-2026)
          </h2>

          <div className="space-y-12">
            {/* Tuition Table */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Tuition (Per Semester, RMB)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="border border-navy-light px-4 py-3 text-left font-semibold">
                        Grade Level
                      </th>
                      <th className="border border-navy-light px-4 py-3 text-right font-semibold">
                        Per Semester
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuitionTable.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-warm' : 'bg-white'}
                      >
                        <td className="border border-gray-brand-light px-4 py-3 text-navy font-medium">
                          {row.grade}
                        </td>
                        <td className="border border-gray-brand-light px-4 py-3 text-right text-navy font-semibold">
                          ¥{row.tuition}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-navy-mid mt-4">
                <span className="font-semibold">Note:</span> RMB accepted; USD equivalent accepted at current exchange rate.
              </p>
            </div>

            {/* Mandatory Fees Table */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Mandatory Fees (Per Semester, RMB)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="border border-navy-light px-4 py-3 text-left font-semibold">
                        Fee Type
                      </th>
                      <th className="border border-navy-light px-4 py-3 text-left font-semibold">
                        Grade(s)
                      </th>
                      <th className="border border-navy-light px-4 py-3 text-right font-semibold">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mandatoryFees.map((fee, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-warm' : 'bg-white'}
                      >
                        <td className="border border-gray-brand-light px-4 py-3 text-navy font-medium">
                          {fee.name}
                        </td>
                        <td className="border border-gray-brand-light px-4 py-3 text-navy-mid text-sm">
                          {fee.grades}
                        </td>
                        <td className="border border-gray-brand-light px-4 py-3 text-right text-navy font-semibold">
                          {fee.amount === 'Varies' ? 'Varies' : '¥' + fee.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Optional Fees Table */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Optional Fees (Per Semester, RMB)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="border border-navy-light px-4 py-3 text-left font-semibold">
                        Program
                      </th>
                      <th className="border border-navy-light px-4 py-3 text-left font-semibold">
                        Details
                      </th>
                      <th className="border border-navy-light px-4 py-3 text-right font-semibold">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {optionalFees.map((fee, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-warm' : 'bg-white'}
                      >
                        <td className="border border-gray-brand-light px-4 py-3 text-navy font-medium">
                          {fee.name}
                        </td>
                        <td className="border border-gray-brand-light px-4 py-3 text-navy-mid text-sm">
                          {fee.description}
                        </td>
                        <td className="border border-gray-brand-light px-4 py-3 text-right text-navy font-semibold">
                          ¥{fee.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts & Financial Info */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12">
            Discounts & Financial Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-xl">
                    10%
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Sibling Discount</h3>
                  <p className="text-navy-mid">
                    10% tuition discount for each additional sibling enrolled simultaneously
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-accent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-xl">
                    5%
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Early Payment Discount</h3>
                  <p className="text-navy-mid">
                    5% discount when full-year tuition paid before semester begins
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Grade Level Placement */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-16">
            Grade Level Placement (SY2025-2026)
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="border border-navy-light px-4 py-3 text-left font-semibold">
                    Grade Level
                  </th>
                  <th className="border border-navy-light px-4 py-3 text-left font-semibold">
                    Birth Year
                  </th>
                  <th className="border border-navy-light px-4 py-3 text-left font-semibold">
                    Age
                  </th>
                </tr>
              </thead>
              <tbody>
                {gradeLevels.map((grade, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-warm' : 'bg-white'}
                  >
                    <td className="border border-gray-brand-light px-4 py-3 text-navy font-semibold">
                      {grade.year}
                    </td>
                    <td className="border border-gray-brand-light px-4 py-3 text-navy-mid">
                      {grade.birthYear}
                    </td>
                    <td className="border border-gray-brand-light px-4 py-3 text-navy-mid">
                      {grade.age}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-accent-soft/30 border border-accent-soft rounded-lg p-6">
            <p className="text-navy">
              <span className="font-semibold">Note:</span> Grade placement is based on birth year. Exceptions may be considered on a case-by-case basis.
            </p>
          </div>
        </div>
      </section>

      {/* Student Visa Section */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="bg-white border-2 border-accent">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-6">
              Student Visa Assistance
            </h2>
            <p className="text-navy-mid text-lg leading-relaxed mb-6">
              WZIS provides comprehensive support for international students navigating the visa application process. Our admissions team works closely with families to ensure smooth visa preparation, including documentation guidance and timely communication with immigration authorities.
            </p>
            <p className="text-navy-mid text-lg leading-relaxed mb-6">
              International students receive a formal admission letter and all necessary documentation to support their visa applications. We maintain open communication with families throughout the process to address any questions or requirements.
            </p>
            <div className="bg-accent-soft/20 border border-accent-soft rounded-lg p-6">
              <p className="text-navy font-semibold mb-2">Questions about visa preparation?</p>
              <p className="text-navy-mid text-sm mb-4">
                Contact Andy Kim at 010.8750.8090 (Korea) or 186.1405.8090 (China), or via WeChat (Andy_pku) and KakaoTalk (andypku).
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* School Address & Contact */}
      <section className="w-full bg-navy py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
            School Address & Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    42 East Jiang Su Road,<br />
                    International Port Economic and<br />
                    Technological Development District,<br />
                    Weihai City, Shandong Province,<br />
                    China 264-211
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-8 space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone (China)</h3>
                  <p className="text-white/80 text-sm">0631-599-6381</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone (Korea)</h3>
                  <p className="text-white/80 text-sm">070-7583-1742</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-white/80 text-sm">info@zkis.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Ready to Join the BoBae Family?
            </h2>
            <p className="text-lg text-navy-mid mb-10 leading-relaxed">
              Take the first step toward an exceptional international education. Connect with our admissions team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/admissions#contact" variant="primary" size="lg">
                Start Application
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
