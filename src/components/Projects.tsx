import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Felion - Youth Mental wellness Platform",
    description: "Built a production-grade youth mental wellness platform using React, Node.js, and TypeScript, integrating AI/ML-driven NLP for emotion-aware responses, mood tracking, and personalized wellness guidance. Designed scalable APIs, secure data storage, and real-time user interactions, with GOOGLE cloud deployment and privacy-focused system architecture along with firebase database, all within a responsive and visually engaging UI.",
    image: "/lovable-uploads/felion.png",
    tags: ["React", "Python", "Tailwind CSS", "JS", "Node.js", "Express.js", "AI-ML", "Context API", "Firebase" , "GOOGLE Cloud"],
    demoUrl: "https://youth-mental-wellness-brown.vercel.app/",
    githubUrl: "https://github.com/webermayank/Youth-Mental-Wellness"
  },
  {
    id: 2,
    title: "AI-Powered Text Editor & File Management System",
    description: "Developed a full-stack application that enables users to create and manage documents with AI-assisted text processing, including summarization, enhancement, and explanation using the OpenAI API. Built RESTful services with Node.js and Express, implemented secure file handling with AWS S3, and deployed the system on AWS EC2 to support scalable, production-ready usage.",
    image: "/lovable-uploads/syncpad.png",
    tags: ["React", "Node.js", "RestAPI", "Authentication", "AWS", "S3-Bucket","Express.js", "OpenAI"],
    demoUrl: "https://mkvprjt.syncpadai.xyz/",
    githubUrl: "https://github.com/webermayank/Sync-Pad_AI"
  },
  {
    id: 3,
    title: "Trakx – Intelligent Financial Ledger & Expense Analytics Platform",
    description: "Trakx is an intelligent personal finance and ledger platform that automatically ingests bank SMS/UPI notifications to track expenses across multiple accounts, normalize transactions into a structured ledger, and provide real-time categorization and spending analytics. The system is designed for correctness, auditability, and scalability, forming a foundation for advanced features like subscription detection and financial insights. Tech stack: Node.js + TypeScript, Prisma ORM with PostgreSQL (Neon), Express/Nest-style modular backend, Android (Kotlin) for SMS/notification ingestion, Redis & Kafka (planned), and React/Next.js for dashboards.",
    image: "/lovable-uploads/trakx.png",
    tags: ["React", "Node.js", "RestAPI", "Redis","Express.js", "kafka", "TypeScript", "PostgreSQL", "Prisma ORM", "Kotlin"],
    demoUrl: "https://github.com/webermayank/Trakx",
    githubUrl: "https://github.com/webermayank/Trakx",
    status: "In Progress",
    statusColor: "",
    statusGlow: "in-progress"
  },
  {
    id: 4,
    title: "Chrome Extension for Enhanced URL History Tracking and Search Query Extraction",
    description: "Chrome Extension: Enhanced URL History & Search Query Extraction is a lightweight Chrome extension that tracks user browsing history, extracts search queries from URLs, and provides a clean UI for managing this data. It stores URLs using IndexedDB for persistence and real-time updates. Persistent URL Storage: Stores URLs in IndexedDB, allowing them to persist across sessions. (Updated Version)",
    image: "/lovable-uploads/webhis.png",
    tags: ["JavaScript", "CSS", "HTML", "Chrome Extension", "IndexedDB"],
    demoUrl: "https://drive.google.com/file/d/1ilEq17QNPAR83-cNNp6POEK-FTei95LC/view?usp=sharing",
    githubUrl: "https://github.com/webermayank/webHisExt"
  },
  {
    id: 5,
    title: "eVakeel - AI-Powered Legal Companion",
    description: "eVakeel is an intelligent legal advisory platform designed to make legal information accessible to every Indian citizen. Built with cutting-edge AI technology, it provides instant legal guidance, document analysis, and compliance tracking in a user-friendly interface and verify legal score. Uses Machine Learning and NLP to understand user queries and deliver accurate legal insights, empowering users to navigate complex legal landscapes with confidence.",
    image: "/lovable-uploads/evakeel.png",
    tags: ["JavaScript", "CSS", "HTML", "Chrome Extension", "IndexedDB"],
    demoUrl: "https://e-vakeel-mu-jhack-x.vercel.app/",
    githubUrl: "https://github.com/webermayank/eVakeel_MUJhackX"
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      {/* <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div> */}
    </section>
  );
};

export default Projects;
