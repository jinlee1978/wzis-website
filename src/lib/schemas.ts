/**
 * JSON-LD structured data schemas for SEO.
 * These are injected into page metadata to help search engines
 * understand site content (Google, Bing, Naver, etc.)
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://wzis.org/#organization',
  name: 'Weihai Zhongshi International School',
  alternateName: ['WZIS', '威海中世国际学校'],
  url: 'https://wzis.org',
  logo: 'https://wzis.org/images/crest.webp',
  image: 'https://wzis.org/images/og-default.jpg',
  description:
    'A WASC and ACSI accredited Cambridge International school in Weihai, China, serving Pre-K through Grade 12. Shaping servant leaders through academic excellence and character development since 2006.',
  foundingDate: '2006',
  founder: [
    { '@type': 'Person', name: 'Moody Lee' },
    { '@type': 'Person', name: 'Esther Lee' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42 East Jiang Su Road, International Port Economic and Technological Development District',
    addressLocality: 'Weihai',
    addressRegion: 'Shandong',
    postalCode: '264211',
    addressCountry: 'CN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.5,
    longitude: 122.1,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Admissions',
      telephone: '+86-631-599-6381',
      email: 'info@zkis.org',
      areaServed: ['CN', 'KR'],
      availableLanguage: ['English', 'Korean'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Careers',
      email: 'jobs@zhongshischool.org',
      availableLanguage: ['English'],
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'China' },
    { '@type': 'Country', name: 'South Korea' },
  ],
  knowsLanguage: ['en', 'ko'],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 40 },
  slogan: 'Shaping Servant Leaders',
};

export const breadcrumbSchema = (pageName: string, pageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://wzis.org',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: pageName,
      item: pageUrl,
    },
  ],
});

export const admissionsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the admissions process at WZIS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The WZIS admissions process includes an initial consultation, creating a communication group chat, submitting an application with required documents, an interview with parents and student, approval confirmation, and receiving an invoice and acceptance letter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are required for admission to WZIS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Required documents include passport copies, previous school transcripts and records, a completed application form, and medical records. Contact Andy Kim at mkkim@zkis.org for the full checklist.',
      },
    },
    {
      '@type': 'Question',
      name: 'What grade levels does WZIS offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WZIS offers education from Pre-Kindergarten through Grade 12, following the Cambridge International Curriculum with IGCSE and A-Level pathways.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WZIS provide on-campus dormitory housing for students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, WZIS offers on-campus dormitory housing with supervised living, study areas, and a supportive community environment for boarding students.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WZIS accredited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, WZIS holds accreditations from WASC (Western Association of Schools and Colleges), ACSI (Association of Christian Schools International), and is a Cambridge International school.',
      },
    },
  ],
};

export const jobPostingSchema = (job: {
  title: string;
  description: string;
  id: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: job.title,
  description: job.description,
  identifier: {
    '@type': 'PropertyValue',
    name: 'WZIS',
    value: job.id,
  },
  datePosted: new Date().toISOString().split('T')[0],
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'EducationalOrganization',
    name: 'Weihai Zhongshi International School',
    sameAs: 'https://wzis.org',
    logo: 'https://wzis.org/images/crest.webp',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Weihai',
      addressRegion: 'Shandong',
      addressCountry: 'CN',
    },
  },
  applicantLocationRequirements: {
    '@type': 'Country',
    name: 'China',
  },
  jobBenefits:
    'Competitive salary, furnished housing, tuition benefits for dependents, professional development, annual flights, meals provided',
});

export const careersPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Teaching Positions at Weihai Zhongshi International School',
  description:
    'WZIS is recruiting experienced educators for multiple positions including Elementary, English, Mathematics, Science, and Physical Education teachers. Competitive salary, furnished housing, tuition benefits, and professional development provided.',
  datePosted: new Date().toISOString().split('T')[0],
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'EducationalOrganization',
    name: 'Weihai Zhongshi International School',
    sameAs: 'https://wzis.org',
    logo: 'https://wzis.org/images/crest.webp',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Weihai',
      addressRegion: 'Shandong',
      addressCountry: 'CN',
    },
  },
  jobBenefits:
    'Competitive salary, furnished housing, tuition benefits for dependents, professional development, annual flights, meals provided',
};
