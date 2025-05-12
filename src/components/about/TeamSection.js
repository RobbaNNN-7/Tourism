import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((member) => (
          <motion.div
            key={member}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: member * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5"
              alt={`Team Member ${member}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Team Member {member}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Tourism Expert</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection; 