import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 pb-20 sm:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
                </svg>
              </div>
              <span className="font-bold text-white">SNGPL Bill Check Hub</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Pakistan&apos;s most complete resource for SNGPL gas bill checking, consumer number guides, duplicate bill downloads, and gas bill calculators. 100% safe — official redirects only.
            </p>
            <div className="mt-4 p-3 bg-gray-800 rounded-xl text-xs text-gray-400 leading-relaxed">
              ⚠️ Not affiliated with SNGPL. This site only redirects to the official portal at{' '}
              <strong className="text-gray-300">billchecker.sngpl.com.pk</strong>
            </div>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Quick Guides</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/bill-check',      label: 'SNGPL Bill Check Guide' },
                { href: '/consumer-number', label: 'Consumer Number Help' },
                { href: '/duplicate-bill',  label: 'Duplicate Bill Download' },
                { href: '/payment-guide',   label: 'Bill Payment Guide' },
                { href: '/calculator',      label: 'Gas Bill Calculator' },
                { href: '/guides',          label: 'All Guides' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-blue-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official + City guides */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Official Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://billchecker.sngpl.com.pk/" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-400 transition-colors flex items-center gap-1">
                  SNGPL Bill Portal ↗
                </a>
              </li>
              <li>
                <a href="https://www.sngpl.com.pk/" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-400 transition-colors flex items-center gap-1">
                  SNGPL Official Website ↗
                </a>
              </li>
              <li>
                <a href="https://selfservice.sngpl.com.pk/" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-400 transition-colors flex items-center gap-1">
                  SNGPL Self-Service ↗
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-500">Helpline: <span className="text-gray-300 font-mono">1199</span></li>
            </ul>
            <h3 className="font-semibold text-white mt-5 mb-3 text-sm">City Guides</h3>
            <ul className="space-y-1.5 text-sm">
              {[
                { href: '/sngpl/bill-check/lahore-check-online',     label: 'Lahore' },
                { href: '/sngpl/bill-check/islamabad-check-online',  label: 'Islamabad' },
                { href: '/sngpl/bill-check/rawalpindi-check-online', label: 'Rawalpindi' },
                { href: '/sngpl/bill-check/peshawar-check-online',   label: 'Peshawar' },
                { href: '/sngpl/bill-check/faisalabad-check-online', label: 'Faisalabad' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-blue-400 transition-colors text-gray-400">{l.label} SNGPL Guide</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} SNGPL Bill Check Hub. All rights reserved.</p>
          <p>Informational use only. No data scraping or storage of consumer data.</p>
        </div>
      </div>
    </footer>
  );
}
