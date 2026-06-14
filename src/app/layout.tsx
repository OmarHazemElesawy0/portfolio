import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { SkipLink } from '@/components/layout/SkipLink/SkipLink';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Resolves to a custom domain if set, otherwise the Vercel production URL,
// falling back to localhost in development.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Omar Elesawy — Frontend Engineer',
    template: '%s | Omar Elesawy',
  },
  description:
    'Senior Frontend Engineer specializing in checkout, cart, and payment experiences at scale. Building e-commerce systems at noon.',
  keywords: [
    'Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'E-commerce',
    'Checkout',
    'Payments',
    'Cairo',
    'Egypt',
    'noon',
  ],
  authors: [{ name: 'Omar Elesawy', url: siteUrl }],
  creator: 'Omar Elesawy',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Omar Elesawy',
    title: 'Omar Elesawy — Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in checkout, cart, and payment experiences at scale.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Elesawy — Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in checkout, cart, and payment experiences at scale.',
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
};

export const viewport: Viewport = {
  themeColor: '#080808',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Omar Elesawy',
  jobTitle: 'Frontend Software Engineer III (Senior)',
  worksFor: {
    '@type': 'Organization',
    name: 'noon',
  },
  url: siteUrl,
  email: 'omarhazem2204@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'German University in Cairo',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'German International University',
    },
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Frontend Architecture',
    'E-commerce',
    'Checkout Systems',
    'Payment Systems',
    'Performance Optimization',
  ],
  sameAs: [
    'https://github.com/OmarHazemElesawy0',
    'https://www.linkedin.com/in/omar-elesawy-286915239',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SkipLink />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
