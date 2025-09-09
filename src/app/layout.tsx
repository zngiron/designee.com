import type { Metadata, Viewport } from 'next';

import { Inter, Montserrat } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Providers } from '@/components/providers';
import { Scripts } from '@/components/scripts';
import { env } from '@/library/environment';
import { cn } from '@/library/utilities';

import '@/app/globals.css';

const inter = Inter({
  display: 'swap',
  variable: '--font-inter',
  weight: [
    '500',
    '700',
  ],
  subsets: [
    'latin',
  ],
});

const montserrat = Montserrat({
  display: 'swap',
  variable: '--font-montserrat',
  weight: [
    '700',
  ],
  subsets: [
    'latin',
  ],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(env.DOMAIN),
  title: {
    default: 'Designee | We keep it cute, creative and hassle-free',
    template: '%s | Designee',
  },
  description: 'We keep it cute, creative and hassle-free',
  keywords: [
    'Designee',
    'Design',
    'Design Agency',
    'Design Company',
    'Design Services',
    'Design Portfolio',
    'Design Blog',
    'Design News',
    'Design Tips',
    'Design Trends',
    'Design Inspiration',
    'Design Tools',
    'Design Resources',
    'Design Templates',
    'Design Examples',
    'Design Projects',
    'Design Case Studies',
    'Design Research',
    'Design Analysis',
    'Design Strategy',
    'Design Implementation',
    'Design Management',
    'Design Leadership',
    'Design Team',
    'Design Culture',
    'Design Process',
    'Design Methodology',
    'Design Framework',
    'Design System',
    'Design Pattern',
    'Design Principle',
    'Design Rule',
    'Design Guideline',
    'Design Principle',
    'Design Rule',
    'Design Guideline',
    'Design Principle',
    'Design Rule',
    'Design Guideline',
  ],
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Designee',
    locale: 'en',
    images: [
      {
        url: '/static/designee-thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Designee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      {
        url: '/static/designee-icon-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/static/designee-icon-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          inter.variable,
          montserrat.variable,
          'overflow-x-auto touch-pan-y scroll-smooth',
          'flex flex-col min-h-dvh',
          'font-sans antialiased',
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
        <Scripts />
      </body>
    </html>
  );
}
