import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/header';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Skeleton Loading Patterns | Tom DeLuca',
  description:
    '8 production-ready skeleton screen patterns with smooth content-reveal transitions. A portfolio demo demonstrating perceived performance techniques.',
  metadataBase: new URL('https://tomdeluca-skeleton.netlify.app'),
  openGraph: {
    title: 'Skeleton Loading Patterns',
    description:
      'A portfolio demo by Tom DeLuca showcasing loading state UI patterns.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skeleton Loading Patterns',
    description:
      'A portfolio demo by Tom DeLuca showcasing loading state UI patterns.',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
