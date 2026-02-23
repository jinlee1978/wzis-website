// Each image is assigned to exactly ONE page (except crest.webp which is used in nav/footer).
// This prevents image reuse across pages.

export const IMAGE_MAP: Record<string, string[]> = {
  homepage: [
    '/images/hero-campus.webp',
    '/images/weihai-bridge.webp',
    '/images/weihai-waterfall.webp',
    '/images/weihai-temple.webp',
    '/images/weihai-coastline.webp',
    '/images/weihai-park.webp',
    '/images/classroom-elementary.webp',
    '/images/classroom-secondary.webp',
    '/images/campus-aerial.webp',
    '/images/students-outdoor.webp',
  ],
  about: ['/images/about-hero.webp', '/images/president-portrait.webp'],
  academics: ['/images/academics-hero.webp', '/images/lab-science.webp', '/images/library.webp'],
  admissions: ['/images/admissions-hero.webp', '/images/campus-entrance.webp'],
  athletics: ['/images/athletics-hero.webp', '/images/basketball-court.webp', '/images/track-field.webp'],
  careers: ['/images/careers-hero.webp'],
  contact: ['/images/contact-hero.webp', '/images/campus-map.webp'],
  dormitory: ['/images/dormitory-hero.webp', '/images/dorm-room.webp', '/images/dorm-common.webp'],
  events: ['/images/events-hero.webp'],
  music: ['/images/music-hero.webp', '/images/music-performance.webp', '/images/music-practice.webp'],
  'sports-academy': ['/images/sports-academy-hero.webp', '/images/baseball-field.webp', '/images/volleyball-court.webp'],
  'college-acceptance': ['/images/college-hero.webp', '/images/graduation.webp'],
  accreditation: ['/images/accreditation-hero.webp'],
  cgd: ['/images/cgd-hero.webp'],
  hsk: ['/images/hsk-hero.webp'],
  'one-plus-three': ['/images/one-plus-three-hero.webp'],
};

// Shared across all pages (exceptions)
export const SHARED_IMAGES = ['/images/crest.webp'];

export function getPageImages(page: string): string[] {
  return [...(IMAGE_MAP[page] || []), ...SHARED_IMAGES];
}
