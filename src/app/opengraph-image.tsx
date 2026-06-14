import { ImageResponse } from 'next/og';

export const alt = 'Omar Elesawy — Frontend Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(120% 120% at 0% 0%, #15162b 0%, #080808 55%)',
          color: '#ededed',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#818cf8',
            }}
          >
            Frontend Engineer
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Omar Elesawy
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 38,
              color: '#a1a1a1',
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Checkout, cart &amp; payment experiences at scale.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 26,
            color: '#6b6b6b',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                background: '#6366f1',
                marginRight: 14,
              }}
            />
            Senior Frontend Engineer · noon
          </span>
          <span>Cairo, Egypt</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
