import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, BookOpen, Users, TrendingUp } from 'lucide-react'

// TODO: Connect to Sanity CMS for dynamic university data
// TODO: Add filtering/sorting by region, year, acceptance rate
// TODO: Implement analytics tracking for CTA clicks
// TODO: Add testimonials section from alumni

export const metadata = {
  title: 'College Acceptance | WZIS',
  description: 'Explore where WZIS graduates have been accepted — from prestigious South Korean universities to top institutions globally.',
}

interface University {
  name: string
  count?: number
}

interface RegionData {
  region: string
  universities: University[]
}

const classOf2025Data = {
  southKorea: [
    { name: 'Yonsei', count: 2 },
    { name: 'Korea University', count: 1 },
    { name: 'Sungkyunkwan', count: 2 },
    { name: 'Sogang', count: 4 },
    { name: 'Hanyang', count: 3 },
    { name: 'Chung-Ang', count: 4 },
    { name: 'Kyung Hee', count: 2 },
    { name: 'Hankuk Univ. of Foreign Studies', count: 2 },
    { name: 'Korea Aerospace', count: 2 },
    { name: 'Ewha Womans', count: 1 },
    { name: 'Konkuk', count: 2 },
    { name: 'Kookmin', count: 2 },
    { name: 'Hongik', count: 2 },
    { name: 'Inha', count: 1 },
    { name: 'Kyonggi', count: 2 },
    { name: 'Handong Global', count: 1 },
  ],
  international: [
    { name: 'Rutgers' },
    { name: 'Stony Brook' },
    { name: 'UConn' },
    { name: 'Union College NY' },
    { name: 'Indiana Bloomington' },
    { name: 'University of Nottingham' },
    { name: 'University of Liverpool' },
    { name: 'Chinese University of HK' },
    { name: 'HK University of Science & Tech' },
    { name: 'Beijing Foreign Studies' },
  ],
}

const classOf2024Data = {
  international: [
    { name: 'Nottingham' },
    { name: 'Liverpool' },
    { name: 'Simon Fraser' },
    { name: 'Beijing Foreign Studies' },
    { name: 'HKUST' },
    { name: 'CUHK' },
    { name: 'HK City' },
    { name: 'HK Polytechnic' },
  ],
  southKorea: [
    { name: 'Korea University', count: 2 },
    { name: 'Yonsei', count: 2 },
    { name: 'Sungkyunkwan', count: 4 },
    { name: 'Sogang', count: 4 },
    { name: 'Hanyang', count: 5 },
    { name: 'Seokyeong', count: 1 },
    { name: 'Handong Global', count: 1 },
    { name: 'Jeju National', count: 1 },
  ],
}

const pathwayTracks = [
  {
    title: 'US, UK & Europe',
    icon: Globe,
    highlights: ['SAT/ACT prep', 'A-Levels & GPA', 'Essay coaching'],
  },
  {
    title: 'South Korean Universities',
    icon: BookOpen,
    highlights: ['Korean entrance exams', 'Specialized advising', 'Campus integration'],
  },
  {
    title: 'China & Asia-Pacific',
    icon: TrendingUp,
    highlights: ['HSK fluency training', 'Mandarin pathways', 'Regional connections'],
  },
  {
    title: 'Global Campuses',
    icon: Users,
    highlights: ['2+2 transfer programs', 'Seamless integration', 'Cultural immersion'],
  },
]

const placementHistory: RegionData[] = [
  {
    region: 'South Korea',
    universities: [
      { name: 'Seoul National' },
      { name: 'Yonsei' },
      { name: 'Korea University' },
      { name: 'KAIST' },
      { name: 'POSTECH' },
      { name: 'Sungkyunkwan' },
      { name: 'Sogang' },
      { name: 'Hanyang' },
      { name: 'Chung-Ang' },
      { name: 'Kyung Hee' },
      { name: 'Ewha Womans' },
      { name: '+ more' },
    ],
  },
  {
    region: 'North America',
    universities: [
      { name: 'University of Michigan' },
      { name: 'UC Davis' },
      { name: 'Rutgers' },
      { name: 'UMass Amherst' },
      { name: 'Stony Brook' },
      { name: 'Indiana' },
      { name: 'Simon Fraser' },
      { name: '+ more' },
    ],
  },
  {
    region: 'UK & Europe',
    universities: [
      { name: 'Imperial College London' },
      { name: 'UCL' },
      { name: 'Nottingham' },
      { name: 'Liverpool' },
      { name: 'Manchester' },
      { name: '+ more' },
    ],
  },
  {
    region: 'Asia-Pacific',
    universities: [
      { name: 'HKUST' },
      { name: 'CUHK' },
      { name: 'HK City' },
      { name: 'HK PolyU' },
      { name: 'Beijing Foreign Studies' },
      { name: '+ more' },
    ],
  },
]

