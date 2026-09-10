import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Users, Award, Heart, Zap, Globe, BookOpen, Shield, Smile } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { breadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Zhongshi Sports Academy (ZSA) | Weihai Baseball & Volleyball | WZIS',
  description:
    'Discover Zhongshi Sports Academy (ZSA), the athletics arm of WZIS/WZFS in Weihai, Shandong, China. Home of the ZSA Eagles baseball program and the new volleyball program launching in 2026–27.',
  keywords: [
    'Zhongshi Sports Academy',
    'ZSA Weihai',
    'ZSA Eagles baseball',
    'Weihai international school athletics',
    'Weihai international school baseball',
    'Weihai international school volleyball',
    'WZIS athletics',
    'WZFS athletics',
    '中实体育',
  ],
  alternates: {
    canonical: '/sports-academy',
  },
  openGraph: {
    type: 'website',
    url: 'https://wzis.org/sports-academy',
    title: 'Zhongshi Sports Academy (ZSA) | WZIS Eagles Athletics',
    description:
      'ZSA Eagles baseball and volleyball at Weihai Zhongshi International School (WZIS/WZFS), including coaching, facilities, and recent competition results.',
    images: [
      {
        url: '/images/zsa-jito-cup-champions-trophy.jpeg',
        width: 1200,
        height: 630,
        alt: 'Zhongshi Sports Academy (ZSA) Eagles celebrating the 2026 CTBC Cup regional baseball championship',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhongshi Sports Academy (ZSA) | WZIS Eagles Athletics',
    description:
      'Explore ZSA Eagles baseball and volleyball in Weihai, China — the competitive athletics program of WZIS/WZFS.',
    images: ['/images/zsa-jito-cup-champions-trophy.jpeg'],
  },
};

const sportsAcademySchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  '@id': 'https://wzis.org/sports-academy#sports-organization',
  name: 'Zhongshi Sports Academy',
  alternateName: ['ZSA', 'ZSA Eagles', '中实体育'],
  url: 'https://wzis.org/sports-academy',
  description:
    'Zhongshi Sports Academy (ZSA) is the competitive athletics arm of WZIS/WZFS in Weihai, Shandong, China, with baseball and volleyball programs for student-athletes.',
  sport: ['Baseball', 'Volleyball'],
  memberOf: {
    '@type': 'EducationalOrganization',
    '@id': 'https://wzis.org/#organization',
    name: 'Weihai Zhongshi International School',
  },
  coach: [
    { '@type': 'Person', name: 'Kim Cheol-yong' },
    { '@type': 'Person', name: 'Choi Jeong-jung' },
  ],
  location: {
    '@type': 'Place',
    name: 'Weihai Zhongshi International School',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Weihai',
      addressRegion: 'Shandong',
      addressCountry: 'CN',
    },
  },
  image: [
    'https://wzis.org/images/zsa-jito-cup-champions-trophy.jpeg',
    'https://wzis.org/images/zsa-volleyball-court-2026.jpeg',
  ],
};

const sportsPrograms = [
  {
    title: 'Baseball',
    description: '2026 3rd CTBC Cup National Youth Baseball Regional Champion — undefeated, first place — and Northern Division U18 runner-up. Professional coaching, regional and national competition, and skills development from fundamentals to advanced play.',
    details: [
      '2026 3rd CTBC Cup National Youth Baseball Regional Champion',
      'Undefeated tournament run',
      '2026 CTBC Cup National Youth Baseball League — Northern Division Runner-Up (U18)',
      '2026 Weihai International Invitational — 2nd Place (U18 Division)',
      '13–3 overall record across the 2026 season',
      'Professional coaching staff',
      'Mon/Wed/Fri training after school',
    ],
    icon: Trophy,
    accentColor: 'from-blue-100 to-blue-50',
    image: '/images/zsa-jito-cup-champions-trophy.jpeg' as string | null,
    imageAlt: 'ZSA Eagles — 2026 3rd CTBC Cup National Youth Baseball Regional Champion',
    launchLabel: '',
  },
  {
    title: 'Volleyball',
    description: 'Launching in the 2026–27 school year under Head Coach Kim Cheol-yong, three-time Olympic head coach of the Korea women\'s national team. Boys and girls teams train on ZSA\'s newly renovated home court.',
    details: [
      'New program — first season 2026–27',
      'Head Coach Kim Cheol-yong (joined August 2026)',
      'Boys and girls teams',
      'Newly renovated indoor home court (2026)',
      'Tue/Thu training after school',
    ],
    icon: Users,
    accentColor: 'from-orange-100 to-orange-50',
    image: null as string | null,
    imageAlt: '',
    launchLabel: 'Launching 2026–27',
  },
];

