import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
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
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 mb-4 md:mb-6"
          >
            Sameer Mall
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Thanks for stopping by! <br/>I'm a software engineer and an avid learner. I love taking on new challenges and continuously improving my skills. Explore my portfolio to see some of the projects I've worked on and feel free to reach out!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-400/10 hover:bg-blue-400/20 text-blue-400 rounded-lg border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <span className="font-semibold">More About Me</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 order-1 md:order-2"
        >
          <img 
            src={profile_pic} 
            alt="Sameer Mall" 
            className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-2xl shadow-2xl border-4 border-blue-400/30 object-cover"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.8)) drop-shadow(0 0 16px rgba(96, 165, 250, 0.6))'
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
