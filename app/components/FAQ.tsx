'use client';
import { useState } from 'react';

export interface FAQItem { q: string; a: string; }

export default function FAQ({ items, title = 'Frequently Asked Questions' }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="badge bg-blue-100 text-blue-700 mb-3">FAQ</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: items.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
        }) }} />
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}>
                <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{item.q}</span>
                <svg className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-3 bg-blue-50 animate-fade-in">
                  <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
