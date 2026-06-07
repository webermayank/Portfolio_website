import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
  statusColor?: string;
  statusGlow?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isInProgress = project.statusGlow === 'in-progress';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{ height: '100%' }}
    >
      <div
        className="card-base"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = 'var(--border-hover)';
          el.style.boxShadow = 'var(--shadow-lg)';
          el.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = 'var(--border)';
          el.style.boxShadow = 'var(--shadow-sm)';
          el.style.transform = 'translateY(0)';
        }}
      >
        {/* Image */}
        <div
          style={{
            height: '180px',
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
            backgroundColor: 'var(--surface-2)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
          />
          {/* Subtle gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
          {/* Status badge */}
          {isInProgress && (
            <div
              style={{
                position: 'absolute',
                top: '0.65rem',
                right: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.2rem 0.55rem',
                borderRadius: '999px',
                backgroundColor: 'rgba(20,20,22,0.8)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#fff', letterSpacing: '0.04em' }}>
                In Progress
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '1.1rem 1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
            {project.tags.slice(0, 5).map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
            {project.tags.length > 5 && (
              <span className="tag">+{project.tags.length - 5}</span>
            )}
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1.4,
              marginBottom: '0.6rem',
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              flex: 1,
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </p>

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              gap: '0.6rem',
              marginTop: '1rem',
              paddingTop: '0.85rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.78rem', padding: '0.45rem 0.75rem' }}
              >
                {isInProgress ? (
                  <><Zap size={12} strokeWidth={2} /> In Progress</>
                ) : (
                  <><ExternalLink size={12} strokeWidth={2} /> Live Demo</>
                )}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.78rem', padding: '0.45rem 0.75rem' }}
              >
                <Github size={12} strokeWidth={2} /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
