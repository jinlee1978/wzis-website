'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');


  const exploreLinks = [
    { label: t('exploreLinks.about'), href: '/about' },
    { label: t('exploreLinks.events'), href: '/events' },
    { label: t('exploreLinks.contact'), href: '/contact' },
    { label: t('exploreLinks.admissions'), href: '/admissions' },
  ];

  const programsLinks = [
    { label: t('programsLinks.academics'), href: '/academics' },
    { label: t('programsLinks.cgd'), href: '/cgd' },
    { label: t('programsLinks.onePlusThree'), href: '/one-plus-three' },
    { label: t('programsLinks.hsk'), href: '/hsk' },
  ];

  const campusLifeLinks = [
    { label: t('campusLifeLinks.athletics'), href: '/athletics' },
    { label: t('campusLifeLinks.sportsAcademy'), href: '/sports-academy' },
    { label: t('campusLifeLinks.music'), href: '/music' },
    { label: t('campusLifeLinks.careers'), href: '/careers' },
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">
              {t('brand.schoolName')}
            </h3>
            <p className="text-sm text-accent-soft font-medium">
              {t('brand.tagline')}
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              {t('brand.description')}
            </p>
          </div>

          {/* Explore Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-white">
              {t('explore.title')}
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-white">
              {t('programs.title')}
            </h4>
            <ul className="space-y-2">
              {programsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Life Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-white">
              {t('campusLife.title')}
            </h4>
            <ul className="space-y-2">
              {campusLifeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Bar with Copyright and Accreditation */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              &copy; 2006 {t('copyright.text')}
            </p>

            {/* Accreditation Badges */}
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/50 border border-white/20 rounded px-2 py-1">WASC</span>
              <span className="text-xs text-white/50 border border-white/20 rounded px-2 py-1">ACSI</span>
              <span className="text-xs text-white/50 border border-white/20 rounded px-2 py-1">Cambridge</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
