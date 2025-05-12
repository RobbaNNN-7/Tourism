import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-gray-600 dark:text-gray-300">
            Promote sustainable tourism practices
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-gray-600 dark:text-gray-300">
            Support local communities and businesses
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-gray-600 dark:text-gray-300">
            Preserve cultural and natural heritage
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-gray-600 dark:text-gray-300">
            Provide authentic travel experiences
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default MissionSection; 