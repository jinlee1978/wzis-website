import { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  Globe,
  ScrollText,
  Radio,
  GraduationCap,
  Briefcase,
  FileText,
  Stamp,
  AlertTriangle,
  Users,
  CalendarClock,
  Plane,
  Download,
  ExternalLink,
  ArrowLeft,
  Info,
} from 'lucide-react';
import { breadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Teacher Visa & Relocation Guide | WZIS',
  description:
    'Practical orientation for incoming WZIS teachers — Chinese visa pathways (X-Visa, Z-Visa), required documents, the Chain of Authentication, and what to expect during your first 30 days in Weihai.',
  openGraph: {
    title: 'Teacher Visa & Relocation Guide — WZIS',
    description:
      'A practical guide for incoming foreign teachers: Chinese visa pathways, document requirements, and your first 30 days in Weihai.',
  },
};

const PDF_HREF = '/resources/wzis-teacher-visa-blueprint.pdf';
const VIDEO_EMBED = 'https://www.youtube.com/embed/t_H1RD_oJ44';

const goldenRules = [
  {
    icon: Globe,
    title: 'Geography Dictates Policy',
    body: 'Visa regulations vary significantly depending on your home country and local Chinese embassy. What worked for a colleague may not apply to you. Always confirm current requirements with your local embassy.',
  },
  {
    icon: ScrollText,
    title: 'Precision is Absolute',
    body: 'Chinese bureaucratic standards are exacting. A single missing date or incorrect stamp will cause rejections. Strict compliance is non-negotiable.',
  },
  {
    icon: Radio,
    title: 'Relentless Communication',
    body: 'Our HR team is your guide. Send digital scans of every document for our review before paying for any official services or booking flights — letting us catch errors early saves time and money.',
  },
];

const coreDossier = [
  {
    icon: FileText,
    title: 'Passport & Photos',
    body: '12 months validity remaining and 2 blank pages. Digital photos on white background, 354×472 px, JPG, 40–120 KB, plus 2–4 printed copies.',
  },
  {
    icon: GraduationCap,
    title: 'Degree Certificate',
    body: "Bachelor's degree or higher. Original diploma required. Must undergo the full Chain of Authentication and be translated if not in English or Chinese.",
  },
  {
    icon: Briefcase,
    title: 'Work Experience Certificate',
    body: 'Must detail strictly post-graduation experience. Specific formatting matters — see the PDF for the full anatomy of a perfect work certificate.',
  },
  {
    icon: Stamp,
    title: 'Criminal Background Check',
    body: 'Issued by a national police or judicial authority within the last 6 months. Must be authenticated/apostilled.',
  },
  {
    icon: FileText,
    title: 'Medical Examination',
    body: 'Dated within 6 months. Must be from a Chinese-authority-approved clinic OR completed immediately after arrival in China.',
  },
  {
    icon: GraduationCap,
    title: 'TEFL / TESOL / CELTA',
    body: 'Required if your degree is not in education or you lack a teaching license. Must be 120+ hours.',
  },
];

const authChain = [
  {
    step: '1',
    title: 'Notarization',
    body: 'Your original document is authenticated by a registered Notary Public in the issuing country.',
  },
  {
    step: '2',
    title: 'Local Foreign Affairs',
    body: 'The notarized document is then stamped by your local, regional, or national Foreign Affairs office (or equivalent government body).',
  },
  {
    step: '3',
    title: 'Chinese Embassy',
    body: 'Finally, the Chinese Embassy or Consulate in your home country stamps and legalizes the verified document.',
  },
];

const redFlags = [
  {
    title: 'Same-Name Affidavit',
    body: "The names on your passport, degree, and background check must match exactly. If a name has changed (e.g., due to marriage), you must provide a notarized, authenticated Same-Name Affidavit.",
  },
  {
    title: 'Date Overlap',
    body: 'The dates on your Work Experience Certificates must have zero overlap with your academic study years — i.e., the work must demonstrably be post-graduation.',
  },
  {
    title: 'The 6-Month Expiration Trap',
    body: 'Criminal Background Checks and Medical Exams are only valid for 6 months. Do not acquire them too early in the process or they will expire before arrival.',
  },
];

const firstThirtyDays = [
  {
    label: 'Day 1',
    title: 'Arrival & Dormitory Registration',
    body: 'Enter China on your initial 1-month tourist (X) or work (Z) visa and settle in.',
  },
  {
    label: 'Within 2 weeks',
    title: 'Medical Check',
    body: 'The school will organize your official health examination at an approved local clinic.',
  },
  {
    label: 'Following days',
    title: 'Public Security Bureau (PSB) Visit',
    body: 'The school will escort you to the local PSB to have your official photo taken and to register your residency.',
  },
  {
    label: 'Mid-month',
    title: 'Visa Upgrade',
    body: 'Your initial 1-month visa is exchanged for a 1-year multiple-entry residence visa.',
  },
  {
    label: 'Day 30',
    title: 'Foreign Expert Certificate (FEC)',
    body: 'Z-Visa holders receive their FEC. For security reasons, the school normally holds this document, but it can be borrowed when necessary.',
  },
];

