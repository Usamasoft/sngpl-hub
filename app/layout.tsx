import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://sngplbillcheck.pk'),
  title: {
    default: 'SNGPL Bill Check Online | Pakistan Gas Bill Checker Hub',
    template: '%s | SNGPL Bill Check Hub',
  },
  description:
    'Check your SNGPL gas bill online instantly. Enter your consumer number and get safely redirected to the official Sui Northern Gas portal. Includes calculator, guides, and duplicate bill download help.',
  keywords: [
    'SNGPL bill check online',
    'SNGPL duplicate bill',
    'gas bill online Pakistan',
    'SNGPL consumer number',
    'SNGPL bill calculator',
    'SNGPL gas bill download',
    'sui northern gas bill check',
    'SNGPL online portal Pakistan',
  ],
  authors: [{ name: 'SNGPL Bill Check Hub' }],
  creator: 'SNGPL Bill Check Hub',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website', locale: 'en_PK',
    url: 'https://sngplbillcheck.pk',
    siteName: 'SNGPL Bill Check Hub',
    title: 'SNGPL Gas Bill Check Online | Pakistan Gas Bill Hub',
    description: 'Check SNGPL gas bills online. Consumer number guide, duplicate bill download, bill calculator & more.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SNGPL Bill Check Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNGPL Gas Bill Check Online | Pakistan',
    description: 'Check SNGPL gas bills instantly. Official portal redirect + guides + calculator.',
  },
  alternates: { canonical: 'https://sngplbillcheck.pk' },
};

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, themeColor: '#2563eb',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* AdSense — replace pub-id before going live */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-gray-200 p-3 shadow-xl">
          <a href="/#checker" className="btn-primary w-full py-3.5 text-base justify-center">
            Check SNGPL Bill Now →
          </a>
        </div>
      </body>
    </html>
  );
}
