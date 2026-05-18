'use client';
import { useState } from 'react';

// SNGPL OGRA-approved domestic slab rates (2024-25)
const SLABS = [
  { min: 0,    max: 100,  rate: 0,   label: '0–100 HHM (Flat Rs. 200)' },
  { min: 101,  max: 300,  rate: 130, label: '101–300 HHM @ Rs. 130/HHM' },
  { min: 301,  max: 500,  rate: 150, label: '301–500 HHM @ Rs. 150/HHM' },
  { min: 501,  max: 800,  rate: 170, label: '501–800 HHM @ Rs. 170/HHM' },
  { min: 801,  max: 1200, rate: 200, label: '801–1200 HHM @ Rs. 200/HHM' },
  { min: 1201, max: 99999,rate: 250, label: '1201+ HHM @ Rs. 250/HHM' },
];
const GST_RATE  = 0.17;
const GIDC_RATE = 0.10;

function calcBill(hhm: number) {
  const breakdown: { label: string; units: number; amount: number }[] = [];
  let variable = 0;

  if (hhm <= 100) {
    breakdown.push({ label: '0–100 HHM (Flat Rate)', units: hhm, amount: 0 });
  } else {
    for (const s of SLABS) {
      if (s.min === 0) continue;
      if (hhm < s.min) break;
      const inSlab = Math.min(hhm, s.max) - s.min + 1;
      if (inSlab <= 0) continue;
      const amount = inSlab * s.rate;
      variable += amount;
      breakdown.push({ label: s.label, units: inSlab, amount });
      if (hhm <= s.max) break;
    }
  }

  const fixed   = hhm <= 100 ? 200 : 50;
  const base    = fixed + variable;
  const gidc    = Math.round(base * GIDC_RATE);
  const gst     = Math.round((base + gidc) * GST_RATE);
  const total   = base + gidc + gst;
  return { hhm, fixed, variable, gidc, gst, total, breakdown };
}

const fmt = (n: number) => 'Rs. ' + Math.round(n).toLocaleString('en-PK');

