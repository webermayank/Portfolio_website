import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, FileText, Download } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mayankkumarverma4@gmail.com',
    href: 'mailto:mayankkumarverma4@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/webermayank',
    href: 'https://github.com/webermayank',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/mayank-kumar-verma',
    href: 'https://www.linkedin.com/in/mayank-kumar-verma-17a5b72a2/',
  },
];

const REASONS = ['Internship', 'Freelance', 'Collaboration', 'General Inquiry'];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.55rem 0.85rem',
  borderRadius: '8px',
  border: '1px solid var(--border)',
  backgroundColor: 'var(--surface)',
  color: 'var(--text-primary)',
  fontSize: '0.85rem',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 500,
  color: 'var(--text-secondary)',
  marginBottom: '0.35rem',
  letterSpacing: '0.01em',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '84cb2091-24e5-4518-96e1-db59204a6724',
          ...formData,
          subject: 'Portfolio Contact Form',
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus({ type: 'success', message: "Message sent! I'll get back to you soon." });
        setFormData({ firstName: '', lastName: '', email: '', reason: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Failed to send. Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-subtitle">
          Open to internship and full-time opportunities, freelance projects, and
          interesting collaborations. Drop me a message.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        {/* Left: Info panel */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div
            className="card-base"
            style={{ padding: '1.5rem', borderRadius: '12px' }}
          >
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '0.4rem',
              }}
            >
              Mayank Verma
            </h3>
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Full-stack engineer, AI enthusiast, and system design practitioner.
              Currently seeking internship and full-time roles at product-driven
              engineering teams.
            </p>

            {/* Contact links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {contactMethods.map(method => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.65rem 0.75rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease, border-color 0.15s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--surface-2)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-hover)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '7px',
                      backgroundColor: 'var(--accent-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <method.icon size={14} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                      {method.label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a
                href="/resumeLatest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.78rem', padding: '0.5rem' }}
              >
                <FileText size={12} strokeWidth={2} />
                View Resume
              </a>
              <a
                href="/resumeLatest.pdf"
                download="Mayank_Verma_Resume.pdf"
                className="btn-secondary"
                style={{ justifyContent: 'center', padding: '0.5rem 0.65rem' }}
                aria-label="Download resume"
              >
                <Download size={12} strokeWidth={2} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div
            className="card-base"
            style={{ padding: '1.5rem', borderRadius: '12px' }}
          >
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Send a message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Name row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label htmlFor="firstName" style={labelStyle}>First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First"
                    required
                    style={inputStyle}
                    onFocus={e => {
                      (e.target as HTMLInputElement).style.borderColor = 'var(--accent)';
                      (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)';
                    }}
                    onBlur={e => {
                      (e.target as HTMLInputElement).style.borderColor = 'var(--border)';
                      (e.target as HTMLInputElement).style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last"
                    required
                    style={inputStyle}
                    onFocus={e => {
                      (e.target as HTMLInputElement).style.borderColor = 'var(--accent)';
                      (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)';
                    }}
                    onBlur={e => {
                      (e.target as HTMLInputElement).style.borderColor = 'var(--border)';
                      (e.target as HTMLInputElement).style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  style={inputStyle}
                  onFocus={e => {
                    (e.target as HTMLInputElement).style.borderColor = 'var(--accent)';
                    (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)';
                  }}
                  onBlur={e => {
                    (e.target as HTMLInputElement).style.borderColor = 'var(--border)';
                    (e.target as HTMLInputElement).style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Reason chips */}
              <div>
                <span style={labelStyle}>Reason</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {REASONS.map(r => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, reason: r }))}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '999px',
                        border: '1px solid',
                        borderColor: formData.reason === r ? 'var(--accent)' : 'var(--border)',
                        backgroundColor: formData.reason === r ? 'var(--accent-subtle)' : 'transparent',
                        color: formData.reason === r ? 'var(--accent-text)' : 'var(--text-secondary)',
                        fontSize: '0.76rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        fontFamily: 'inherit',
                      }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about what you're working on..."
                  required
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={e => {
                    (e.target as HTMLTextAreaElement).style.borderColor = 'var(--accent)';
                    (e.target as HTMLTextAreaElement).style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)';
                  }}
                  onBlur={e => {
                    (e.target as HTMLTextAreaElement).style.borderColor = 'var(--border)';
                    (e.target as HTMLTextAreaElement).style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Status */}
              {submitStatus.type && (
                <div
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    backgroundColor: submitStatus.type === 'success'
                      ? 'rgba(34,197,94,0.1)'
                      : 'rgba(239,68,68,0.1)',
                    color: submitStatus.type === 'success' ? '#16a34a' : '#dc2626',
                    border: `1px solid ${submitStatus.type === 'success' ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
                  }}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  padding: '0.6rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? 'Sending…' : <><Send size={13} strokeWidth={2} /> Send Message</>}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
