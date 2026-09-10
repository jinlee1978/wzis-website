'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCampusLifeOpen, setIsCampusLifeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCampusLifeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const simpleLinks = [
    { label: t('about'), href: '/about' },
    { label: t('academics'), href: '/academics' },
  ];

  const campusLifeSubLinks = [
    { label: t('subLinks.athletics'), href: '/athletics' },
    { label: t('subLinks.sportsAcademy'), href: '/sports-academy' },
    { label: t('subLinks.dormitory'), href: '/dormitory' },
    { label: t('subLinks.music'), href: '/music' },
    { label: t('subLinks.events'), href: '/events' },
  ];

  const trailingLinks = [
    { label: t('careers'), href: '/careers' },
    { label: t('contact'), href: '/contact' },
  ];

  const navbarClasses = 'fixed top-0 left-0 right-0 h-[74px] z-50 transition-all duration-200' +
    (isScrolled ? ' shadow-md' : '') +
    ' bg-white/90 backdrop-blur-md';

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/images/crest.webp"
            alt="WZIS Crest"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-semibold text-navy" style={{ fontFamily: 'DM Serif Display' }}>
            WZIS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-mid hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Campus Life Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsCampusLifeOpen(!isCampusLifeOpen)}
              onMouseEnter={() => setIsCampusLifeOpen(true)}
              className="text-sm font-medium text-navy-mid hover:text-navy transition-colors flex items-center gap-1"
            >
              {t('campusLife')}
              <ChevronDown className={"w-3.5 h-3.5 transition-transform" + (isCampusLifeOpen ? " rotate-180" : "")} />
            </button>

            {isCampusLifeOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                onMouseLeave={() => setIsCampusLifeOpen(false)}
              >
                {campusLifeSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-navy-mid hover:bg-warm hover:text-navy transition-colors"
                    onClick={() => setIsCampusLifeOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {trailingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-mid hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section: CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Apply Now CTA */}
          <Link
            href="/admissions"
            className="hidden sm:inline-block px-6 py-2 bg-navy text-white rounded-lg font-medium text-sm hover:bg-navy-mid transition-colors"
          >
            {t('applyNow')}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-mid hover:text-navy transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[74px] left-0 right-0 bg-white border-b border-gray-brand-light shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-navy-mid hover:text-navy transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Campus Life section in mobile */}
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {t('campusLife')}
              </p>
              <div className="pl-3 space-y-2 border-l-2 border-accent-soft">
                {campusLifeSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-medium text-navy-mid hover:text-navy transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {trailingLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-navy-mid hover:text-navy transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-gray-brand-light mt-3">
              <Link
                href="/admissions"
                className="block px-6 py-2 bg-navy text-white rounded-lg font-medium text-sm text-center hover:bg-navy-mid transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('applyNow')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
