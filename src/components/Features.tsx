import React from 'react';
import { motion } from 'framer-motion';
import {
  IconCode,
  IconBrain,
  IconCloud,
  IconDatabase,
  IconShield,
  IconBolt,
  IconDevices,
  IconRocket,
} from '@tabler/icons-react';

const features = [
  {
    icon: IconCode,
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications from React frontends to Node.js/Express backends — with TypeScript throughout.',
  },
  {
    icon: IconBrain,
    title: 'DSA & Problem Solving',
    description:
      'Strong foundation in data structures and algorithms for writing efficient, optimized code for complex problems.',
  },
  {
    icon: IconCloud,
    title: 'Cloud Architecture',
    description:
      'Scalable cloud solutions with AWS, Docker, and microservices architecture for high-performance production systems.',
  },
  {
    icon: IconDatabase,
    title: 'Database Design',
    description:
      'Proficient in SQL and NoSQL — data modelling, schema design, and query optimization for data-driven applications.',
  },
  {
    icon: IconDevices,
    title: 'Responsive UI',
    description:
      'Accessible, cross-device user interfaces with modern design principles and performance-first engineering.',
  },
  {
    icon: IconBolt,
    title: 'Performance Optimization',
    description:
      'Optimizing applications for speed, efficiency, and UX through profiling, caching, and architectural decisions.',
  },
  {
    icon: IconShield,
    title: 'Security & Best Practices',
    description:
      'Secure authentication, data protection, and industry-standard practices for production-ready applications.',
  },
  {
    icon: IconRocket,
    title: 'AI Integration',
    description:
      'Integrating LLMs, NLP pipelines, and AI-driven features into real-world products with practical impact.',
  },
];

const Features = () => {
  return (
    <section id="features" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: '2.5rem' }}
      >
        <span className="section-label">Capabilities</span>
        <h2 className="section-title">What I do well</h2>
        <p className="section-subtitle">
          Core competencies I bring to every engineering challenge.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <div
              className="card-base"
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                height: '100%',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--border-hover)';
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--border)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--brand-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.85rem',
                  flexShrink: 0,
                }}
              >
                <feature.icon
                  size={18}
                  stroke={1.8}
                  style={{ color: 'var(--brand)' }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.4rem',
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;