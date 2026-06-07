import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Felion — Youth Mental Wellness Platform',
    description:
      'Production-grade mental wellness platform using React, Node.js, and TypeScript. Integrates AI/ML-driven NLP for emotion-aware responses, mood tracking, and personalized wellness guidance. Scalable APIs, secure data storage, real-time interactions, deployed on Google Cloud with Firebase.',
    image: '/lovable-uploads/felion.png',
    tags: ['React', 'Python', 'Node.js', 'Express.js', 'AI/ML', 'Firebase', 'Google Cloud'],
    demoUrl: 'https://youth-mental-wellness-brown.vercel.app/',
    githubUrl: 'https://github.com/webermayank/Youth-Mental-Wellness',
  },
  {
    id: 2,
    title: 'AI-Powered Text Editor & File Management',
    description:
      'Full-stack application enabling users to create and manage documents with AI-assisted text processing — summarization, enhancement, and explanation via OpenAI API. RESTful services with Node.js/Express, secure file handling with AWS S3, deployed on AWS EC2.',
    image: '/lovable-uploads/syncpad.png',
    tags: ['React', 'Node.js', 'AWS S3', 'EC2', 'OpenAI', 'Express.js'],
    demoUrl: 'https://mkvprjt.syncpadai.xyz/',
    githubUrl: 'https://github.com/webermayank/Sync-Pad_AI',
  },
  {
    id: 3,
    title: 'Trakx — Intelligent Financial Ledger',
    description:
      'Intelligent personal finance platform that automatically ingests bank SMS/UPI notifications, normalizes transactions into a structured ledger, and provides real-time categorization and analytics. Built on Node.js + TypeScript, Prisma ORM, PostgreSQL, and Android (Kotlin) for SMS ingestion.',
    image: '/lovable-uploads/trakx.png',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Kotlin', 'Redis'],
    demoUrl: 'https://github.com/webermayank/Trakx',
    githubUrl: 'https://github.com/webermayank/Trakx',
    statusGlow: 'in-progress',
  },
  {
    id: 4,
    title: 'Chrome Extension — URL History & Search Extraction',
    description:
      'Lightweight Chrome extension that tracks browsing history, extracts search queries from URLs, and provides a clean UI for managing this data. Uses IndexedDB for persistent storage across sessions with real-time updates.',
    image: '/lovable-uploads/webhis.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension', 'IndexedDB'],
    demoUrl: 'https://drive.google.com/file/d/1ilEq17QNPAR83-cNNp6POEK-FTei95LC/view?usp=sharing',
    githubUrl: 'https://github.com/webermayank/webHisExt',
  },
  {
    id: 5,
    title: 'eVakeel — AI-Powered Legal Companion',
    description:
      'Intelligent legal advisory platform making legal information accessible to Indian citizens. Provides instant legal guidance, document analysis, and compliance tracking. Uses ML/NLP to understand user queries and deliver accurate legal insights.',
    image: '/lovable-uploads/evakeel.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'ML/NLP', 'AI'],
    demoUrl: 'https://e-vakeel-mu-jhack-x.vercel.app/',
    githubUrl: 'https://github.com/webermayank/eVakeel_MUJhackX',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: '2.5rem' }}
      >
        <span className="section-label">Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-subtitle">
          A selection of projects spanning full-stack engineering, AI integration, and
          cloud infrastructure — each solving a real-world problem.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
