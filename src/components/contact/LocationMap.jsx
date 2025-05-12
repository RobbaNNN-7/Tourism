import React from 'react';
import { motion } from 'framer-motion';

const LocationMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Location</h2>
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Map Coming Soon</p>
      </div>
    </motion.div>
  );
};

export default LocationMap; 