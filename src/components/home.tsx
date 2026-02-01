import React from 'react';
import { motion } from 'framer-motion';
import profile_pic from '../assets/profile_pic.jpeg';

const Home: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center min-h-[calc(100vh-5rem)] px-6 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-blue-400 mb-6"
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Hi! I'm a passionate developer dedicated to creating beautiful and functional web applications. This portfolio showcases my skills, projects, and professional journey.
          </motion.p>
        </div>

        {/* Profile Picture Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <img 
            src={profile_pic} 
            alt="Sameer Mall" 
            className="w-96 h-[28rem] rounded-2xl shadow-2xl border-4 border-blue-400/30 object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
