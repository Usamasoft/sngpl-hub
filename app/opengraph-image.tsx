// app/opengraph-image.tsx
// Generates the root /og-image used for all pages that don't override it.
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SNGPL Bill Check Hub — Pakistan Gas Bill Checker';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #2563eb 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px',
        }}
      >
        {/* Logo circle */}
        <div
          style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '28px',
          }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
          </svg>
        </div>

        {/* Site name */}
        <div
          style={{
            fontSize: '26px',
            fontWeight: '600',
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '0.05em',
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}
        >
          SNGPL Bill Check Hub
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '58px',
            fontWeight: '800',
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: '1.15',
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          Check Your SNGPL Gas Bill Online
        </div>

        {/* Sub-headline */}
        <div
          style={{
            fontSize: '26px',
            color: 'rgba(255,255,255,0.80)',
            textAlign: 'center',
            maxWidth: '760px',
            lineHeight: '1.4',
            marginBottom: '40px',
          }}
        >
          Enter your consumer number for instant redirect to the official Sui Northern Gas portal
        </div>

        {/* Pill tags */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Bill Check', 'Consumer Number', 'Duplicate Bill', 'Calculator', '44 Cities'].map(tag => (
            <div
              key={tag}
              style={{
                background: 'rgba(255,255,255,0.18)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '50px',
                padding: '8px 22px',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '48px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.45)',
            fontWeight: '500',
          }}
        >
          sngplbillcheck.pk
        </div>
      </div>
    ),
    { ...size }
  );
}
