'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navigationLinks = [
    { label: t('about'), href: '/about' },
    { label: t('academics'), href: '/academics' },
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
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-mid hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Language Toggle + CTA + Mobile Menu */}
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
            {navigationLinks.map((link) => (
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
