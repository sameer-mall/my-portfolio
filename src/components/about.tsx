import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-12 max-w-4xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold text-blue-400 mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-gray-300 leading-relaxed"
      >
        I'm a full-stack developer with a passion for solving complex problems and building user-friendly applications. With expertise in React, TypeScript, and modern web technologies, I strive to create seamless digital experiences that make a difference.
      </motion.p>
    </motion.section>
  );
};

export default About;
