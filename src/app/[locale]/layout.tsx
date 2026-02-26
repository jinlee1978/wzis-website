import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/chatbot/ChatWidget';
import { organizationSchema } from '@/lib/schemas';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wzis.org'),
  title: {
    template: '%s | WZIS — Weihai Zhongshi International School',
    default: 'WZIS — Weihai Zhongshi International School | Premier International School in Weihai, China',
  },
  description:
    'Weihai Zhongshi International School (WZIS) — a WASC and ACSI accredited Cambridge International school in Weihai, China. Offering Pre-K through Grade 12 education with on-campus dormitory. Now enrolling Korean and international families. Teaching positions available.',
  keywords: [
    'international school Weihai',
    'international school China',
    'WZIS',
    'Weihai Zhongshi International School',
    'Cambridge school China',
    'WASC accredited school China',
    'ACSI accredited school',
    'international school admissions',
    'international school teaching jobs China',
    'expat teaching jobs China',
    'English teacher China',
    'boarding school Weihai',
    'Pre-K through Grade 12 China',
    'IGCSE A-Level school',
    'international school Shandong',
    '위해 국제학교',
    '국제학교 중국',
    '웨이하이 국제학교',
  ],
  authors: [{ name: 'Weihai Zhongshi International School' }],
  creator: 'WZIS',
  publisher: 'Weihai Zhongshi International School',
  openGraph: {
    type: 'website',
    siteName: 'WZIS — Weihai Zhongshi International School',
    locale: 'en_US',
    url: 'https://wzis.org',
    title: 'WZIS — Weihai Zhongshi International School',
    description:
      'A WASC-accredited Cambridge International school in Weihai, China. Pre-K through Grade 12. Admissions open for Korean and international families. Teaching careers available.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'WZIS — Weihai Zhongshi International School campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WZIS — Weihai Zhongshi International School',
    description:
      'Premier Cambridge International school in Weihai, China. Pre-K through Grade 12. Admissions open.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': 'REPLACE_WITH_GOOGLE_VERIFICATION_CODE',
    'naver-site-verification': 'REPLACE_WITH_NAVER_VERIFICATION_CODE',
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script defer src="/_vercel/insights/script.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans text-text-brand bg-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