const galleryPhotos = [
  { src: '/images/zsa-jito-cup-opening-ceremony.jpeg', alt: 'ZSA Eagles at the 2026 CTBC Cup opening ceremony in Weihai' },
  { src: '/images/zsa-jito-cup-team-blue-whale.jpeg', alt: 'Zhongshi Sports Academy baseball team at Blue Whale Field' },
  { src: '/images/zsa-jito-cup-coach-huddle.jpeg', alt: 'Coach Choi Jeong-jung leading a ZSA Eagles huddle' },
  { src: '/images/zsa-jito-cup-pitcher.jpeg', alt: 'ZSA Eagles pitcher in game action during the CTBC Cup' },
  { src: '/images/zsa-jito-cup-batter-zayden.jpeg', alt: 'ZSA Eagles batter Zayden at the plate' },
  { src: '/images/zsa-jito-cup-batter-jun.jpeg', alt: 'ZSA Eagles batter Jun at the plate' },
  { src: '/images/zsa-jito-cup-team-handshake.jpeg', alt: 'ZSA Eagles players during a post-game handshake line' },
  { src: '/images/zsa-jito-cup-team-circle.jpeg', alt: 'ZSA Eagles team circle before competition' },
  { src: '/images/zsa-northern-division-2026-departure.jpeg', alt: 'ZSA Eagles departing for the CTBC Cup Northern Division in Shijiazhuang' },
  { src: '/images/zsa-northern-division-2026-opening-lineup.jpeg', alt: 'ZSA Eagles opening lineup at home plate in Northern Division play' },
  { src: '/images/zsa-northern-division-2026-batter-swing.jpeg', alt: 'ZSA Eagles batter follow-through during Northern Division competition' },
  { src: '/images/zsa-northern-division-2026-team-huddle.jpeg', alt: 'ZSA Eagles players Alex, Edward, and Jun in a team huddle' },
  { src: '/images/zsa-northern-division-2026-both-teams.jpeg', alt: 'Both teams after the Northern Division final featuring ZSA Eagles' },
];

const coachingStaff = [
  {
    name: 'Kim Cheol-yong',
    koreanName: '김철용',
    role: 'Head Coach, Volleyball',
    headline: 'Three-time Olympic head coach of the Korea women\'s national team',
    image: null as string | null,
    imageAlt: '',
    initials: 'KC',
    credentials: [
      'Head coach of the Korea women\'s national team (1993–2000, 2003–04), leading the team at three Olympic Games: Atlanta 1996, Sydney 2000, and Athens 2004',
      '1994 Hiroshima Asian Games gold medal and 1998 Bangkok Asian Games silver medal',
      'Built the Honam Oil dynasty: 92 consecutive wins (1991–95) and nine straight Superleague championships (1991–99)',
      'Head coach of Peru\'s women\'s national team (2009–11) and chair of the Korea Volleyball Association\'s women\'s performance committee (2022–23)',
    ],
  },
  {
    name: 'Choi Jeong-jung',
    koreanName: '최정중',
    role: 'Head Coach, Baseball',
    headline: 'Gunsan Commercial alumnus and 1996 KBO draft pick',
    image: '/images/zsa-coach-choi-55.jpeg' as string | null,
    imageAlt: 'Coach Choi, wearing number 55, watches from the field at the 2026 CTBC Cup Northern Division competition',
    initials: 'CJ',
    credentials: [
      'Outfielder at Gunsan Commercial High School, one of Korea\'s most storied baseball programs',
      'Selected by the Ssangbangwool Raiders in the 1996 KBO draft',
      'Respected youth baseball coach in Incheon before joining ZSA on the recommendation of Korean baseball legend Lee Man-soo',
      'Guided the Eagles to the 2026 CTBC Cup regional title and the Northern Division final in the program\'s first season',
    ],
  },
];

