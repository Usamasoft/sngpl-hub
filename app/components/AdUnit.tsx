'use client';
export default function AdUnit({ slot, className = '' }: { slot: string; className?: string }) {
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-sm my-6 ${className}`} style={{ minHeight: 90 }}>
        📢 Ad Slot: {slot} (visible in production only)
      </div>
    );
  }
  return (
    <div className={`my-6 ${className}`}>
      <ins className="adsbygoogle" style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot={slot}
        data-ad-format="auto" data-full-width-responsive="true" />
    </div>
  );
}
