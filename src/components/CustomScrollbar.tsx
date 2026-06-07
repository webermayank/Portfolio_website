import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: 'var(--brand)',
        transformOrigin: 'left',
        zIndex: 60,
        opacity: 0.85,
      }}
    />
  );
};

export default CustomScrollbar;