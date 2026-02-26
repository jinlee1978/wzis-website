import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Lightbulb, Smile, Globe, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CGD — Creative Thinking & Good Deeds | WZIS',
  description:
    'Creative Thinking and Good Deeds (CGD) at WZIS — empowering students to solve real-world problems through creativity, service, and community impact. Featuring the Gratitude Olympics at Weihai Zhongshi International School.',
  openGraph: {
    title: 'CGD Program — Creative Thinking & Good Deeds at WZIS',
    description:
      'Empowering students through creative problem-solving, service, and community impact. Featuring the Gratitude Olympics.',
  },
};

export default function CGDPage() {
  const pillars = [
    {
      title: 'Creative Problem Solving',
      description: 'Empowering bobaes to use creativity to find innovative solutions to real-world challenges in their communities.',
      icon: Lightbulb,
    },
    {
      title: 'Gratitude & Resilience',
      description: 'Cultivating thankfulness and emotional resilience through the Gratitude Olympics, helping bobaes appreciate the small positives even during challenging times.',
      icon: Heart,
    },
    {
      title: 'Positive Impact',
      description: 'Encouraging bobaes to make a lasting, positive impact on their communities through good deeds and meaningful action.',
      icon: Sparkles,
    },
    {
      title: 'Emotional Well-Being',
      description: 'Promoting emotional well-being for bobaes, parents, teachers, and staff — steering the whole community away from negativity.',
      icon: Smile,
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy via-navy to-navy">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Creative Thinking &amp; Good Deeds
          </h1>
          <p className="text-lg sm:text-xl text-text-brand-light max-w-3xl mx-auto">
            Empowering bobaes to use creativity to find solutions and make a positive impact
          </p>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-6">
              What is CGD?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Inspired by founder Moody Lee, the Creative Thinking and Good Deeds (CGD) program at WZIS empowers bobaes to use creativity to find solutions and make a positive impact on their communities. At its heart is the belief that developing well-rounded individuals means nurturing both academic strength and emotional resilience — preparing bobaes to contribute meaningfully to society.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-5">
                      <IconComponent className="w-12 h-12 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-navy mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRATITUDE OLYMPICS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
              The Gratitude Olympics
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Central to CGD is the Gratitude Olympics — an initiative designed to cultivate thankfulness and emotional resilience across the entire WZIS community. By fostering a sense of gratitude, bobaes, parents, teachers, and staff are encouraged to appreciate even the small positives during challenging times, promoting emotional well-being and steering away from negativity.
            </p>
          </div>

          <div className="bg-warm rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <Globe className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif font-bold text-navy mb-3">
                  Growing Beyond WZIS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Gratitude Olympics extends beyond WZIS, with plans to promote it in South Korea and internationally — spreading the message of gratitude and positive thinking globally. This initiative reflects WZIS's commitment to developing well-rounded individuals who are ready to contribute meaningfully to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-8">
            Join the CGD Movement
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Discover how WZIS develops creative thinkers and compassionate leaders through the CGD program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-block px-8 py-3 bg-white text-accent font-bold rounded-lg hover:bg-accent-soft transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-navy text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Learn More About WZIS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
