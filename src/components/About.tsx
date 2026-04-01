import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

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
    year: "December 2025 – Present",
    title: "Trakx – Intelligent Financial Ledger & Expense Analytics Platform",
    description: `Will architect and build a scalable personal finance platform that automatically ingests bank SMS/UPI notifications and converts them into structured, double-entry ledger records. Will design secure, multi-account financial tracking with real-time categorization, analytics, and extensible ingestion pipelines, supporting asynchronous processing and future AI-driven insights. Will focus on correctness, auditability, and performance-oriented backend design, laying the foundation for advanced features such as spending predictions, subscription detection, and financial intelligence dashboards.`,
    type: "experience"
  },
  {
    id: 2,
    year: "Apr. 2023 – Apr. 2025",
    title: "AI-Powered Youth Mental Wellness Platform – Personalized Emotional Support System",
    description: `Will architect and deploy a scalable mental wellness platform designed for youth, supporting thousands of concurrent users with secure, low-latency APIs. Will integrate AI-driven conversational intelligence to deliver personalized emotional support, guided coping strategies, and reflective journaling in real time. Will implement privacy-first data handling, mood tracking, and crisis-aware routing to trusted resources, targeting improved user engagement, emotional self-awareness, and responsible AI usage at scale.`,
    type: "experience"
  },
  {
    id: 3,
    year: "2023 - 2027",
    title: "BTech in Electronics and Communication Engineering, Indian Institute of Information Technology, Bhopal",
    description: "Focused on full stack development, AI, cloud computing, and mobile app development. Built multiple academic and personal projects using modern technologies.",
    type: "education"
  }
];

// Coding platform icons (small SVGs)
const LeetCodeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.5 36.5L14 25.5L35.5 14.5" stroke="#FFA116" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 25.5H35.5" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Simple CodeChef-style icon (stylized)
const CodeChefIcon = () => (
  <svg width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="10" fill="#F7941E" />
    <circle cx="20" cy="32" r="8" fill="#fff" />
    <circle cx="32" cy="32" r="8" fill="#fff" opacity="0.85" />
    <circle cx="44" cy="32" r="8" fill="#fff" opacity="0.7" />
  </svg>
);

// Simple Codeforces-style icon (stylized)
const CodeforcesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="10" fill="#1F8ACB" />
    <path d="M18 38c6-10 16-12 28-8" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="42" r="4" fill="#fff" />
    <circle cx="46" cy="34" r="4" fill="#fff" />
  </svg>
);

const codingProfiles = [
  { icon: LeetCodeIcon, label: 'LeetCode', href: 'https://leetcode.com/u/MayankVerma123/' },
  { icon: CodeChefIcon, label: 'CodeChef', href: 'https://www.codechef.com/users/spry_trick_11' },
  { icon: CodeforcesIcon, label: 'Codeforces', href: 'https://codeforces.com/profile/mayankkverma4' },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-semibold text-blue-400">full stack engineer</span> who specializes in building intelligent, AI-powered applications that solve complex problems.
              </p>
              <p className="text-muted-foreground">
                Currently, I'm exploring the potential of <span className="font-semibold text-blue-400">AI agents</span> to automate workflows and enhance software capabilities. Also learning how <span className="font-semibold text-blue-400">finance and technology</span> intersect to build innovative solutions for the future.
              </p>
              <br />
              <p className="text-muted-foreground mb-4">
                With expertise spanning both <span className="font-semibold text-blue-400">System design and backend development</span>, I focus on creating seamless user experiences backed by robust, scalable architectures.
              </p>

              <div className="text-center mt-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Coding Profiles</h4>
                <div className="flex flex-col items-center gap-3">
                  {codingProfiles.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={p.label}
                      className="w-full max-w-xs flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                    >
                      <div className="w-9 h-9 flex items-center justify-center">
                        <p.icon />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{p.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>

            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const GraduationIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21"
    />
  </svg>
);

const AwardIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default About;
