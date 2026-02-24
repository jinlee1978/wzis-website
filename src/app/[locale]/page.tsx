import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import {
  Globe,
  GraduationCap,
  Music,
  Sliders,
  Users,
  Briefcase,
  Shield,
  BookOpen,
  Heart,
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');

  // SECTION 1: HERO
  const heroProofStats = [
    { value: t('hero.proofGrades'), label: t('hero.proofGradesLabel') },
    { value: t('hero.proofNationalities'), label: t('hero.proofNationalitiesLabel') },
    { value: t('hero.proofYear'), label: t('hero.proofYearLabel') },
  ];

  // SECTION 3: WEIHAI CARDS
  const weihai_cards = [
    {
      id: 'wc-1',
      image: '/images/weihai-bridge.jpeg',
      title: 'Stunning Coastal Beauty',
      desc: 'Pristine beaches, the Yellow Sea, and historic Liugong Island...',
      colSpan: 'col-span-12 md:col-span-7',
    },
    {
      id: 'wc-3',
      image: '/images/weihai-beach-sunset.jpeg',
      title: 'Vibrant Evenings',
      desc: 'Beautiful lakeside evenings...',
      colSpan: 'col-span-12 md:col-span-4',
    },
    {
      id: 'wc-4',
      image: '/images/weihai-coast.jpeg',
      title: 'Rich Culture',
      desc: 'A blend of Korean and Chinese culture...',
      colSpan: 'col-span-12 md:col-span-4',
    },
    {
      id: 'wc-6',
      image: '/images/weihai-winter-beach.jpeg',
      title: 'Four Seasons of Beauty',
      desc: 'Experience Weihai\'s enchanting winter beaches...',
      colSpan: 'col-span-12 md:col-span-6',
    },
    {
      id: 'wc-7',
      image: '/images/weihai-pagoda.jpeg',
      title: 'Historic Architecture',
      desc: 'Ancient pagodas and temples...',
      colSpan: 'col-span-12 md:col-span-6',
    },
    {
      id: 'wc-8',
      image: '/images/weihai-light-festival.jpeg',
      title: 'Vibrant Nightlife',
      desc: 'Dazzling light festivals...',
      colSpan: 'col-span-12 md:col-span-4',
    },
    {
      id: 'wc-9',
      image: '/images/weihai-lanterns-wide.jpeg',
      title: 'Cultural Celebrations',
      desc: 'Traditional lantern displays...',
      colSpan: 'col-span-12 md:col-span-4',
    },
    {
      id: 'wc-10',
      image: '/images/weihai-modern-building.jpeg',
      title: 'Modern Weihai',
      desc: 'Stunning contemporary architecture...',
      colSpan: 'col-span-12 md:col-span-4',
    },
  ];

  const weihai_stats = [
    { value: '#1', label: 'Cleanest Air in China' },
    { value: '2.9M', label: 'Residents' },
    { value: '1,000km', label: 'Coastline' },
    { value: '✓', label: 'Safe City' },
  ];

  // SECTION 5: OUR STORY VALUES
  const storyValues = ['Respect', 'Wisdom', 'Expression', 'Responsibility', 'Holistic Ed.', 'Service'];

  // SECTION 6: ACADEMICS CARDS
  const academicDivisions = [
    { title: 'Primary School', grades: 'Grades 1–5', desc: 'Building strong foundations through engaging, inquiry-based learning in a nurturing environment.' },
    { title: 'Middle School', grades: 'Grades 6–8', desc: 'Expanding horizons with rigorous academics, collaborative projects, and personal growth.' },
    { title: 'High School', grades: 'Grades 9–12', desc: 'University preparation through IGCSE and A-Level programs with personalized mentorship.' },
  ];

  // SECTION 7: PROGRAMS
  const programItems = [
    { title: 'CGD', desc: 'Creative Thinking & Good Deeds — empowering bobaes to use creativity and gratitude to make a positive impact.' },
    { title: '1 Plus 3', desc: 'Dedicated mentorship program pairing each bobae with a teacher for academic and emotional support.' },
    { title: 'HSK', desc: 'Structured Mandarin Chinese proficiency program — from beginner to advanced certification.' },
    { title: 'Choir & Orchestra', desc: 'Award-winning music programs nurturing creativity, discipline, and performance.' },
  ];

  // MARQUEE ITEMS
  const marqueeItems = [
    'Cambridge International School', 'WASC Accredited', 'ACSI Member',
    'Founded 2006 by Moody & Esther Lee', '1st–12th International Education',
    '20+ Nationalities', 'Weihai, Shandong, China', 'Shaping Servant Leaders',
  ];

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/school-community-pier.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column: Text content */}
            <div className="animate-fadeUp">
              {/* Accreditation badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <Badge variant="accent">{t('hero.badge')}</Badge>
              </div>

              {/* H1 with shimmer on "Servant Leaders" */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Shaping{' '}
                <span className="relative inline-block">
                  Servant Leaders
                </span>
                <br />
                {t('hero.titleLine2')}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>

              {/* Two buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button href="/admissions" variant="primary" size="lg">
                  {t('hero.cta')}
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  {t('hero.ctaSecondary')}
                </Button>
              </div>

              {/* Proof stats row */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {heroProofStats.map((stat, i) => (
                  <div
                    key={i}
                    className="animate-fadeUp"
                    style={{ animationDelay: (i * 0.2) + 's' }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-accent-soft mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-white/70 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: Empty (removed floating photos for cleaner look) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* SECTION 2: MARQUEE STRIP */}
      <MarqueeStrip items={marqueeItems} />

      {/* SECTION 3: DISCOVER WEIHAI */}
      <section className="relative py-20 px-4 bg-white">
        {/* Faint watermark text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="text-9xl font-serif font-bold">威海</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                {t('weihai.tag')}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <h2 className="font-serif text-4xl lg:text-5xl text-navy leading-tight">
                Discover{' '}
                <span className="text-accent">{t('weihai.title').split('Discover ')[1] || 'Weihai'}</span>
              </h2>
              <p className="text-text-brand-light leading-relaxed text-lg">
                {t('weihai.subtitle')}
              </p>
            </div>
          </div>

          {/* Image grid - 12 column layout */}
          <div className="grid grid-cols-12 gap-6 mb-12">
            {weihai_cards.map((card) => (
              <div
                key={card.id}
                className={card.colSpan + ' animate-fadeUp group relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Title & desc overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {weihai_stats.map((stat, i) => (
              <div key={i} className="animate-fadeUp" style={{ animationDelay: (i * 0.15) + 's' }}>
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{stat.value}</div>
                <div className="text-text-brand-light text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PATHWAYS (How Can We Help?) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                How Can We Help?
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy">
              Find What You&apos;re Looking For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Parents & Students */}
            <Link href="/admissions">
              <Card className="h-full hover:border-t-4 hover:border-t-accent cursor-pointer animate-fadeUp">
                <div className="p-8 flex flex-col items-center text-center">
                  <Users className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl text-navy mb-3">Parents & Students</h3>
                  <p className="text-text-brand-light leading-relaxed">
                    Learn about admissions, curriculum, campus life, and how to apply.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Prospective Teachers */}
            <Link href="/careers">
              <Card className="h-full hover:border-t-4 hover:border-t-accent cursor-pointer animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                <div className="p-8 flex flex-col items-center text-center">
                  <Briefcase className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl text-navy mb-3">Prospective Teachers</h3>
                  <p className="text-text-brand-light leading-relaxed">
                    Explore career opportunities and join our vibrant community.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Partners & Community */}
            <Link href="/contact">
              <Card className="h-full hover:border-t-4 hover:border-t-accent cursor-pointer animate-fadeUp" style={{ animationDelay: '0.2s' }}>
                <div className="p-8 flex flex-col items-center text-center">
                  <Shield className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl text-navy mb-3">Partners & Community</h3>
                  <p className="text-text-brand-light leading-relaxed">
                    Connect with us about partnerships, events, and community engagement.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR STORY */}
      <section className="relative py-20 px-4 bg-navy text-white">
        {/* Faint WZIS watermark */}
        <div className="absolute inset-0 flex items-center justify-end opacity-5 pointer-events-none pr-8">
          <div className="text-9xl font-serif font-bold">WZIS</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Story content */}
            <div className="animate-fadeUp">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent-soft" />
                <span className="text-accent-soft font-semibold uppercase tracking-widest text-sm">
                  {t('story.tag')}
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">
                {t('story.title')}
              </h2>
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                {t('story.p1')}
              </p>
              <p className="text-white/80 leading-relaxed mb-10 text-lg">
                {t('story.p2')}
              </p>

              {/* Values chips */}
              <div className="flex flex-wrap gap-3">
                {storyValues.map((value, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-full bg-accent-glow text-accent font-medium text-sm animate-fadeUp"
                    style={{ animationDelay: (i * 0.1) + 's' }}
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Founder images */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Moody_Esther.webp"
                  alt="Moody and Esther Lee, Founders of WZIS"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/bobaes.webp"
                  alt="WZIS Students — Our BoBaes"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ACADEMICS */}
      <section className="py-20 px-4 bg-warm">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                {t('academics.tag')}
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">
              {t('academics.title')}
            </h2>
            <p className="text-text-brand-light text-lg max-w-2xl mx-auto">
              {t('academics.subtitle')}
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {academicDivisions.map((division, i) => {
              const gradients = [
                'bg-gradient-to-b from-blue-300 to-blue-100',
                'bg-gradient-to-b from-gray-300 to-gray-100',
                'bg-gradient-to-b from-navy-light to-navy',
              ];
              const textColors = ['text-navy', 'text-navy', 'text-white'];
              return (
                <Card
                  key={i}
                  className="animate-fadeUp overflow-hidden"
                  style={{ animationDelay: (i * 0.15) + 's' }}
                >
                  {/* Top gradient bar */}
                  <div className={`h-16 ${gradients[i]}`} />
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-navy mb-1">{division.title}</h3>
                    <p className="text-accent font-semibold text-sm mb-4">{division.grades}</p>
                    <p className="text-text-brand-light leading-relaxed">{division.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA button */}
          <div className="text-center">
            <Button href="/academics" variant="secondary" size="lg">
              {t('academics.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7: PROGRAMS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                {t('programs.tag')}
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">
              Beyond the Classroom
            </h2>
            <p className="text-text-brand-light text-lg max-w-2xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </div>

          {/* 4-column grid of program cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* CGD */}
            <Link href="/cgd">
              <Card className="h-full animate-fadeUp cursor-pointer">
                <div className="p-6 flex flex-col items-center text-center">
                  <Globe className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif text-lg text-navy mb-3">
                    {programItems[0]?.title || 'CGD'}
                  </h3>
                  <p className="text-text-brand-light text-sm leading-relaxed">
                    {programItems[0]?.desc || 'Creative Thinking & Good Deeds'}
                  </p>
                </div>
              </Card>
            </Link>

            {/* 1 Plus 3 */}
            <Link href="/one-plus-three">
              <Card
                className="h-full animate-fadeUp cursor-pointer"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <GraduationCap className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif text-lg text-navy mb-3">
                    {programItems[1]?.title || '1 Plus 3'}
                  </h3>
                  <p className="text-text-brand-light text-sm leading-relaxed">
                    {programItems[1]?.desc || '1 Plus 3 Mentorship'}
                  </p>
                </div>
              </Card>
            </Link>

            {/* HSK */}
            <Link href="/hsk">
              <Card
                className="h-full animate-fadeUp cursor-pointer"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <Sliders className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif text-lg text-navy mb-3">
                    {programItems[2]?.title || 'HSK'}
                  </h3>
                  <p className="text-text-brand-light text-sm leading-relaxed">
                    {programItems[2]?.desc || 'Chinese Language'}
                  </p>
                </div>
              </Card>
            </Link>

            {/* Music */}
            <Link href="/music">
              <Card
                className="h-full animate-fadeUp cursor-pointer"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <Music className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif text-lg text-navy mb-3">
                    {programItems[3]?.title || 'Music'}
                  </h3>
                  <p className="text-text-brand-light text-sm leading-relaxed">
                    {programItems[3]?.desc || 'Choir & Orchestra'}
                  </p>
                </div>
              </Card>
            </Link>
          </div>

          {/* Photo banner with overlay */}
          <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden group">
            <Image
              src="/images/orchestra-sunset-performance.jpeg"
              alt="Community Performances"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <h3 className="font-serif text-3xl md:text-4xl text-white text-center">
                Community Performances
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CAMPUS LIFE */}
      <section className="py-20 px-4 bg-warm">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl text-navy">
              {t('campusLife.title')}
            </h2>
            <p className="text-text-brand-light text-lg mt-4 max-w-2xl mx-auto">
              {t('campusLife.subtitle')}
            </p>
          </div>

          {/* 2-column grid with left tall image spanning 2 rows */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: tall image (spans 2 rows) */}
            <div className="lg:col-span-1 lg:row-span-2 animate-fadeUp">
              <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden min-h-96">
                <Image
                  src="/images/scholars-cup-winners.jpeg"
                  alt="World Scholar's Cup 2025"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-center pb-6">
                  <h3 className="font-serif text-2xl text-white text-center">
                    World Scholar&apos;s Cup 2025
                  </h3>
                </div>
              </div>
            </div>

            {/* Right: stacked cards */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Sports Day image */}
              <div className="relative h-64 rounded-2xl overflow-hidden animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                <Image
                  src="/images/students-moose-field.jpeg"
                  alt="Athletics & Sports Day"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-center pb-6">
                  <h3 className="font-serif text-2xl text-white">Athletics & Sports Day</h3>
                </div>
              </div>

              {/* ZSA & Dormitory quick links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
                <Link href="/sports-academy" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <h4 className="font-serif text-lg font-bold text-navy group-hover:text-accent transition-colors">
                    Sports Academy (ZSA)
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Competitive baseball & volleyball — serving the world through sports.
                  </p>
                </Link>
                <Link href="/dormitory" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <h4 className="font-serif text-lg font-bold text-navy group-hover:text-accent transition-colors">
                    Dormitory Life
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    A safe, supportive home for BoBaes in grades 6–12.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA SECTION */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-navy-mid to-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-accent-soft blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent-soft blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
          </div>

          {/* 4 CTA cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Apply Now */}
            <Link href="/admissions">
              <Card className="h-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 animate-fadeUp">
                <div className="p-6 flex flex-col items-center text-center">
                  <BookOpen className="w-10 h-10 text-accent-soft mb-4" />
                  <h3 className="font-serif text-lg text-white mb-3">Apply Now</h3>
                  <p className="text-white/70 text-sm">Start the admissions process</p>
                </div>
              </Card>
            </Link>

            {/* Careers */}
            <Link href="/careers">
              <Card
                className="h-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 animate-fadeUp cursor-pointer"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <Briefcase className="w-10 h-10 text-accent-soft mb-4" />
                  <h3 className="font-serif text-lg text-white mb-3">Careers</h3>
                  <p className="text-white/70 text-sm">Join our team</p>
                </div>
              </Card>
            </Link>

            {/* Contact Us */}
            <Link href="/contact">
              <Card
                className="h-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 animate-fadeUp cursor-pointer"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <Heart className="w-10 h-10 text-accent-soft mb-4" />
                  <h3 className="font-serif text-lg text-white mb-3">Contact Us</h3>
                  <p className="text-white/70 text-sm">Get in touch with our team</p>
                </div>
              </Card>
            </Link>

            {/* Donate */}
            <Link href="/contact">
              <Card
                className="h-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 animate-fadeUp cursor-pointer"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <Heart className="w-10 h-10 text-accent-soft mb-4" />
                  <h3 className="font-serif text-lg text-white mb-3">Support Us</h3>
                  <p className="text-white/70 text-sm">Donate to our mission</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
