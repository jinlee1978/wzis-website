import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MessageSquare, MapPin, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact WZIS | Admissions, Careers & General Inquiries',
  description:
    'Get in touch with Weihai Zhongshi International School. Contact admissions, career inquiries, or general support. Phone lines in China and Korea, WeChat, and KakaoTalk available.',
  openGraph: {
    title: 'Contact WZIS — Admissions & Inquiries',
    description:
      'Reach WZIS admissions, careers, or support. Phone lines in China and Korea, WeChat, and KakaoTalk.',
  },
};

export default function ContactPage() {
  const contactInfoItems = [
    {
      icon: Mail,
      title: 'General Inquiries',
      content: 'info@zkis.org',
      type: 'email',
    },
    {
      icon: Mail,
      title: 'Careers',
      content: 'jobs@zhongshischool.org',
      type: 'email',
    },
    {
      icon: Phone,
      title: 'Phone (China)',
      content: '0631-599-6381',
      type: 'phone',
    },
    {
      icon: Phone,
      title: 'Phone (Korea)',
      content: '070-7583-1742',
      type: 'phone',
    },
    {
      icon: MessageSquare,
      title: 'WeChat',
      content: 'andy_pku',
      type: 'chat',
    },
    {
      icon: MessageSquare,
      title: 'KakaoTalk',
      content: 'andypku',
      type: 'chat',
    },
  ];

  const staffMembers = [
    {
      name: 'Arsenio Sumeg-ang',
      position: 'Principal',
      email: 'asumeg-ang@zhongshischool.org',
    },
    {
      name: 'Xochitl Tobias',
      position: 'Head of Primary / VP',
      email: 'xtobias@zhongshischool.org',
    },
    {
      name: 'Position Open',
      position: 'Middle School Coordinator',
      email: null,
    },
    {
      name: 'Andy Kim',
      position: 'Head of Planning & Development / VP',
      email: 'mkkim@zkis.org',
    },
  ];

  const departments = [
    {
      name: 'Academic Admin Office',
      contacts: [
        { label: 'China', value: '+86 0631 596 0713' },
        { label: 'Korea', value: '070 7583 1742' },
      ],
    },
    {
      name: 'HSK Center',
      contacts: [{ label: 'Phone', value: '+86 0631 598 0659' }],
    },
    {
      name: 'Admissions Consultation',
      contact_person: 'Andy Kim',
      contacts: [
        { label: 'WeChat', value: 'Andy_pku' },
        { label: 'KakaoTalk', value: 'andypku' },
        { label: 'Korea', value: '010 8750 8090' },
        { label: 'China', value: '186 1405 8090' },
      ],
    },
  ];

  const quickLinks = [
    { label: 'Admissions', href: '/admissions' },
    { label: 'Academics', href: '/academics' },
    { label: 'Careers', href: '/careers' },
    { label: 'Events', href: '/events' },
    { label: 'Dormitory', href: '/dormitory' },
    { label: 'About', href: '/about' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-mid to-navy-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-brand">
            We&apos;re here to help — reach out anytime
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-navy mb-8">Get in Touch</h2>

            {/* Email and Phone Blocks */}
            <div className="space-y-4">
              {contactInfoItems.slice(0, 6).map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-warm rounded-lg hover:bg-gray-brand-light transition"
                  >
                    <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-navy">{item.title}</h3>
                      <p className="text-text-brand-light text-sm mt-1">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Website and Address */}
            <div className="space-y-4 mt-8 pt-8 border-t border-gray-brand">
              <div className="flex items-start gap-4">
                <ExternalLink className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy">Website</h3>
                  <a
                    href="https://www.wzis.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent text-sm mt-1 inline-block"
                  >
                    www.wzis.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy">Address</h3>
                  <p className="text-text-brand-light text-sm mt-1">
                    42 East Jiang Su Road,<br />
                    International Port Economic and<br />
                    Technological Development District,<br />
                    Weihai City, Shandong Province,<br />
                    China 264-211
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-warm p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Staff Directory Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Staff Directory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffMembers.map((staff, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-navy">{staff.name}</h3>
                <p className="text-sm text-accent font-semibold mt-2">{staff.position}</p>
                {staff.email && (
                  <a
                    href={'mailto:' + staff.email}
                    className="text-text-brand-light hover:text-accent text-sm mt-3 inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    {staff.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-warm p-6 rounded-lg border border-gray-brand">
                <h3 className="text-lg font-bold text-navy mb-4">{dept.name}</h3>
                {dept.contact_person && (
                  <p className="text-sm text-navy-mid font-semibold mb-3">
                    Contact: {dept.contact_person}
                  </p>
                )}
                <div className="space-y-3">
                  {dept.contacts.map((contact, i) => (
                    <div key={i} className="flex justify-between items-start gap-2">
                      <span className="text-sm font-medium text-text-brand-light">{contact.label}:</span>
                      <span className="text-sm text-navy font-semibold">{contact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Location</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-96 bg-gray-brand flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-brand-light mx-auto mb-4" />
                <p className="text-text-brand-light font-semibold">Weihai, Shandong Province, China</p>
                <p className="text-sm text-text-brand-lighter mt-2">
                  42 East Jiang Su Road, International Port Economic and Technological Development District
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block p-4 bg-warm hover:bg-accent-soft border border-gray-brand hover:border-accent-soft rounded-lg text-center font-semibold text-navy hover:text-accent transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
