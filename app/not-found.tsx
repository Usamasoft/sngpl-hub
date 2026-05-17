import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 – Page Not Found | SNGPL Bill Check Hub',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-extrabold text-blue-100 mb-4 select-none">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h1>
      <p className="text-gray-500 max-w-sm mb-8">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn-primary">🏠 Home</Link>
        <Link href="/sngpl-bill-check-online" className="btn-secondary">🔍 Bill Check Guide</Link>
        <Link href="/gas-bill-calculator" className="btn-secondary">🧮 Calculator</Link>
      </div>
    </div>
  );
}
