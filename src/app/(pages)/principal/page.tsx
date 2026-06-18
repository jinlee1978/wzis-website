import { Metadata } from 'next';
import {
  Mail,
  CalendarClock,
  MapPin,
  Award,
  Target,
  Heart,
  BookOpen,
  Shield,
  Users,
  Building2,
  Megaphone,
  ClipboardCheck,
  CheckCircle2,
  Star,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Principal — Weihai Zhongshi Foreign School',
  description:
    'A leadership opportunity at a Cambridge-affiliated, mission-driven international school in coastal China. Start July 2027. Priority deadline February 2027.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const aboutParagraphs = [
  "Established in 2006, Weihai Zhongshi Foreign School (also known internationally as Weihai Zhongshi International School, or WZIS) serves an international student community across Primary, Middle, and High School. We deliver the Cambridge curriculum and prepare students for top universities around the world, with a particularly strong tradition of supporting Korean and Chinese international families. Through our ZSA Sports Academy, we also support student-athletes pursuing university and athletic pathways alongside their academic studies.",
  "Our small size is a defining strength. Teachers know every student. Leaders teach alongside their colleagues. Families have direct access to decision-makers. The Principal is not a remote figure. They are a visible, daily presence in classrooms, hallways, assemblies, and parent meetings.",
  "WZFS maintains a distinctive ethos rooted in shared values, strong character formation, and a deep commitment to the personal development of every student. We are looking for a leader whose own convictions and conduct will sustain and extend this culture with integrity, warmth, and intellectual seriousness.",
];

const accreditations = [
  'Cambridge Assessment International Education (CAIE)',
  'Western Association of Schools and Colleges (WASC) accredited',
  'ACSI member',
];

const rolePartnership = [
  'Provide vision, direction, and strategic leadership for the International department through our Continuous School Improvement Plan (CSIP).',
  'Secure and sustain outstanding teaching and learning across Primary, Middle, and High School.',
  "Steward the school's distinctive ethos and values across every area of school life.",
  'Promote excellence, equality, and high expectations for every student.',
  "Lead rigorous self-evaluation and the school's accreditation work.",
  'Deploy people and resources effectively to create a safe, focused, joyful learning environment.',
  'Support ZSA Sports Academy student-athletes in balancing academic progress with their athletic and pathway commitments.',
  'Build deep relationships with parents, partner schools, and the wider community.',
  "Work as a true partner to the School President on the school's long-term direction.",
];

