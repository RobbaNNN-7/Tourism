import React from 'react';
import { motion } from 'framer-motion';
import TourDetails from './TourDetails';
import TourHighlights from './TourHighlights';

const TourCard = ({ tour }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
    >
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{tour.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{tour.description}</p>
        
        <TourDetails duration={tour.duration} groupSize={tour.groupSize} />
        <TourHighlights highlights={tour.highlights} />

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-500">{tour.price}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard; 