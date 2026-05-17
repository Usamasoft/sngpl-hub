'use client';
import { useState } from 'react';
import Link from 'next/link';

const nav = [
  { href: '/',            label: 'Home' },
  { href: '/bill-check',  label: 'Bill Check' },
  { href: '/guides',      label: 'Guides' },
  { href: '/calculator',  label: 'Calculator' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="font-black text-blue-700 text-sm block">SNGPL</span>
              <span className="font-semibold text-gray-700 text-xs block">Bill Check Hub</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map(l => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/#checker" className="hidden sm:inline-flex btn-primary py-2 px-4 text-sm">
              🔍 Check Bill
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors" aria-label="Menu">
              {open
                ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-gray-100 py-3 animate-fade-in">
            {nav.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="px-2 pt-2">
              <Link href="/#checker" onClick={() => setOpen(false)} className="btn-primary w-full py-3">🔍 Check SNGPL Bill</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
