import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, BookOpen, Globe, Shield, Users, Smile } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About WZIS | Our Mission, History & Leadership',
  description:
    'Learn about Weihai Zhongshi International School — founded in 2006 by Moody and Esther Lee. WASC and ACSI accredited, Cambridge International curriculum. Shaping servant leaders through character development, integrity, and academic excellence in Weihai, China.',
  openGraph: {
    title: 'About WZIS — Shaping Servant Leaders Since 2006',
    description:
      'Our mission, core values, leadership team, and accreditations. A WASC-accredited Cambridge International school in Weihai, China.',
  },
};

export default function AboutPage() {
  const coreValues = [
    { icon: Heart, label: 'Respect', description: 'Valuing every individual and their unique contributions' },
    { icon: BookOpen, label: 'Wisdom', description: 'Cultivating knowledge and critical thinking skills' },
    { icon: Globe, label: 'Self-Expression', description: 'Encouraging authentic voice and creativity' },
    { icon: Shield, label: 'Responsibility', description: 'Empowering students to own their actions and growth' },
    { icon: Smile, label: 'Holistic Education', description: 'Nurturing mind, body, and spirit development' },
    { icon: Users, label: 'Service', description: 'Leading with compassion and community impact' },
  ];

  const leadership = [
    {
      name: 'Arsenio Sumeg-ang',
      title: 'Principal',
      email: 'asumeg-ang@zhongshischool.org',
    },
    {
      name: 'Xochitl Tobias',
      title: 'Head of Primary / Vice-Principal',
      email: 'xtobias@zhongshischool.org',
    },
    {
      name: 'Position Open',
      title: 'Middle School Coordinator',
      email: '',
    },
    {
      name: 'Andy Kim',
      title: 'Head of Planning & Development / Vice-Principal',
      email: 'mkkim@zkis.org',
    },
  ];

  const accreditations = [
    { name: 'WASC', description: 'Western Association of Schools and Colleges' },
    { name: 'ACSI', description: 'International school accreditation body' },
    { name: 'Cambridge International', description: 'Global educational standard' },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroSection
        backgroundImage="/images/weihai-boat-sculpture.jpeg"
        title="About WZIS"
        subtitle="From China to the World — shaping servant leaders since 2006"
        height="large"
      />

      {/* 2. WELCOME FROM PRESIDENT */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Moody_Esther.webp"
                alt="Moody Lee, President and Founder"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <Badge variant="accent" className="mb-4">
                  Leadership
                </Badge>
                <h2 className="font-serif text-4xl text-navy mb-2">Welcome from the President</h2>
              </div>

              <div className="space-y-4 text-text-brand-light leading-relaxed">
                <p>
                  Welcome to WZIS — known as both WZIS and WZFS (Weihai Zhongshi Foreign School). Both names refer to the same school. Our athletics program is called ZSA (Zhongshi Sports Academy). &apos;Zhongshi&apos; means &apos;From China to the World.&apos;
                </p>

                <p>
                  Since our founding in 2006, we have been committed to preparing our students as servant leaders who will positively impact their communities and the world.
                </p>

                <p>
                  A servant leader uses their talents and abilities to benefit others. Our approach to character development centers around five core values: respect, wisdom, self-expression, responsibility, and holistic education.
                </p>

                <p>
                  Our students are called &apos;BoBae&apos; (보배), a Korean word meaning &apos;precious one.&apos; This reflects our deep commitment to nurturing and developing each student to their fullest potential.
                </p>

                <p>
                  We complement our robust international curriculum with rich extracurricular activities and maintain small class sizes to ensure every student receives the personalized attention they deserve.
                </p>
              </div>

              <div className="border-t border-navy-light pt-6">
                <p className="text-text-brand font-semibold">Sincerely,</p>
                <p className="text-lg font-serif text-navy">Moody Lee</p>
                <p className="text-text-brand-light">President and Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 px-4 bg-warm">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-navy text-center mb-16">Our Mission & Vision</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="bg-white shadow-lg">
              <div className="p-10">
                <h3 className="font-serif text-2xl text-navy mb-4">Our Mission</h3>
                <p className="text-text-brand-light leading-relaxed text-lg">
                  To cultivate and empower servant leaders who will make a lasting, positive impact on the world.
                </p>
              </div>
            </Card>

            {/* Vision Card */}
            <Card className="bg-white shadow-lg">
              <div className="p-10">
                <h3 className="font-serif text-2xl text-navy mb-4">Our Vision</h3>
                <p className="text-text-brand-light leading-relaxed text-lg">
                  From China to the World — nurturing global citizens with strong values, academic excellence, and a commitment to serving others.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-navy text-center mb-16">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="bg-white border border-accent-soft/20">
                  <div className="p-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-soft rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-navy mb-3">{value.label}</h3>
                    <p className="text-text-brand-light text-sm leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BOBAE SECTION */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/images/bobaes.webp"
                alt="WZIS Students - Our BoBaes"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-serif text-4xl text-white">Our BoBaes</h2>

              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  At WZIS, we affectionately call our students &apos;BoBae&apos; (보배), a beautiful Korean word meaning &apos;precious one.&apos; This endearing term encapsulates our philosophy: each student is a precious gem deserving of careful nurturing, thoughtful guidance, and opportunities to shine.
                </p>

                <p>
                  Our mascot, the Eagle, symbolizes the soaring aspirations and freedom we encourage in our students. Like the Eagle, our BoBaes learn to rise above challenges, see the bigger picture, and reach their highest potential. We empower them to be independent thinkers, compassionate leaders, and citizens ready to make a meaningful difference in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SCHOOL LEADERSHIP */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-navy text-center mb-16">School Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, idx) => (
              <Card key={idx} className="bg-white border border-navy-light/20">
                <div className="p-8 text-center">
                  <h3 className="font-serif text-xl text-navy mb-2">{leader.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{leader.title}</p>
                  {leader.email && (
                    <Link href={`mailto:${leader.email}`} className="text-text-brand-light hover:text-accent text-sm break-all transition-colors">
                      {leader.email}
                    </Link>
                  )}
                  {!leader.email && (
                    <Badge variant="warm" className="inline-block">
                      Currently Recruiting
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACCREDITATIONS */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-white text-center mb-16">Accreditations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {accreditations.map((accred, idx) => (
              <div key={idx} className="bg-navy-light rounded-xl p-8 text-center">
                <h3 className="font-serif text-2xl text-accent mb-2">{accred.name}</h3>
                <p className="text-white/80 text-sm">{accred.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/accreditation">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                Learn More About Our Accreditations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. COLLEGE ACCEPTANCE BANNER */}
      <section className="py-20 px-4 bg-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-navy mb-6">Our Graduates Excel Worldwide</h2>
          <p className="text-xl text-text-brand-light mb-8 leading-relaxed">
            WZIS students are accepted to over 100 universities across the globe, from prestigious institutions in North America, Europe, and Asia. Our graduates are equipped with the academic excellence, critical thinking skills, and character needed to thrive at the world&apos;s leading universities.
          </p>
          <Link href="/college-acceptance">
            <Button variant="secondary" size="lg">
              View College Acceptance Data
            </Button>
          </Link>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <CTASection
        title="Ready to Learn More?"
        primaryButton={{ label: 'Apply Now', href: '/admissions' }}
        secondaryButton={{ label: 'Contact Us', href: '/contact' }}
        variant="navy"
      />
    </>
  );
}
