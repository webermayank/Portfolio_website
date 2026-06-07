import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, FileText, Download, ArrowDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const socialLinks = [
  {
    href: 'https://github.com/webermayank/',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/mayank-kumar-verma-17a5b72a2/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/MayankV0611',
    icon: Twitter,
    label: 'Twitter / X',
  },
];

const Hero = () => {
  const handleResumeView = () => window.open('/resumeLatest.pdf', '_blank');
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resumeLatest.pdf';
    link.download = 'Mayank_Verma_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        <div style={{ maxWidth: '640px' }}>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            style={{ marginBottom: '1.75rem' }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '999px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                fontSize: '0.72rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '0.02em',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              Open to internship &amp; full-time opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
            }}
          >
            Mayank Verma
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              minHeight: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>I build</span>
            <AnimatedText
              text={[
                'scalable full-stack systems',
                'AI-powered applications',
                'data-driven features',
                'production-grade backends',
              ]}
              className=""
              style={{
                color: 'var(--brand)',
                fontWeight: 600,
              } as React.CSSProperties}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: '2rem',
              maxWidth: '540px',
            }}
          >
            Full-stack engineer at{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              IIIT Bhopal
            </strong>
            , focused on building intelligent, scalable applications — from system design
            and backend architecture to AI-driven user experiences.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.36 }}
            style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '1.75rem',
            }}
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--brand)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                <Icon size={15} strokeWidth={1.8} />
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.44 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#projects" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.55rem 1.1rem' }}>
              View my work
            </a>

            <button
              onClick={handleResumeView}
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '0.55rem 1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <FileText size={13} strokeWidth={2} />
              Resume
            </button>

            <button
              onClick={handleResumeDownload}
              aria-label="Download resume"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '7px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-hover)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
              }}
            >
              <Download size={13} strokeWidth={2} />
            </button>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.3rem',
            color: 'var(--text-muted)',
          }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