const responsibilityGroups = [
  {
    icon: Target,
    title: 'Strategic Leadership and Vision',
    items: [
      "Develop, communicate, and implement a shared strategic vision aligned with the school's core aims and values.",
      'Use the CSIP to drive medium-term planning, evaluate current projects, and launch new initiatives each semester.',
      'Anticipate educational trends locally and internationally and align school policy accordingly.',
      'Inspire, challenge, and empower staff to carry the vision forward.',
    ],
  },
  {
    icon: Heart,
    title: 'Character, Ethos, and Pastoral Leadership',
    items: [
      'Model values-based leadership consistently in conduct, decisions, and relationships.',
      'Support staff in maintaining the character standards expected of educators in our community.',
      "Oversee the pastoral care committee and ensure the curriculum and assemblies reflect the school's distinctive ethos.",
      'Partner with the Head of Bobae Life and pastoral leads on character development and student personal formation.',
    ],
  },
  {
    icon: BookOpen,
    title: 'Teaching, Learning, and Curriculum',
    items: [
      'Raise teaching quality and student achievement through a strong, engaging learning culture.',
      'Teach classes as required, mentor less experienced teachers, and model effective instructional practice.',
      'Conduct formal observations and use findings to guide CPD, mentoring assignments, and recruitment.',
      'Recognise and reward excellence; create career pathways for high-performing teachers.',
      'Develop the annual school timetable in consultation with the leadership team.',
      'Ensure curriculum rigour challenges every learner, including high-ability students.',
    ],
  },
  {
    icon: Shield,
    title: 'Student Welfare, Development, and Safeguarding',
    items: [
      "Promote equality, diversity, and high expectations; ensure staff challenge stereotypes and uphold students' rights.",
      'Maintain open communication with students and parents, with visible evidence that student voice influences policy.',
      'Identify students falling behind academically, developmentally, or pastorally; coordinate data-driven interventions.',
      'Support students through key transitions, including puberty, sex education, social-emotional growth, and university admissions.',
      'Build multi-agency partnerships for child protection and counselling; uphold strict data confidentiality.',
      'Update and communicate the Child Protection Policy annually.',
      'Oversee the student admissions process in partnership with the administration office.',
    ],
  },
  {
    icon: Users,
    title: 'Staff Management and Professional Growth',
    items: [
      'Foster an open, fair, and equitable culture; manage conflict constructively.',
      'Chair and develop the leadership team; review job roles and descriptions annually.',
      'Embed continuous professional development into the school ethos with full staff participation.',
      'Conduct annual compensation and working-conditions reviews; act as the staff liaison to senior management.',
      'Publish a clear organisational support structure with named line managers.',
    ],
  },
  {
    icon: Building2,
    title: 'Operations, Administration, and Resources',
    items: [
      'Deploy staff efficiently and ensure equitable workload distribution.',
      'Maintain current job descriptions for all staff and ensure leaders supervise their direct reports effectively.',
      'Review organisational structures and policies each semester.',
      'Delegate effectively through leadership meetings and monitor follow-through.',
      'Determine annual staffing requirements; lead recruitment with fair and transparent practice.',
      'Serve as Fire Officer: oversee evacuation procedures, drills, and staff emergency readiness.',
      'Partner with the Head of Boarding to deliver high-quality evening programmes.',
    ],
  },
  {
    icon: Megaphone,
    title: 'Community, Parental, and Stakeholder Engagement',
    items: [
      'Recognise and celebrate the cultural diversity of our community.',
      'Build strong relationships with parents, partner schools, and community organisations.',
      'Host regular PTA meetings, annual presentations, and structured opportunities for parent participation.',
      'Expand the use of Schoology to give parents richer visibility into student progress.',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Accountability, Evaluation, and Compliance',
    items: [
      'Remain fully accountable to the School President for academic standards, conduct, and administration.',
      'Lead systematic, rigorous school self-evaluation aligned with improvement priorities.',
      'Serve on the steering committee and accreditation sub-committees.',
      'Collect, analyse, and act on internal and external assessment data, observations, and school reports.',
      'Collaborate with accreditation bodies to identify and act on growth areas.',
    ],
  },
];

const essentialQualifications = [
  'Substantial senior leadership experience in international education (Principal, Vice Principal, Head of School, or equivalent).',
  'Strong working knowledge of the Cambridge curriculum (Primary, Lower Secondary, IGCSE, and A Level).',
  'A track record of raising teaching quality and student outcomes through observation, coaching, and CPD.',
  'Experience leading school improvement, self-evaluation, and accreditation processes.',
  "Personal convictions, character, and conduct strongly aligned with the school's mission and ethos.",
  'Cross-cultural fluency and the maturity to lead in a Chinese context with a multilingual community.',
  "A relevant Master's degree (Education, Educational Leadership, or related) and recognised teaching qualification.",
  'Excellent written and spoken English.',
];

const preferredQualifications = [
  'Experience working in or with East Asian international schools.',
  'Familiarity with Korean or Chinese student communities and the U.S./U.K. university pathway.',
  'Working knowledge of Mandarin or Korean.',
  'Principal-track credentials (NPQH, NPQEL, or equivalent national leadership qualification).',
  'Experience with safeguarding frameworks and child-protection policy in international settings.',
];

const howYouWork = [
  "You teach. You're not above the classroom. You welcome being observed and observing others.",
  "You're decisive but consultative. You make calls, then make sure the leadership team owns them with you.",
  'You hold a high bar warmly, challenging weak practice, recognising excellence, and protecting people through honest conversations.',
  'You see operational detail as part of the mission, not a distraction from it.',
];

const whatWeOffer = [
  'A clearly defined mission and an established leadership structure to lead from.',
  'A small, supportive community where your decisions are visible and your impact is direct.',
  "A close working partnership with the School President on the school's long-term direction.",
  'Cambridge curriculum framework with established accreditation pathways.',
  'A competitive expatriate package: salary commensurate with experience, housing allowance, annual flights, comprehensive health insurance, and dependent schooling support.',
  'Coastal living in Weihai, one of the most liveable cities in northern China.',
];

const applicationItems = [
  'A current CV (no more than 3 pages).',
  "A letter of application (no more than 2 pages) addressing your alignment with the role, the school's ethos, and your leadership philosophy.",
  "A personal statement (no more than 1 page) addressing your alignment with the school's mission and values.",
  'Contact details for three professional references, including your current line manager.',
];

export default function PrincipalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm md:text-base uppercase tracking-widest text-accent-soft font-semibold mb-4">
              Weihai Zhongshi Foreign School
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Principal
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 mb-8">
              A leadership opportunity at a Cambridge-affiliated, mission-driven international school in coastal China.
            </p>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Briefcase size={18} className="text-accent-soft" />
                <span><span className="font-semibold">Reports to:</span> School President</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <CalendarClock size={18} className="text-accent-soft" />
                <span><span className="font-semibold">Start:</span> July 2027</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Star size={18} className="text-accent-soft" />
                <span><span className="font-semibold">Priority deadline:</span> February 2027</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Weihai Zhongshi Foreign School (WZFS) is searching for an experienced, mission-aligned educational leader to serve as our next Principal. This is a hands-on role leading our International department and supporting student-athletes in our ZSA Sports Academy pathway. We are a small, distinctive school where the Principal teaches, mentors, models, and shapes the daily life of a learning community of around 200 students.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              If you are a seasoned Cambridge educator who is energised by working closely with teachers, families, and students in a values-driven, mission-led community, we would welcome a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* About WZFS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8">About WZFS</h2>
            <div className="space-y-6">
              {aboutParagraphs.map((para, i) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Accreditations and Affiliations</h2>
            <p className="text-gray-700 mb-6">WZFS is recognised through the following accreditations and partnerships:</p>
            <ul className="space-y-3">
              {accreditations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Award size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Role */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8">The Role</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Principal reports to the School President and leads our International department. They work in close partnership with our Chinese department leadership across the wider school, and support student-athletes pursuing university pathways through our ZSA Sports Academy. The role is built on the National Standards for Principals and is reviewed annually.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              In partnership with the leadership team, the Principal will:
            </p>
            <ul className="space-y-3">
              {rolePartnership.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-12 text-center">Key Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {responsibilityGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="bg-gray-50 rounded-lg p-6 md:p-8 border-t-4 border-accent"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={28} className="text-accent flex-shrink-0" />
                    <h3 className="text-xl font-serif font-bold text-navy">{group.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Person We're Looking For */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">The Person We&apos;re Looking For</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              This role suits a leader who has done the work. Someone who has led a school or large department, knows the Cambridge system in detail, and is ready to be deeply present in a smaller community where their personal example matters every day.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-8 border-t-4 border-accent">
                <h3 className="text-2xl font-serif font-bold text-navy mb-6">Essential</h3>
                <ul className="space-y-3">
                  {essentialQualifications.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8 border-t-4 border-navy">
                <h3 className="text-2xl font-serif font-bold text-navy mb-6">Strongly Preferred</h3>
                <ul className="space-y-3">
                  {preferredQualifications.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star size={18} className="text-navy flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Work */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8">How You Work</h2>
            <ul className="space-y-4">
              {howYouWork.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-2">•</span>
                  <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">What We Offer</h2>
            <ul className="space-y-4">
              {whatWeOffer.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent-soft font-bold mt-2">•</span>
                  <span className="text-white/90 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8">How to Apply</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To apply, please submit the following to{' '}
              <a
                href="mailto:careers@wzis.org?subject=Principal Application"
                className="text-accent hover:underline font-semibold"
              >
                careers@wzis.org
              </a>{' '}
              with the subject line &ldquo;Principal Application: [Your Name]&rdquo;:
            </p>
            <ul className="space-y-3 mb-8">
              {applicationItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white rounded-lg p-6 md:p-8 border-l-4 border-accent">
              <p className="text-gray-700 leading-relaxed mb-4">
                Applications are reviewed on a rolling basis. We strongly prefer applications received by February 2027, both to allow for a meaningful handover with the outgoing Principal and to give the appointed candidate sufficient time for visa processing, notice, and relocation ahead of a July 2027 start. The position will remain open until filled, and later applications will continue to be considered if the role is still open. Shortlisted candidates will be invited to a first-stage interview by video, followed by a final-stage interview with the School President and senior leadership team.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm italic">
                WZFS is committed to safeguarding and promoting the welfare of children. The successful candidate will be required to complete enhanced background checks in their home jurisdiction and any country in which they have lived or worked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Ready to lead with us?
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            We&apos;d welcome a conversation. Send your application or initial inquiry to careers@wzis.org.
          </p>
          <a
            href="mailto:careers@wzis.org?subject=Principal Application"
            className="inline-flex items-center gap-2 bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            <Mail size={20} />
            Apply Now
          </a>
        </div>
      </section>

      {/* Footer Address */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-navy font-serif font-bold text-lg mb-2">Weihai Zhongshi Foreign School</p>
          <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
            <MapPin size={14} />
            42 East Jiang Su Road · International Port Economic and Technological Development District · Weihai City, Shandong Province, China 264-211
          </p>
          <p className="text-gray-600 text-sm mt-2">
            <a href="https://www.wzis.org" className="hover:text-accent">www.wzis.org</a>
            {' · '}
            <a href="mailto:careers@wzis.org" className="hover:text-accent">careers@wzis.org</a>
          </p>
        </div>
      </section>
    </main>
  );
}
