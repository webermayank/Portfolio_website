import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
          padding: '1.5rem 0',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '26px',
                height: '26px',
                borderRadius: '6px',
                backgroundColor: 'var(--brand)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.65rem',
                letterSpacing: '-0.02em',
                flexShrink: 0,
              }}
            >
              MV
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              © {currentYear} Mayank Verma
            </span>
          </div>

          {/* Center */}
          <span
            style={{
              fontSize: '0.74rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            Built with <Heart size={11} style={{ color: '#f43f5e', flexShrink: 0 }} strokeWidth={2} /> and{' '}
            <Code2 size={11} style={{ color: 'var(--brand)', flexShrink: 0 }} strokeWidth={2} />
            {' '}using React + TypeScript
          </span>

          {/* Right */}
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            All rights reserved.
          </span>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-md)',
            transition: 'border-color 0.2s ease, color 0.2s ease, transform 0.15s ease',
            zIndex: 40,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--brand)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--brand)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
          }}
        >
          <ArrowUp size={14} strokeWidth={2} />
        </button>
      )}
    </>
  );
};

export default Footer;
