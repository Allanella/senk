import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'St. Elizabeth Senior Secondary School Nkoowe (SENK) - Premium Education in Uganda',
  description:
    'St. Elizabeth Senior Secondary School Nkoowe (SENK) provides quality, affordable Catholic education in Uganda. Academic excellence, faith, discipline, and innovation since 1995.',
  generator: 'v0.app',
  keywords: 'secondary school, Uganda, Catholic education, O-Level, A-Level, UNEB, Nkoowe',
  authors: [{ name: 'SENK' }],
  icons: {
    icon: {
      url: '/badge.JPG',
      type: 'image/jpeg',
    },
    apple: '/badge.JPG',
  },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://senk.edu.ug',
    siteName: 'SENK - St. Elizabeth Senior Secondary School Nkoowe',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0D47A1' },
    { media: '(prefers-color-scheme: dark)', color: '#1565C0' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-background ${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
