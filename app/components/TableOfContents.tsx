'use client';
import { useState } from 'react';

export interface TOCItem { id: string; label: string; }

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 my-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-blue-900 text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7"/></svg>
          Table of Contents
        </h3>
        <button onClick={() => setCollapsed(!collapsed)} className="text-xs text-blue-600 font-medium">
          {collapsed ? 'Show' : 'Hide'}
        </button>
      </div>
      {!collapsed && (
        <ol className="space-y-1 animate-fade-in">
          {items.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="toc-link flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-200 text-blue-800 rounded-full text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
