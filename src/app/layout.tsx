import type { Metadata, Viewport } from 'next';

import { Geist } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Providers } from '@/components/providers';
import { Scripts } from '@/components/scripts';
import { env } from '@/library/environment';
import { cn } from '@/library/utilities';

import '@/app/globals.css';

const geist = Geist({
  display: 'swap',
  variable: '--font-geist',
  weight: [
    '500',
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
    default: 'Front-End Development',
    template: '%s | Front-End Development',
  },
  description: '',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Front-End Development',
    locale: 'en',
    images: [
      {
        url: '/static/frontend-dev-thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Front-End Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
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
          geist.variable,
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