export default function GasCalculator() {
  const [mode, setMode]     = useState<'hhm' | 'reading'>('hhm');
  const [hhm, setHhm]       = useState('');
  const [prev, setPrev]     = useState('');
  const [curr, setCurr]     = useState('');
  const [result, setResult] = useState<ReturnType<typeof calcBill> | null>(null);
  const [err, setErr]       = useState('');

  const run = () => {
    setErr(''); setResult(null);
    let units = 0;
    if (mode === 'hhm') {
      units = Number(hhm);
      if (!hhm || isNaN(units) || units < 0) { setErr('Enter a valid HHM value (e.g. 200).'); return; }
    } else {
      const p = Number(prev), c = Number(curr);
      if (!prev || !curr || isNaN(p) || isNaN(c)) { setErr('Enter both meter readings.'); return; }
      if (c <= p) { setErr('Current reading must be higher than previous.'); return; }
      units = c - p;
    }
    if (units > 9999) { setErr('Value too high — please double-check.'); return; }
    setResult(calcBill(units));
  };

  const hhmVal = mode === 'reading' && prev && curr && Number(curr) > Number(prev)
    ? Number(curr) - Number(prev) : null;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-5 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">🧮</div>
          <div>
            <h2 className="text-white font-bold text-lg">SNGPL Gas Bill Calculator</h2>
            <p className="text-blue-100 text-xs mt-0.5">Estimate monthly gas bill using official slab rates</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Mode toggle */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
            {(['hhm', 'reading'] as const).map(m => (
              <button key={m} onClick={() => { setMode(m); setResult(null); setErr(''); }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${mode === m ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {m === 'hhm' ? '📟 Enter HHM Units' : '🔢 Meter Readings'}
              </button>
            ))}
          </div>

          {mode === 'hhm' ? (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gas Consumption (HHM)</label>
              <input type="number" value={hhm} min="0" max="9999" placeholder="e.g. 250"
                onChange={e => { setHhm(e.target.value); setResult(null); }}
                className="input-field text-lg font-mono" />
              <p className="text-xs text-gray-400 mt-1.5">HHM = Hundred Heat Meter — shown on your gas meter &amp; bill</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Previous Reading</label>
                  <input type="number" value={prev} min="0" placeholder="e.g. 1200"
                    onChange={e => { setPrev(e.target.value); setResult(null); }} className="input-field font-mono" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Reading</label>
                  <input type="number" value={curr} min="0" placeholder="e.g. 1450"
                    onChange={e => { setCurr(e.target.value); setResult(null); }} className="input-field font-mono" />
                </div>
              </div>
              {hhmVal !== null && (
                <div className="highlight-box py-2">
                  <span className="text-blue-800 text-sm font-semibold">Consumption: {hhmVal} HHM</span>
                </div>
              )}
            </div>
          )}

          {err && <p className="text-sm text-red-600 flex items-center gap-1.5">{err}</p>}

          <button onClick={run} className="btn-primary w-full py-4 text-base font-bold">
            Calculate Gas Bill Estimate
          </button>

          {/* Result */}
          {result && (
            <div className="animate-slide-up space-y-4 pt-2">
              <div className="bg-blue-600 rounded-xl p-5 text-center text-white">
                <div className="text-sm font-medium opacity-80 mb-1">{result.hhm} HHM consumed</div>
                <div className="text-4xl font-black">{fmt(result.total)}</div>
                <div className="text-xs opacity-70 mt-1">Estimated total (inc. taxes)</div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide">Bill Breakdown</p>
                {result.breakdown.map((s, i) => (
                  <div key={i} className="flex justify-between text-gray-600">
                    <span>{s.label}</span><span className="font-medium">{fmt(s.amount)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-2 space-y-1.5">
                  <div className="flex justify-between text-gray-600"><span>Fixed / Customer Charge</span><span className="font-medium">{fmt(result.fixed)}</span></div>
                  <div className="flex justify-between text-gray-600"><span>Variable Gas Charge</span><span className="font-medium">{fmt(result.variable)}</span></div>
                  <div className="flex justify-between text-gray-600"><span>GIDC (~10%)</span><span className="font-medium">{fmt(result.gidc)}</span></div>
                  <div className="flex justify-between text-gray-600"><span>GST (17%)</span><span className="font-medium">{fmt(result.gst)}</span></div>
                  <div className="flex justify-between font-bold text-gray-900 border-t pt-2 text-base">
                    <span>Total Estimated</span><span className="text-blue-700">{fmt(result.total)}</span>
                  </div>
                </div>
              </div>

              <div className="warning-box text-xs text-amber-800">
                <strong>Disclaimer:</strong> This estimate uses OGRA-approved domestic rates. Actual bill may differ due to arrears, adjustments, or tariff revisions. Always verify at the <a href="https://sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="underline">official SNGPL portal</a>.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slab table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm">📊 SNGPL Domestic Slab Rates (2024-25)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-blue-50 text-xs font-bold text-gray-700 uppercase tracking-wide">
              <th className="px-3 py-2 text-left">Consumption Slab</th>
              <th className="px-3 py-2 text-right">Rate / HHM</th>
              <th className="px-3 py-2 text-right">Notes</th>
            </tr></thead>
            <tbody>
              {[['0–100 HHM','Rs. 200 flat','Low use subsidy'],['101–300 HHM','Rs. 130','Basic domestic'],['301–500 HHM','Rs. 150','Medium use'],['501–800 HHM','Rs. 170','Higher use'],['801–1200 HHM','Rs. 200','High use'],['1201+ HHM','Rs. 250','Commercial/bulk']].map(([r,v,n],i)=>(
                <tr key={i} className={i%2===0?'bg-white':'bg-gray-50'}>
                  <td className="px-3 py-2.5 font-medium">{r}</td>
                  <td className="px-3 py-2.5 text-right text-blue-700 font-semibold">{v}</td>
                  <td className="px-3 py-2.5 text-right text-gray-500 text-xs">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-400">+ GST 17% + GIDC ~10% + fixed customer charge. Rates subject to OGRA revision.</p>
      </div>
    </div>
  );
}
