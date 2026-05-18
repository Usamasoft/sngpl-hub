'use client';
import { useState, useEffect } from 'react';

const PORTAL_URL = 'https://sngpl.com.pk/';

interface RecentSearch { num: string; ts: number; }

export default function SNGPLChecker() {
  const [val, setVal]         = useState('');
  const [err, setErr]         = useState('');
  const [recent, setRecent]   = useState<RecentSearch[]>([]);
  const [copied, setCopied]   = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem('sngpl_recent');
      if (s) setRecent(JSON.parse(s));
    } catch {}
  }, []);

  const save = (num: string) => {
    try {
      const updated = [{ num, ts: Date.now() }, ...recent.filter(r => r.num !== num)].slice(0, 5);
      setRecent(updated);
      localStorage.setItem('sngpl_recent', JSON.stringify(updated));
    } catch {}
  };

  const validate = () => {
    if (!val.trim()) { setErr('Please enter your SNGPL consumer number.'); return false; }
    if (val.trim().length < 6) { setErr('Consumer number is too short. Please check and try again.'); return false; }
    setErr(''); return true;
  };

  const handleCheck = () => {
    if (!validate()) return;
    save(val.trim());
    window.open(PORTAL_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(val).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div id="checker" className="w-full max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">SNGPL Bill Checker</h2>
              <p className="text-blue-100 text-xs mt-0.5">Enter number → Redirect to official portal</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Input */}
          <div>
            <label htmlFor="consumerNo" className="block text-sm font-semibold text-gray-700 mb-2">
              Consumer Number
            </label>
            <div className="relative">
              <input
                id="consumerNo"
                type="text"
                value={val}
                onChange={e => { setVal(e.target.value); setErr(''); }}
                onKeyDown={e => e.key === 'Enter' && handleCheck()}
                placeholder="e.g. 1234567890"
                className="input-field pr-12 text-lg font-mono"
                autoComplete="off"
                inputMode="numeric"
              />
              {val && (
                <button onClick={handleCopy} title="Copy"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-blue-600 transition-colors">
                  {copied
                    ? <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>}
                </button>
              )}
            </div>
            <p className="mt-1.5 text-xs text-gray-400 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Printed at the top of your SNGPL gas bill
            </p>
            {err && <p className="mt-2 text-xs text-red-600 flex items-center gap-1 animate-fade-in">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              {err}
            </p>}
          </div>

          {/* CTA */}
          <button onClick={handleCheck} className="btn-primary w-full py-4 text-base">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z"/></svg>
            Check SNGPL Bill Now
          </button>

          {/* Safety notice */}
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-xl border border-green-100">
            <svg className="w-4 h-4 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <p className="text-xs text-green-700">
              You will be safely redirected to the <strong>official SNGPL bill portal</strong>. We never store your consumer number.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Searches */}
      {recent.length > 0 && (
        <div className="mt-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4 animate-slide-up">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recent Searches</h3>
            <button onClick={() => { setRecent([]); localStorage.removeItem('sngpl_recent'); }}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors">Clear</button>
          </div>
          <ul className="space-y-1">
            {recent.map((r, i) => (
              <li key={i}>
                <button onClick={() => { setVal(r.num); setErr(''); }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-left transition-colors group">
                  <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-sm font-mono text-gray-700 group-hover:text-blue-700">{r.num}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
