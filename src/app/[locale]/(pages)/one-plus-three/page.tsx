import Link from 'next/link';
import { Users, Heart, MessageCircle, Shield, BookOpen, Smile } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Card from '@/components/ui/Card';

export const metadata = {
  title: '1 Plus 3 Mentorship Program | WZIS',
  description:
    '1 Plus 3 Mentorship Program at WZIS — every student is paired with a dedicated teacher mentor for personalized guidance, academic support, and holistic development at Weihai Zhongshi International School.',
  openGraph: {
    title: '1 Plus 3 Mentorship Program at WZIS',
    description:
      'Every student paired with a dedicated teacher mentor for personalized guidance and holistic development.',
  },
};

const programFeatures = [
  {
    title: 'One-on-One Mentorship',
    description: 'Each bobae is paired with a teacher or advisor who serves as their dedicated mentor throughout their time at WZIS.',
    icon: Users,
  },
  {
    title: 'Academic Support',
    description: 'Mentors engage in regular discussions about academic progress, helping bobaes stay on track and reach their full potential.',
    icon: BookOpen,
  },
  {
    title: 'Emotional Well-Being',
    description: 'Beyond academics, mentors focus on the mental and emotional well-being of each bobae, providing a safe space for open conversation.',
    icon: Heart,
  },
  {
    title: 'Open Communication',
    description: 'The program fosters open communication and personalized guidance, building trust between bobaes and their mentors.',
    icon: MessageCircle,
  },
  {
    title: 'Holistic Growth',
    description: 'Bobaes receive the holistic support they need to thrive both academically and personally at WZIS.',
    icon: Smile,
  },
  {
    title: 'Safe & Supportive',
    description: 'Strong, supportive relationships built outside the traditional classroom setting give bobaes an additional layer of care and guidance.',
    icon: Shield,
  },
];

export default function OnePlusThreePage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/scholars-cup-boys-trophies.jpeg"
        title="1 Plus 3 Mentorship Program"
        subtitle="Building strong, supportive relationships that help every bobae thrive."
      />

      {/* Program Overview */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              What is 1 Plus 3?
            </h2>
            <p className="text-lg text-navy-mid leading-relaxed">
              The 1 Plus 3 program at WZIS is a dedicated mentorship initiative designed to support bobaes in all aspects of their school experience. Through this program, each bobae is paired with a teacher or advisor who serves as their mentor. These mentors engage in regular, one-on-one discussions with bobaes, focusing not only on their academic progress but also on their mental and emotional well-being.
            </p>
            <p className="text-lg text-navy-mid leading-relaxed">
              The program provides a valuable opportunity for bobaes and mentors to build strong, supportive relationships outside the traditional classroom setting. By fostering open communication and personalized guidance, the program ensures that bobaes receive the holistic support they need to thrive both academically and personally at WZIS.
            </p>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="w-full bg-accent-soft py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold text-navy mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-navy-mid leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Experience the 1 Plus 3 Difference"
        subtitle="At WZIS, every bobae has a mentor who cares about their academic success and personal well-being. Learn more about how we support our students."
        primaryButton={{ label: 'Learn About Admissions', href: '/admissions' }}
        secondaryButton={{ label: 'About WZIS', href: '/about' }}
      />
    </main>
  );
}
