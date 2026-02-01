import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
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
        Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-gray-300 leading-relaxed"
      >
        Throughout my career, I've worked with talented teams on diverse projects spanning various industries. My experience includes developing scalable applications, optimizing performance, and mentoring junior developers. Each project has strengthened my skills and deepened my understanding of modern software development practices.
      </motion.p>
    </motion.section>
  );
};

export default Experience;
