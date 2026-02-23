import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  BookOpen,
  UtensilsCrossed,
  Heart,
  Waves,
  ShoppingBag,
  Clock,
  Home,
  Users,
  Activity,
} from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Dormitory | WZIS',
  description: 'Home Away from Home — A safe, supportive boarding experience for our BoBaes.',
};

const dormFeatures = [
  {
    title: '24/7 Supervision',
    description: 'Experienced house parents provide round-the-clock care and support for all students',
    icon: Shield,
  },
  {
    title: 'Structured Study Time',
    description: 'Dedicated evening study periods with teacher support to foster academic excellence',
    icon: BookOpen,
  },
  {
    title: 'Nutritious Meals',
    description: 'Three meals daily with culturally diverse menus accommodating various dietary needs',
    icon: UtensilsCrossed,
  },
  {
    title: 'Weekend Activities',
    description: 'Organized outings, sports events, and social activities building community',
    icon: Activity,
  },
  {
    title: 'Laundry Service',
    description: 'Professional laundry service for all boarding students ensuring clean uniforms and clothing',
    icon: Heart,
  },
  {
    title: 'Health & Wellness',
    description: 'On-campus health support and emergency medical procedures with trained staff',
    icon: Activity,
  },
];

const dailySchedule = [
  { time: '6:30 AM', activity: 'Wake up & morning routine' },
  { time: '7:00 AM', activity: 'Breakfast' },
  { time: '7:40 AM', activity: 'Classes begin' },
  { time: '12:00 PM', activity: 'Lunch' },
  { time: '1:00 PM', activity: 'Afternoon classes' },
  { time: '3:30 PM', activity: 'Extracurricular activities' },
  { time: '5:30 PM', activity: 'Dinner' },
  { time: '6:30 PM', activity: 'Study hall' },
  { time: '8:30 PM', activity: 'Free time / shower' },
  { time: '9:30 PM', activity: 'Lights out (middle school)' },
  { time: '10:00 PM', activity: 'Lights out (high school)' },
];

const weihaiHighlights = [
  {
    title: 'Safe City',
    description: 'Weihai consistently ranks as one of China\'s safest cities with excellent public security',
    icon: Shield,
  },
  {
    title: 'Beautiful Coastline',
    description: 'Stunning beaches and seaside parks perfect for weekend exploration and relaxation',
    icon: Waves,
  },
  {
    title: 'Modern Amenities',
    description: 'Shopping centers, restaurants, and entertainment venues within easy reach',
    icon: ShoppingBag,
  },
  {
    title: 'Cultural Experiences',
    description: 'Rich local culture, museums, and historic sites offering educational opportunities',
    icon: Home,
  },
];

export default function DormitoryPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/School.webp"
        title="Home Away from Home"
        subtitle="A safe, supportive boarding experience for our BoBaes"
      />

      {/* Overview Section */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy">
              The WZIS Boarding Experience
            </h2>
            <p className="text-lg text-text-brand-light leading-relaxed">
              Our dormitory provides a comfortable, structured living environment for students in grades 6-12. Experienced house parents ensure safety, support, and a sense of community. Every BoBae in our dorms is part of an extended family dedicated to their academic success and personal growth.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Badge variant="accent">Grades 6-12</Badge>
              <Badge variant="navy">24/7 Support</Badge>
              <Badge variant="navy">Community Living</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Dorm Life Features */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-12 md:mb-16">
            Dorm Life Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dormFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-navy-mid flex-grow leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="w-full bg-navy py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Daily Schedule
            </h2>
            <p className="text-white/70 text-lg">
              A structured day balancing academics, activities, and personal time
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {dailySchedule.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-white/10 transition-colors ${
                        index % 2 === 0 ? 'bg-white/5' : 'bg-white/[0.025]'
                      }`}
                    >
                      <td className="px-6 py-4 font-sans font-bold text-accent whitespace-nowrap">
                        {item.time}
                      </td>
                      <td className="px-6 py-4 text-white">
                        {item.activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Weihai Lifestyle */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
              Life in Weihai: A Perfect Boarding Destination
            </h2>
            <p className="text-text-brand-light text-lg max-w-2xl mx-auto">
              Located in beautiful Weihai, our dorm provides students with a vibrant, safe community and access to cultural experiences, natural beauty, and modern amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weihaiHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card
                  key={index}
                  className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-soft mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-navy-mid flex-grow leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-accent-soft rounded-lg border border-accent/30">
            <p className="text-text-brand-light leading-relaxed">
              Weihai combines safety with opportunity. Our students enjoy weekend outings to pristine beaches, local shopping districts, cultural museums, and parks—all while maintaining the structured, supportive environment our boarding community provides. It's the ideal setting for BoBaes to thrive academically and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full bg-warm py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/dorm-room.webp"
                alt="Comfortable dormitory room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/dorm-common.webp"
                alt="Dormitory common area and activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience Boarding Life?"
        subtitle="Join our supportive dorm community and experience education in one of China's most beautiful and safe cities. Connect with lifelong friends while pursuing academic excellence."
        primaryButton={{ label: 'Start Your Journey', href: '/admissions' }}
        secondaryButton={{ label: 'Contact Us', href: '/contact' }}
      />
    </main>
  );
}
