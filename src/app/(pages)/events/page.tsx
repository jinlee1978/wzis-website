import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Sparkles,
  Trophy,
  Music,
  Users,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events & Academic Calendar | WZIS',
  description:
    'Explore the WZIS academic calendar, school events, sports tournaments, arts performances, and community celebrations at Weihai Zhongshi International School.',
  openGraph: {
    title: 'WZIS Events & Academic Calendar',
    description:
      'School events, sports tournaments, arts performances, and community celebrations throughout the academic year.',
  },
};

export default function EventsPage() {
  // TODO: Replace hardcoded semesters with Sanity data from academic_calendars collection
  const semesters = [
    {
      id: 'fall-2025',
      name: 'First Semester',
      period: 'Aug 2025 - Jan 2026',
      days: 89,
      opening: 'Aug 25, 2025',
      break: {
        name: 'Winter Break',
        dates: 'Jan 10 - Mar 1, 2026',
      },
      themes: ['August', 'Mid-Autumn', 'United Nations', 'Thanksgiving', 'Christmas'],
    },
    {
      id: 'spring-2026',
      name: 'Second Semester',
      period: 'Feb 2026 - Jul 2026',
      days: 90,
      opening: 'Mar 2, 2026',
      break: {
        name: 'Summer Break',
        dates: 'Aug 1, 2026',
      },
      themes: ['March', 'English', 'Sports', 'Art & Music'],
    },
  ];

  // TODO: Replace hardcoded events with Sanity data from events collection (filtered for Second Semester)
  const monthlyEvents = [
    {
      month: 'March',
      events: [
        {
          date: 'Mar 2',
          title: 'Opening Day & ID Photos',
          audience: 'Whole School',
        },
        {
          date: 'Mar 27',
          title: 'Birthday Party & Casual Day',
          audience: 'All Students',
        },
      ],
    },
    {
      month: 'April',
      events: [
        {
          date: 'Apr 6',
          title: 'Tomb-Sweeping Day',
          audience: 'Holiday',
        },
        {
          date: 'Apr 24',
          title: 'Birthday Party',
          audience: 'All Students',
        },
        {
          date: 'Apr 27-29',
          title: 'Midterm Assessments',
          audience: 'All Students',
        },
        {
          date: 'Apr 30',
          title: 'Field Trip',
          audience: 'All Students',
        },
      ],
    },
    {
      month: 'May',
      events: [
        {
          date: 'May 1-5',
          title: 'Labor Day Holiday',
          audience: 'School Closure',
        },
        {
          date: 'May 29',
          title: 'Birthday Party',
          audience: 'All Students',
        },
      ],
    },
    {
      month: 'June',
      events: [
        {
          date: 'Jun 1',
          title: "Children's Day",
          audience: 'Holiday',
        },
        {
          date: 'Jun 6',
          title: 'IGCSE/A-Level Exam Period',
          audience: 'Grades 10-12',
        },
        {
          date: 'Jun 19',
          title: 'Dragon Boat Festival',
          audience: 'Holiday',
        },
        {
          date: 'Jun 20-24',
          title: 'Final Exams',
          audience: 'All Students',
        },
        {
          date: 'Jun 25',
          title: 'Dragon Boat Festival Field Trip',
          audience: 'All Students',
        },
      ],
    },
    {
      month: 'July',
      events: [
        {
          date: 'Jul 1',
          title: 'Recognition & Closing Ceremony',
          audience: 'Whole School',
        },
        {
          date: 'Jul 2',
          title: 'G12 Graduation & Farewell',
          audience: 'Grade 12',
        },
        {
          date: 'Jul 3',
          title: 'Last Day of School',
          audience: 'Whole School',
        },
        {
          date: 'Jul 3-31',
          title: 'Summer Programs',
          audience: 'All Students',
        },
        {
          date: 'Aug 1+',
          title: 'Summer Break',
          audience: 'School Closure',
        },
      ],
    },
  ];

  // TODO: Replace hardcoded highlights with Sanity data from annual_highlights collection
  const highlights = [
    {
      id: 'shining-heart',
      title: 'Shining Heart Festival',
      description: 'Community-wide cultural celebration and talent showcase',
      icon: Sparkles,
    },
    {
      id: 'christmas',
      title: 'Zhongshi Christmas Festival',
      description: 'Holiday celebration with performances and activities',
      icon: Music,
    },
    {
      id: 'sports-academy',
      title: 'ZSA Launch Ceremony',
      description: 'Official launch of Zhongshi Sports Academy programs',
      icon: Trophy,
    },
    {
      id: 'sports-day',
      title: 'Sports Day & Athletics',
      description: 'Whole-school athletics competition',
      icon: Trophy,
    },
    {
      id: 'volleyball',
      title: 'Lingang Volleyball Tournament',
      description: 'Inter-school volleyball competition',
      icon: Trophy,
    },
    {
      id: 'dragon-boat',
      title: 'Dragon Boat Festival',
      description: 'Cultural celebration with traditional activities',
      icon: Calendar,
    },
    {
      id: 'graduation',
      title: 'Grade 12 Graduation',
      description: 'Commencement ceremony for graduating seniors',
      icon: Users,
    },
    {
      id: 'closing-ceremony',
      title: 'Recognition & Closing Ceremony',
      description: 'End-of-year awards and celebration',
      icon: Sparkles,
    },
    {
      id: 'tedx',
      title: 'TED x @WZFS',
      description: 'Student-led TED-style talks',
      icon: Users,
    },
    {
      id: 'wesc',
      title: 'WESC Main Event & Awards',
      description: 'WZIS English Speech Competition',
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            School Calendar & Events
          </h1>
          <p className="text-xl text-white opacity-90">
            2025-2026 Academic Year
          </p>
        </div>
      </section>

      {/* ACADEMIC CALENDAR OVERVIEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-navy mb-12 text-center">
            Academic Calendar Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {semesters.map((semester) => (
              <div
                key={semester.id}
                className="border-2 border-accent rounded-lg p-8 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-navy mb-2">
                    {semester.name}
                  </h3>
                  <p className="text-lg font-sans text-accent font-semibold">
                    {semester.period}
                  </p>
                  <p className="text-sm text-warm mt-1">
                    {semester.days} instructional days
                  </p>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-sm font-sans text-gray-600 uppercase tracking-wide">
                      Opening Date
                    </p>
                    <p className="text-lg font-serif font-bold text-navy">
                      {semester.opening}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-sans text-gray-600 uppercase tracking-wide">
                      {semester.break.name}
                    </p>
                    <p className="text-lg font-serif font-bold text-navy">
                      {semester.break.dates}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-sans text-gray-600 uppercase tracking-wide mb-3">
                    Thematic Units
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {semester.themes.map((theme, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-accent bg-opacity-10 text-navy rounded-full text-sm font-sans"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND SEMESTER EVENTS TIMELINE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-navy mb-12 text-center">
            Second Semester Event Timeline
          </h2>

          <div className="space-y-12">
            {monthlyEvents.map((monthData, monthIdx) => (
              <div key={monthData.month}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-navy">
                    {monthData.month}
                  </h3>
                </div>

                <div className="ml-6 space-y-4 border-l-2 border-accent pl-6">
                  {monthData.events.map((event, eventIdx) => (
                    <div key={eventIdx} className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-accent" />
                      <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div className="flex-1">
                            <p className="text-sm font-sans font-semibold text-accent uppercase tracking-wide">
                              {event.date}
                            </p>
                            <p className="text-lg font-serif font-bold text-navy mt-1">
                              {event.title}
                            </p>
                          </div>
                          <p className="text-sm font-sans text-warm font-medium whitespace-nowrap">
                            {event.audience}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {monthIdx < monthlyEvents.length - 1 && (
                  <div className="mt-8 mb-4 border-t border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANNUAL HIGHLIGHTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-navy mb-12 text-center">
            Annual Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={highlight.id}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-accent hover:bg-opacity-5 transition-colors border border-gray-200 hover:border-accent"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm font-sans text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-navy mb-6">
            Want to Visit Campus?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-sans">
            Experience our vibrant school community firsthand. Schedule a campus visit or learn more about our programs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-opacity-90 text-white font-sans font-semibold rounded-lg transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