const facilities = [
  {
    title: 'Baseball Diamond',
    description: 'Full-size field with dugouts and modern amenities',
    icon: Trophy,
  },
  {
    title: 'Indoor Gymnasium',
    description: 'Multi-purpose facility for year-round training',
    icon: Zap,
  },
  {
    title: 'Volleyball Court',
    description: 'Newly renovated in 2026 — professional sport flooring and competition lines',
    icon: Users,
  },
  {
    title: 'Outdoor Sports Field',
    description: 'Expansive open area for various athletic activities',
    icon: Globe,
  },
  {
    title: 'Weight Room',
    description: 'Equipped training area for strength and conditioning',
    icon: Award,
  },
  {
    title: 'Training Facilities',
    description: 'Modern equipment supporting athletic development',
    icon: Heart,
  },
];

const coreValues = [
  {
    title: 'Respect',
    description: 'Valuing every individual — teammates, opponents, officials, and coaches. Eagles win with humility and lose with grace.',
    icon: Heart,
  },
  {
    title: 'Wisdom',
    description: 'Reading the game, learning from every win and loss, and making sound decisions under pressure.',
    icon: BookOpen,
  },
  {
    title: 'Self-Expression',
    description: 'Every athlete brings their own voice and style to the team — and learns to lead with it.',
    icon: Globe,
  },
  {
    title: 'Responsibility',
    description: 'Owning your preparation, your role, and your conduct — every practice, every game, every trip.',
    icon: Shield,
  },
  {
    title: 'Holistic Education',
    description: 'Athletes first, students always. ZSA develops mind, body, and spirit, with the classroom and the field working together.',
    icon: Smile,
  },
];

