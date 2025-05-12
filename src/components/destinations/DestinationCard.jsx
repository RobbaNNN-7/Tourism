import React from 'react';
import { motion } from 'framer-motion';

const DestinationCard = ({ destination }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{destination.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{destination.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          View More
        </button>
      </div>
    </motion.div>
  );
};

export default DestinationCard; 