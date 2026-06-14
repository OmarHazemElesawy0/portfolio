import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.75rem',
          color: '#6366f1',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        404
      </span>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: 600,
          color: '#ededed',
          letterSpacing: '-0.04em',
        }}
      >
        Page not found
      </h1>
      <p style={{ color: '#a1a1a1', maxWidth: '360px', lineHeight: 1.625 }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          background: '#6366f1',
          color: '#fff',
          borderRadius: '12px',
          fontWeight: 500,
          fontSize: '0.875rem',
          textDecoration: 'none',
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
