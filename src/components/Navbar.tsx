import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Mail } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { href: '#technologies', label: 'Skills' },
  { href: '#about',        label: 'About' },
  { href: '#projects',     label: 'Projects' },
];

const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const { theme, toggleTheme }           = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '60px',
          backgroundColor: scrolled
            ? (theme === 'dark' ? 'rgba(24,24,27,0.88)' : 'rgba(248,247,244,0.88)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid var(--border)` : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>

            {/* Logo */}
            <a
              href="#hero"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: '1.1rem',
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--brand)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '-0.02em',
                  flexShrink: 0,
                }}
              >
                MV
              </span>
              <span style={{ color: 'var(--text-primary)' }}>Mayank</span>
            </a>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
              {navItems.map(item => (
                <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
              ))}
            </nav>

            {/* Right controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, background-color 0.2s',
                  flexShrink: 0,
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
                {theme === 'dark'
                  ? <Sun size={15} strokeWidth={2} />
                  : <Moon size={15} strokeWidth={2} />
                }
              </button>

              {/* Contact CTA — desktop only */}
              <a
                href="#contact"
                className="hidden md:inline-flex"
                style={{
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 1rem',
                  backgroundColor: 'var(--brand)',
                  color: '#fff',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  borderRadius: '7px',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-hover)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                <Mail size={13} strokeWidth={2.5} />
                Contact
              </a>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden"
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Open menu"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                }}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: '1rem',
              right: '1rem',
              zIndex: 49,
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              padding: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
          >
            {[...navItems, { href: '#contact', label: 'Contact' }].map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--surface-2)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    style={{
      padding: '0.4rem 0.75rem',
      borderRadius: '6px',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      fontSize: '0.85rem',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      transition: 'color 0.15s ease, background-color 0.15s ease',
      display: 'inline-block',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)';
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--surface-2)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
    }}
  >
    {children}
  </a>
);

export default Navbar;