const stats = [
  { number: '17+', label: 'Years of Excellence' },
  { number: '100+', label: 'Universities' },
  { number: '15+', label: 'Countries' },
  { number: '4', label: 'Continents' },
]

function UniversityPill({ university }: { university: University }) {
  return (
    <span
      className="inline-block px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors duration-200 border border-accent bg-accent-soft text-text-brand hover:bg-accent-soft hover:text-brand"
    >
      {university.name}
      {university.count && <span className="ml-2 font-bold">{university.count}</span>}
    </span>
  )
}

export default function CollegeAcceptancePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy mb-4">
            College Acceptance
          </h1>
          <p className="font-sans text-lg md:text-xl text-text-brand opacity-90 max-w-3xl mx-auto">
            Where Our Graduates Go — From China to the World
          </p>
        </div>
      </section>

      {/* Class of 2025 Results */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-navy to-[rgba(13,27,50,0.95)]">
        <div
          className="absolute inset-0 opacity-100"
        />
        <div className="relative max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Class of 2025 Results — 33 Acceptances
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* South Korea */}
            <div>
              <h3 className="font-sans text-xl font-bold text-accent mb-6">South Korea</h3>
              <div className="flex flex-wrap gap-3">
                {classOf2025Data.southKorea.map((uni, idx) => (
                  <UniversityPill key={idx} university={uni} />
                ))}
              </div>
            </div>

            {/* International */}
            <div>
              <h3 className="font-sans text-xl font-bold text-accent mb-6">International</h3>
              <div className="flex flex-wrap gap-3">
                {classOf2025Data.international.map((uni, idx) => (
                  <UniversityPill key={idx} university={uni} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class of 2024 Results */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Class of 2024 Results
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* International */}
            <div>
              <h3 className="font-sans text-lg font-bold text-navy mb-6">International</h3>
              <div className="flex flex-wrap gap-3">
                {classOf2024Data.international.map((uni, idx) => (
                  <UniversityPill key={idx} university={uni} />
                ))}
              </div>
            </div>

            {/* South Korea */}
            <div>
              <h3 className="font-sans text-lg font-bold text-navy mb-6">South Korea</h3>
              <div className="flex flex-wrap gap-3">
                {classOf2024Data.southKorea.map((uni, idx) => (
                  <UniversityPill key={idx} university={uni} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Pathway Tracks */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-accent-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            University Pathway Tracks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathwayTracks.map((track, idx) => {
              const IconComponent = track.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 shadow-sm border border-accent-soft hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-lg bg-accent"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-sans text-lg font-bold text-navy">
                      {track.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {track.highlights.map((highlight, hidx) => (
                      <li
                        key={hidx}
                        className="font-sans text-sm text-text-brand flex items-start gap-2"
                      >
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5-Year Placement History */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand mb-12 text-center">
            5-Year Placement History
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {placementHistory.map((regionData, idx) => (
              <div key={idx} className="bg-accent-soft rounded-lg p-8 border border-accent">
                <h3 className="font-sans text-xl font-bold text-navy mb-6">
                  {regionData.region}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {regionData.universities.map((uni, uidx) => (
                    <div
                      key={uidx}
                      className="font-sans text-sm text-text-brand flex items-center gap-2"
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0 bg-accent"
                      />
                      {uni.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-navy to-[rgba(13,27,50,0.95)]">
        <div
          className="absolute inset-0 opacity-100"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-serif text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="font-sans text-base text-white opacity-90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">
            Start Your Journey to a World-Class University
          </h2>
          <p className="font-sans text-lg text-text-brand mb-10 opacity-90">
            Our comprehensive pathways and expert guidance help students succeed at top
            universities globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-white bg-accent rounded-lg transition-colors duration-200 hover:opacity-90"
            >
              Explore Admissions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center justify-center px-8 py-4 font-sans font-bold border-2 border-accent text-accent rounded-lg transition-colors duration-200"
            >
              View Academic Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
