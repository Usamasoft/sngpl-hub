'use client';
import { useState, useCallback } from 'react';

// SNGPL Residential Slab Rates 2024-25 (approximate)
const SLABS = [
  { label: '0 – 1 HHM',   max: 1,        rate: 200  },
  { label: '1 – 2 HHM',   max: 2,        rate: 400  },
  { label: '2 – 3 HHM',   max: 3,        rate: 600  },
  { label: '3 – 4 HHM',   max: 4,        rate: 800  },
  { label: 'Above 4 HHM', max: Infinity, rate: 1200 },
];
const FIXED_CHARGE  = 100;
const GST_RATE      = 0.17;
const INFRA_RATE    = 0.05;

function calc(hhm: number) {
  let energy = 0, prev = 0;
  for (const s of SLABS) {
    if (hhm <= prev) break;
    const consumed = Math.min(hhm, s.max) - prev;
    energy += consumed * s.rate;
    prev = s.max;
  }
  const fixed  = FIXED_CHARGE;
  const infra  = energy * INFRA_RATE;
  const sub    = energy + fixed + infra;
  const gst    = sub * GST_RATE;
  const total  = sub + gst;
  return { energy, fixed, infra, gst, total };
}

const fmt = (n: number) => `PKR ${Math.round(n).toLocaleString('en-PK')}`;

export default function GasCalculator() {
  const [hhm, setHhm]         = useState('');
  const [prev, setPrev]       = useState('');
  const [curr, setCurr]       = useState('');
  const [mode, setMode]       = useState<'hhm' | 'meter'>('hhm');
  const [result, setResult]   = useState<ReturnType<typeof calc> | null>(null);
  const [err, setErr]         = useState('');
  const [activeHhm, setActive]= useState<number | null>(null);

  const compute = useCallback(() => {
    let h = 0;
    if (mode === 'hhm') {
      h = parseFloat(hhm);
      if (!hhm || isNaN(h) || h <= 0) { setErr('Please enter valid HHM consumption.'); return; }
      if (h > 200) { setErr('HHM value seems too high.'); return; }
    } else {
      const p = parseFloat(prev), c = parseFloat(curr);
      if (isNaN(p) || isNaN(c) || c <= p) { setErr('Current reading must be greater than previous.'); return; }
      h = (c - p) / 100;
    }
    setErr('');
    setActive(h);
    setResult(calc(h));
  }, [hhm, prev, curr, mode]);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Mode toggle */}
      <div className="flex bg-gray-100 rounded-2xl p-1 mb-6">
        {(['hhm', 'meter'] as const).map(m => (
          <button key={m} onClick={() => { setMode(m); setResult(null); setErr(''); }}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${mode === m ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
            {m === 'hhm' ? '📊 Enter HHM directly' : '🔢 Enter Meter Readings'}
          </button>
        ))}
      </div>

      <div className="card space-y-5">
        <div>
          <h3 className="font-bold text-gray-900 text-lg">SNGPL Gas Bill Estimator</h3>
          <p className="text-sm text-gray-500 mt-1">Based on approximate SNGPL 2024-25 residential tariff rates.</p>
        </div>

        {mode === 'hhm' ? (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Gas Consumption (HHM)</label>
            <input type="number" min="0" step="0.1" value={hhm}
              onChange={e => { setHhm(e.target.value); setResult(null); setErr(''); }}
              onKeyDown={e => e.key === 'Enter' && compute()}
              placeholder="e.g. 2.5" className="input-field" />
            <p className="text-xs text-gray-400 mt-1">HHM = Hundreds of Cubic Meters — printed on your bill under &quot;Consumption&quot;</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {[0.5, 1, 1.5, 2, 3, 4].map(v => (
                <button key={v} onClick={() => { setHhm(String(v)); setResult(null); setErr(''); }}
                  className="px-3 py-1.5 text-xs rounded-lg bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors">
                  {v} HHM
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Previous Reading</label>
              <input type="number" value={prev}
                onChange={e => { setPrev(e.target.value); setResult(null); setErr(''); }}
                placeholder="e.g. 4500" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Current Reading</label>
              <input type="number" value={curr}
                onChange={e => { setCurr(e.target.value); setResult(null); setErr(''); }}
                onKeyDown={e => e.key === 'Enter' && compute()}
                placeholder="e.g. 4750" className="input-field" />
            </div>
            {prev && curr && parseFloat(curr) > parseFloat(prev) && (
              <div className="sm:col-span-2 text-xs text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                Consumption: <strong>{((parseFloat(curr) - parseFloat(prev)) / 100).toFixed(2)} HHM</strong>
              </div>
            )}
          </div>
        )}

        {err && <p className="text-xs text-red-600 flex items-center gap-1">{err}</p>}

        <button onClick={compute} className="btn-primary w-full py-3.5">
          🧮 Calculate Gas Bill
        </button>

        {result && (
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-5 border border-blue-100 animate-slide-up">
            <p className="text-sm font-bold text-blue-800 mb-4">Estimated Bill Breakdown</p>
            <ul className="space-y-2.5 text-sm mb-4">
              {[
                { label: 'Gas Consumption Charges', val: result.energy, color: 'text-gray-700' },
                { label: 'Fixed Monthly Charges',   val: result.fixed,  color: 'text-gray-700' },
                { label: 'Infrastructure Cess (5%)',val: result.infra,  color: 'text-gray-700' },
                { label: 'GST (17%)',               val: result.gst,    color: 'text-gray-700' },
              ].map(row => (
                <li key={row.label} className="flex justify-between">
                  <span className={row.color}>{row.label}</span>
                  <span className="font-medium">{fmt(row.val)}</span>
                </li>
              ))}
              <li className="flex justify-between font-bold text-lg text-blue-900 border-t border-blue-200 pt-3 mt-1">
                <span>Total Estimated</span>
                <span>{fmt(result.total)}</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500">
              * Estimate only. Actual bill may include meter rent, FCC and other charges. Visit{' '}
              <a href="https://billchecker.sngpl.com.pk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">official SNGPL portal</a>{' '}
              for the exact amount.
            </p>
          </div>
        )}
      </div>

      {/* Slab Table */}
      <div className="mt-6 card">
        <h4 className="font-bold text-gray-900 mb-4">SNGPL Residential Slab Rates 2024-25</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700 rounded-l-lg">Consumption</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Rate/HHM</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700 rounded-r-lg">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {SLABS.map(s => (
                <tr key={s.label} className={`hover:bg-gray-50 ${activeHhm !== null && activeHhm > (SLABS.indexOf(s) > 0 ? SLABS[SLABS.indexOf(s)-1].max : 0) && activeHhm <= s.max ? 'bg-green-50 font-semibold' : ''}`}>
                  <td className="px-4 py-2.5 text-gray-900">{s.label}</td>
                  <td className="px-4 py-2.5 text-blue-700 font-semibold">PKR {s.rate.toLocaleString()}</td>
                  <td className="px-4 py-2.5 text-gray-500">
                    {s.max <= 1 ? 'Low' : s.max <= 2 ? 'Moderate' : s.max <= 3 ? 'High' : s.max <= 4 ? 'Very High' : 'Peak'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">Fixed charge PKR 100/month + Infrastructure Cess 5% + GST 17% added on top of energy charges.</p>
      </div>
    </div>
  );
}