export default function SportsAcademyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsAcademySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema('Zhongshi Sports Academy', 'https://wzis.org/sports-academy')),
        }}
      />
      <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/zsa-team-walk-off.jpeg"
        title="Zhongshi Sports Academy (ZSA)"
        subtitle="ZSA Eagles baseball and volleyball — competitive athletics rooted in discipline, teamwork, and excellence"
        imageAlt="Zhongshi Sports Academy (ZSA) Eagles baseball players walking onto the field in Weihai"
      />

      {/* Academy Overview */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              About ZSA Eagles
            </h2>
            <p className="text-lg text-text-brand-light leading-relaxed">
              The Zhongshi Sports Academy (ZSA) is WZIS's competitive athletics program, providing professional coaching and training in baseball and, from the 2026–27 school year, volleyball. Our Eagles compete in regional and national tournaments, building champions both in sport and in character. Open to students across all grades, ZSA is built on the same five core values as WZIS &mdash; <strong className="text-navy">Respect, Wisdom, Self-Expression, Responsibility, and Holistic Education</strong> &mdash; and they shape how our athletes train, compete, and carry themselves off the field.
            </p>
            <p className="text-base text-text-brand-light leading-relaxed">
              <Link href="#core-values" className="text-accent font-semibold hover:underline">See how our core values shape the program &rarr;</Link>
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Badge variant="accent">Competitive Athletics</Badge>
              <Badge variant="navy">ZSA Eagles</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
              Coaching Staff
            </h2>
            <p className="text-lg text-text-brand-light max-w-3xl mx-auto leading-relaxed">
              ZSA student-athletes train under coaches who have led national teams on the Olympic stage and developed players at the top of Korean sport &mdash; and who hold every Eagle to the WZIS core values on and off the field.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coachingStaff.map((coach) => (
              <div
                key={coach.name}
                className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-navy via-navy-mid to-navy-light">
                  {coach.image ? (
                    <Image
                      src={coach.image}
                      alt={coach.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <span className="text-6xl md:text-7xl font-serif font-bold tracking-widest text-accent-soft">{coach.initials}</span>
                      <span className="mt-3 text-sm uppercase tracking-widest text-white/60">{coach.koreanName}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-4 self-start">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-accent font-semibold text-xs tracking-widest uppercase">{coach.role}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy leading-tight">
                    {coach.name} <span className="text-lg md:text-xl font-sans font-normal text-text-brand-light">{coach.koreanName}</span>
                  </h3>
                  <p className="text-accent font-semibold mt-2 mb-5">{coach.headline}</p>
                  <ul className="space-y-3 text-text-brand-light leading-relaxed">
                    {coach.credentials.map((line) => (
                      <li key={line} className="flex gap-3">
                        <Trophy className="w-4 h-4 text-accent mt-1 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {/* Coach demo video — Coach Kim's first session */}
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-2">On the Court with Coach Kim</h3>
              <p className="text-text-brand-light leading-relaxed">
                A look inside Coach Kim Cheol-yong&apos;s first training session with the ZSA Eagles volleyball team.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video ring-1 ring-navy/10">
              <video
                src="/images/zsa-coach-kim-first-session.mp4"
                poster="/images/zsa-coach-kim-first-session-poster.jpeg"
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Championship Spotlight */}
      <section className="w-full bg-gradient-to-br from-navy via-navy-mid to-navy py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 mb-6">
              <Trophy className="w-5 h-5 text-accent" />
              <span className="text-accent font-bold text-sm tracking-widest uppercase">Regional Champion</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              2026 3rd CTBC Cup<br className="hidden md:block" /> National Youth Baseball
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-2">
              Regional Champion
            </p>
            <p className="text-2xl md:text-3xl text-accent font-bold tracking-wide">
              First Place &middot; Undefeated
            </p>
            <p className="text-base md:text-lg text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
              The ZSA Eagles captured the title with an undefeated run, earning first place as the 2026 3rd CTBC Cup National Youth Baseball Regional Champion — a defining moment for our program.
            </p>
          </div>
          {/* Stat row — 2026 season record */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-2 md:gap-x-6 max-w-4xl mx-auto mb-12 md:mb-14 pt-8 border-t border-accent/20">
            <div className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-accent mb-1 leading-none">13&ndash;3</p>
              <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest">2026 Season Record</p>
            </div>
            <div className="text-center border-l border-accent/20 px-2">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-accent mb-1 leading-none">1st</p>
              <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest">CTBC Cup Regional</p>
            </div>
            <div className="text-center md:border-l border-accent/20 px-2">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-accent mb-1 leading-none">2nd</p>
              <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest">CTBC Cup Northern Division U18</p>
            </div>
            <div className="text-center border-l border-accent/20 px-2">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-accent mb-1 leading-none">2nd</p>
              <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest">Weihai Int&apos;l U18</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video max-w-4xl mx-auto ring-1 ring-accent/30">
            <video
              src="/images/zsa-jito-cup-trophy.mp4"
              poster="/images/zsa-jito-cup-champions-trophy.jpeg"
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      {/* Recent Tournament Results */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-8">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 grid grid-cols-1 md:grid-cols-5">
            <div className="relative aspect-[4/3] md:aspect-auto md:col-span-2">
              <Image
                src="/images/zsa-northern-division-2026-pitcher-aiden.jpeg"
                alt="ZSA Eagles pitcher Aiden delivers from the mound at the 2026 CTBC Cup Northern Division competition in Shijiazhuang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-4 self-start">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-xs tracking-widest uppercase">September 2026 &middot; Runner-Up</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-3 leading-tight">
                2026 CTBC Cup National Youth Baseball League &mdash; Northern Division (U18)
              </h3>
              <p className="text-text-brand-light leading-relaxed">
                Building on their regional title in May, the ZSA Eagles took the field at the league&apos;s Northern Division competition in Shijiazhuang, Hebei &mdash; organized by the China Baseball Association and hosted by the Shijiazhuang Baseball Association. Competing in the U18 division, the Eagles went 2&ndash;1, winning through to the championship final before falling 5&ndash;3 to finish as runners-up among the top youth programs in northern China.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 grid grid-cols-1 md:grid-cols-5">
            <div className="relative aspect-[4/3] md:aspect-auto md:col-span-2">
              <Image
                src="/images/zsa-weihai-international-2026.jpeg"
                alt="ZSA Eagles player at the 2026 China Weihai International Baseball and Softball Invitational Tournament"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-4 self-start">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-xs tracking-widest uppercase">May 2026 &middot; Runner-Up</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-3 leading-tight">
                2026 China Weihai International Baseball &amp; Softball Invitational
              </h3>
              <p className="text-text-brand-light leading-relaxed">
                Just weeks after the CTBC Cup regional title, ZSA&apos;s 9th-grade Eagles competed up in the U18 division and battled to the championship final, falling 5&ndash;6 in a tight closing game to take 2nd place &mdash; a hard-earned result against older competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Programs */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Our Sports Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sportsPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
                >
                  <div className="relative h-56 md:h-64 bg-gradient-to-br from-navy via-navy-mid to-navy-light">
                    {program.image ? (
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <Users className="w-10 h-10 text-accent-soft mb-3" />
                        <span className="text-2xl md:text-3xl font-serif font-bold tracking-wide">{program.launchLabel}</span>
                        <span className="mt-2 text-xs uppercase tracking-widest text-white/60">ZSA Eagles Volleyball</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-navy">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-text-brand-light mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <ul className="space-y-3">
                      {program.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-navy-mid"
                        >
                          <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Volleyball Court */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-5">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-accent font-bold text-sm tracking-widest uppercase">New for 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
              A New Home Court for ZSA Volleyball
            </h2>
            <p className="text-lg text-text-brand-light max-w-3xl mx-auto leading-relaxed">
              Our indoor volleyball court has been fully renovated with a professional-grade sport floor, fresh competition lines, and natural light from wall-to-wall windows &mdash; the home court where Coach Kim Cheol-yong is building the boys&apos; and girls&apos; ZSA Eagles volleyball program from its first season.
            </p>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl ring-1 ring-navy/10">
            <Image
              src="/images/zsa-volleyball-court-2026.jpeg"
              alt="Newly renovated ZSA indoor volleyball court with blue sport flooring and floor-to-ceiling windows"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="w-full bg-navy py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white text-center mb-4">
            Our Facilities
          </h2>
          <p className="text-lg text-white/80 text-center max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Well-kept, purpose-built spaces on campus where our student-athletes train year-round.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {facility.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Gallery */}
      <section className="w-full bg-accent-soft py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            ZSA Eagles in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative h-48 md:h-56 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Junior Program */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-accent-soft to-white border border-accent/20">
            <div className="h-1 bg-accent" />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-accent" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
                  Junior Athletics &amp; Sports Day
                </h2>
              </div>
              <p className="text-text-brand-light text-lg leading-relaxed mb-6">
                Our junior athletics programs and annual Sports Day introduce primary students to the fundamentals of sports and physical activity. Through fun, engaging instruction, young athletes build confidence, coordination, and a love for movement that lasts a lifetime.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="accent">Youth Development</Badge>
                <Badge variant="navy">Fundamentals</Badge>
                <Badge variant="navy">Fun & Community</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="w-full bg-warm py-16 md:py-24 lg:py-32 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-5">
              Our Core Values
            </h2>
            <p className="text-lg text-text-brand-light leading-relaxed mb-4">
              Trophies are the result, not the goal. ZSA exists to shape servant leaders through sport, and it stands on the same five core values as the rest of WZIS. The values that guide our classrooms guide our dugouts and courts: they shape how our coaches run every practice, how our teams prepare for every tournament, and how each Eagle represents WZIS at home and abroad.
            </p>
            <p className="text-lg text-text-brand-light leading-relaxed">
              An athlete who leaves ZSA with these values has succeeded &mdash; whatever the scoreboard says.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="h-full flex flex-col">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-navy-mid flex-grow leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-navy font-serif italic text-xl md:text-2xl mt-12 md:mt-14">
            &ldquo;Serving the World Through Sports&rdquo; &mdash; the ZSA mission
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join the ZSA Eagles"
        subtitle="Join a program where the WZIS core values matter as much as the final score. Apply today to start your athletic journey."
        primaryButton={{ label: 'Explore Admissions', href: '/admissions' }}
        secondaryButton={{ label: 'Learn About Athletics', href: '/athletics' }}
      />
      </main>
    </>
  );
}
