import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ExternalLink } from 'lucide-react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award' | 'Project';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: 'Dec 2025 – Present',
    title: 'Trakx – Intelligent Financial Ledger & Expense Analytics',
    description:
      'Architecting a scalable personal finance platform that ingests bank SMS/UPI notifications and converts them into structured double-entry ledger records. Designing secure multi-account financial tracking with real-time categorization, analytics, and extensible ingestion pipelines — backed by Node.js + TypeScript, Prisma ORM, PostgreSQL, and Android (Kotlin) for SMS ingestion.',
    type: 'experience',
  },
  {
    id: 2,
    year: 'Apr 2023 – Apr 2025',
    title: 'AI-Powered Youth Mental Wellness Platform',
    description:
      'Built a production-grade mental wellness platform supporting thousands of concurrent users with secure, low-latency APIs. Integrated AI-driven conversational intelligence for personalized emotional support, mood tracking, and crisis-aware routing — deployed on Google Cloud with Firebase and a privacy-first architecture.',
    type: 'experience',
  },
  {
    id: 3,
    year: '2023 – 2027',
    title: 'B.Tech in Electronics & Communication Engineering',
    description:
      'Indian Institute of Information Technology, Bhopal (IIIT Bhopal). Focused on full-stack development, AI/ML, cloud computing, system design, and mobile application development.',
    type: 'education',
  },
];

const codingProfiles = [
  { label: 'LeetCode',    href: 'https://leetcode.com/u/MayankVerma123/',     color: '#FFA116' },
  { label: 'CodeChef',    href: 'https://www.codechef.com/users/spry_trick_11', color: '#F7941E' },
  { label: 'Codeforces',  href: 'https://codeforces.com/profile/mayankkverma4', color: '#1F8ACB' },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <span className="section-label">About</span>
        <h2 className="section-title">Background & Experience</h2>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        {/* Bio card */}
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
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Who I am
            </h3>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '0.85rem',
              }}
            >
              I'm a{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                full-stack engineer
              </strong>{' '}
              specialising in building intelligent, AI-powered applications that solve
              real-world problems at scale.
            </p>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '0.85rem',
              }}
            >
              Currently exploring{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                AI agents
              </strong>{' '}
              and how{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                fintech & infrastructure
              </strong>{' '}
              intersect to build the next generation of financial tools.
            </p>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              With expertise spanning system design, backend architecture, and frontend
              engineering, I focus on seamless user experiences backed by robust,
              scalable systems.
            </p>

            {/* Coding profiles */}
            <div style={{ marginTop: '1.5rem' }}>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                }}
              >
                Competitive Programming
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {codingProfiles.map(p => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0.65rem',
                      borderRadius: '7px',
                      border: '1px solid var(--border)',
                      backgroundColor: 'transparent',
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
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: p.color,
                          flexShrink: 0,
                          display: 'inline-block',
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {p.label}
                      </span>
                    </span>
                    <ExternalLink size={11} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '19px',
              top: '24px',
              bottom: '24px',
              width: '1px',
              backgroundColor: 'var(--border)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {timelineData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
              >
                {/* Icon dot */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--accent-subtle)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  {item.type === 'education'
                    ? <GraduationCap size={16} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />
                    : <Briefcase size={16} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />
                  }
                </div>

                {/* Card */}
                <div
                  className="card-base card-lift"
                  style={{
                    flex: 1,
                    padding: '1.1rem 1.25rem',
                    borderRadius: '10px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      display: 'block',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {item.year}
                  </span>
                  <h3
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.5rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.83rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