export default function VisaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema('Teacher Visa Guide', 'https://wzis.org/careers/visa-guide'),
          ),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-navy to-navy/90 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Careers
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                Teacher Visa & Relocation Guide
              </h1>
              <p className="text-lg md:text-xl font-light text-white/80">
                A practical orientation for incoming WZIS teachers — from offer letter to your first 30 days in Weihai.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                This guide walks you through the Chinese visa process for foreign teachers — which visa you need, what documents to prepare, how to authenticate them, and what to expect once you arrive. Our HR team partners with you at every step. The single most important thing you can do is <strong>send digital scans early</strong> so we can catch errors before you pay for any official services.
              </p>
            </div>
          </div>
        </section>

        {/* Video + PDF */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Video */}
              <div className="lg:col-span-2">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  Video Overview
                </h2>
                <div className="relative w-full rounded-lg overflow-hidden shadow-md bg-black" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={VIDEO_EMBED}
                    title="WZIS Teacher Visa & Relocation — Video Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="mt-3 text-xs text-gray-500 flex items-start gap-2">
                  <Info size={14} className="flex-shrink-0 mt-0.5" />
                  <span>
                    This overview was generated with Google NotebookLM as a quick orientation. For official requirements, refer to the PDF guide and contact <a href="mailto:careers@wzis.org" className="text-accent hover:underline">careers@wzis.org</a>.
                  </span>
                </p>
              </div>

              {/* PDF Download */}
              <div className="lg:col-span-1">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  Full PDF Guide
                </h2>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-navy/10 text-navy rounded-md p-2 flex-shrink-0">
                      <FileText size={22} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-navy text-lg leading-tight">
                        WZIS Teacher Visa Blueprint
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">PDF · 13 pages · ~15 MB</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">
                    Definitive diagnostic guide covering visa pathways, document specs, the Chain of Authentication, and arrival procedures.
                  </p>
                  <div className="space-y-2">
                    <a
                      href={PDF_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-accent hover:bg-opacity-90 text-white font-semibold py-2.5 px-4 rounded-md transition-all duration-200 text-sm"
                    >
                      <ExternalLink size={16} /> View PDF
                    </a>
                    <a
                      href={PDF_HREF}
                      download
                      className="inline-flex items-center justify-center gap-2 w-full border border-navy text-navy hover:bg-navy hover:text-white font-semibold py-2.5 px-4 rounded-md transition-all duration-200 text-sm"
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Golden Rules */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-3">
                Three Golden Rules
              </h2>
              <p className="text-gray-600">
                Internalize these before you start. They will save you weeks of frustration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {goldenRules.map((rule) => {
                const Icon = rule.icon;
                return (
                  <div
                    key={rule.title}
                    className="bg-gray-50 rounded-lg p-6 border-t-4 border-accent"
                  >
                    <div className="text-accent mb-4">
                      <Icon size={32} />
                    </div>
                    <h3 className="font-serif font-bold text-navy text-lg mb-2">
                      {rule.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{rule.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Visa Path Diagnostic */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-3">
                Which Visa Do You Need?
              </h2>
              <p className="text-gray-600">
                Two pathways exist for incoming teachers. Your post-qualification experience determines which one applies to you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-gray-400">
                <h3 className="font-serif font-bold text-navy text-xl mb-4">
                  Student Visa (X-Visa)
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-navy">Condition</dt>
                    <dd className="text-gray-700">Less than two years of post-qualification teaching experience.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Status</dt>
                    <dd className="text-gray-700">Entitles you to the same work privileges as a Work Visa.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Progression</dt>
                    <dd className="text-gray-700">Upgraded to a Z-Visa after completing two years of experience.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Dependents</dt>
                    <dd className="text-red-700 font-medium">Cannot bring dependents into China.</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-accent">
                <h3 className="font-serif font-bold text-navy text-xl mb-4">
                  Work Visa (Z-Visa)
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-navy">Condition</dt>
                    <dd className="text-gray-700">More than two years of post-qualification experience + Bachelor&apos;s Degree + full teaching certificate.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Status</dt>
                    <dd className="text-gray-700">Standard employment visa for experienced educators.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Progression</dt>
                    <dd className="text-gray-700">Requires an official Letter of Invitation with an Alien License Number prior to application.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Dependents</dt>
                    <dd className="text-gray-700">Can bring dependents (requires extensive family documentation).</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Core Dossier */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-3">
                The Core Dossier
              </h2>
              <p className="text-gray-600">
                Documents required of every applicant, regardless of visa type. Begin gathering these as early as possible — but mind the 6-month expiration trap.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {coreDossier.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={doc.title}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-accent flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-serif font-bold text-navy text-lg">{doc.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{doc.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Chain of Authentication */}
        <section className="py-16 md:py-20 bg-navy text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                The Chain of Authentication
              </h2>
              <p className="text-white/80">
                Required for degrees, background checks, and all family certificates. Each step must be completed in order.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {authChain.map((step) => (
                <div
                  key={step.step}
                  className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10"
                >
                  <div className="text-accent-soft text-xs uppercase tracking-widest font-semibold mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto mt-10 bg-accent/10 border border-accent/30 rounded-lg p-5 text-sm">
              <p>
                <strong className="text-accent-soft">Use a visa agency.</strong> We highly recommend using a visa agency to navigate this chain quickly and correctly. UK applicants can use{' '}
                <a
                  href="https://www.visaforchina.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  visaforchina.org
                </a>
                . Other countries have local equivalents — your assigned WZIS HR contact can advise.
              </p>
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-3">
                Common Pitfalls
              </h2>
              <p className="text-gray-600">
                The most frequent reasons visa applications get rejected or delayed.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {redFlags.map((flag) => (
                <div
                  key={flag.title}
                  className="flex items-start gap-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg p-5"
                >
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-serif font-bold text-navy text-lg mb-1">{flag.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{flag.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family Path */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Users className="text-accent mx-auto mb-3" size={36} />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-3">
                Bringing Your Family
              </h2>
              <p className="text-gray-600">
                Z-Visa holders only. Each dependent requires their own complete documentation set.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-serif font-bold text-navy text-lg mb-4">Required Documents</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-accent font-bold">•</span><span><strong>Spouse:</strong> Marriage Certificate</span></li>
                  <li className="flex gap-2"><span className="text-accent font-bold">•</span><span><strong>Children:</strong> Birth Certificates</span></li>
                  <li className="flex gap-2"><span className="text-accent font-bold">•</span><span>Individual passports for each family member</span></li>
                  <li className="flex gap-2"><span className="text-accent font-bold">•</span><span>Digital photos for each family member (3.5 × 4.5 cm)</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-serif font-bold text-navy text-lg mb-4">Required Processing</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-accent font-bold">•</span><span>Every marriage and birth certificate must be translated into Chinese</span></li>
                  <li className="flex gap-2"><span className="text-accent font-bold">•</span><span>Every certificate must run through the complete Chain of Authentication</span></li>
                  <li className="flex gap-2"><span className="text-accent font-bold">•</span><span>The school can only process the Letter of Invitation once these authenticated steps are complete</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 30-Day Window */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-6 md:p-8">
              <div className="flex items-start gap-3 mb-4">
                <Plane className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">
                  Flight Logistics: The 30-Day Window
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You will initially apply for a 1-month tourist or work visa at your local embassy. Because of this, you must book a flight that adheres to strict entry/exit rules:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <CalendarClock className="text-amber-700 flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>The Rule:</strong> You must present a return flight booked within the 1-month period of your initial arrival.</span>
                </li>
                <li className="flex gap-3">
                  <CalendarClock className="text-amber-700 flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>Example:</strong> If you arrive on August 12th, your return flight must be booked for September 11th or earlier.</span>
                </li>
                <li className="flex gap-3">
                  <CalendarClock className="text-amber-700 flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>The Workaround:</strong> With most airlines, this return flight can be altered at a later date for a small fee, allowing you to move it to a suitable school vacation. Confirm this policy with your airline before booking.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* First 30 Days Timeline */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-3">
                Your First 30 Days in Weihai
              </h2>
              <p className="text-gray-600">
                What to expect after you land. The school guides you through every step.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l-2 border-accent/30 ml-3 space-y-8">
                {firstThirtyDays.map((item, idx) => (
                  <li key={idx} className="ml-6">
                    <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-accent rounded-full ring-4 ring-gray-50"></span>
                    <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-1">
                      {item.label}
                    </div>
                    <h3 className="font-serif font-bold text-navy text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Final Protocol */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-navy text-white rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-center">
                The Final Protocol
              </h2>
              <p className="text-white/80 text-center mb-8">Digital first. Physical always.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-serif font-bold text-accent-soft mb-2">Scan Everything</h3>
                  <p className="text-sm text-white/80">Keep pristine digital scans (PDF + JPG) of every single document in your dossier.</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-accent-soft mb-2">School Review Pipeline</h3>
                  <p className="text-sm text-white/80">Send these scans to our HR team for review <em>before</em> you pay for any notarizations, authentications, or flights. Let us catch errors early.</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-accent-soft mb-2">Carry the Originals</h3>
                  <p className="text-sm text-white/80">When it is time to fly, bring all physical, stamped original documents in your carry-on luggage. They are your key to Weihai.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto">
              Our HR team is ready to help you build your blueprint. Reach out anytime — early questions are easier than late surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="mailto:careers@wzis.org"
                className="inline-flex items-center gap-2 bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                <Mail size={18} /> careers@wzis.org
              </a>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                <ArrowLeft size={18} /> Back to Careers
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
