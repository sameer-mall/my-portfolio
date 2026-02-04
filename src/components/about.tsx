import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/IMG_1.jpeg';
import img2 from '../assets/IMG_2.jpeg';
import img3 from '../assets/IMG_3.jpeg';
import img4 from '../assets/IMG_4.jpeg';
import img5 from '../assets/IMG_5.jpeg';
import img6 from '../assets/IMG_6.jpeg';

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
        About Sameer Mall
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-gray-300 leading-relaxed"
      >
        Hello! I am a software engineer living in the Midwest! I have a passion for writing clean code and providing meaningful user experiences. I am primarily a backend engineer building scalable, cloud-native applications. My expertise spans full-stack development, cloud infrastructure (AWS, Azure), and cutting-edge AI integration.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-gray-300 leading-relaxed mt-4"
      >
        Outside of the office, I enjoy being outdoors whether that's playing pickleball and biking in the summer to skiing in the winter. I also love traveling and exploring new places and cultures. Fun Fact: I have travelled to over 20 countries. Feel free to connect with me on LinkedIn or check out my projects!
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-gray-300 leading-relaxed mt-4"
      >
        P.S. The cat following you around is inspired by my cat Beau!
      </motion.p>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {[
            { id: 1, height: 'h-64', src: img1, alt: 'Gallery Image 1' },
            { id: 3, height: 'h-56', src: img3, alt: 'Gallery Image 3' },
            { id: 5, height: 'h-64', src: img5, alt: 'Gallery Image 5' },
            { id: 2, height: 'h-80', src: img2, alt: 'Gallery Image 2' },
            { id: 4, height: 'h-72', src: img4, alt: 'Gallery Image 4' },
            { id: 6, height: 'h-68', src: img6, alt: 'Gallery Image 6' },
          ].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="w-full rounded-2xl border-2 border-blue-400/30 shadow-xl hover:border-blue-400/50 transition-all duration-300 break-inside-avoid mb-4 overflow-hidden"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(96, 165, 250, 0.4))'
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`${item.height} w-full object-cover`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
