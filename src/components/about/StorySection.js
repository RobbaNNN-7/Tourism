import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Pakistan Tourism is dedicated to showcasing the incredible beauty and cultural richness of Pakistan. 
        From the majestic mountains of the north to the historical sites of the south, we aim to provide 
        travelers with unforgettable experiences.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Our platform connects travelers with authentic experiences, local guides, and the best accommodations 
        across the country. We believe in sustainable tourism that benefits local communities while preserving 
        Pakistan's natural and cultural heritage.
      </p>
    </motion.div>
  );
};

export default StorySection; 