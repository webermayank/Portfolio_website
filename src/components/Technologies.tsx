import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'Redux',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Angular',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Material UI',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'FastAPI',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'GraphQL',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Supabase',   icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Redis',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Firebase',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'SQLite',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    items: [
      { name: 'AWS',     icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      { name: 'Docker',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Vercel',  icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' },
      { name: 'Linux',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Netlify', icon: 'https://www.netlify.com/v3/img/components/logomark.png' },
    ],
  },
];

const TechItem = ({
  name,
  icon,
  index,
}: {
  name: string;
  icon: string;
  index: number;
}) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        cursor: 'default',
      }}
    >
      <div
        className="card-base"
        style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
          transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = 'var(--accent)';
          el.style.transform = 'translateY(-3px) scale(1.05)';
          el.style.boxShadow = 'var(--shadow-md)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = 'var(--border)';
          el.style.transform = 'translateY(0) scale(1)';
          el.style.boxShadow = 'var(--shadow-sm)';
        }}
      >
        {!imgError ? (
          <img
            src={icon}
            alt={name}
            style={{ width: '26px', height: '26px', objectFit: 'contain' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            style={{
              fontWeight: 700,
              fontSize: '0.8rem',
              color: 'var(--accent)',
            }}
          >
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span
        style={{
          fontSize: '0.65rem',
          fontWeight: 500,
          color: 'var(--text-muted)',
          letterSpacing: '0.01em',
          textAlign: 'center',
          lineHeight: 1.2,
        }}
      >
        {name}
      </span>
    </motion.div>
  );
};

const Technologies = () => {
  return (
    <section id="technologies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <span className="section-label">Tech Stack</span>
        <h2 className="section-title">Technologies I work with</h2>
        <p className="section-subtitle">
          A curated set of tools and frameworks I use to build reliable, scalable systems.
        </p>
      </motion.div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        {techGroups.map((group, gi) => (
          <div key={group.label}>
            {/* Group label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                {group.label}
              </span>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
            </div>

            {/* Icons grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {group.items.map((tech, ti) => (
                <TechItem
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  index={gi * 8 + ti}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
