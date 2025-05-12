import React from 'react';
import { motion } from 'framer-motion';

const ActivitiesTab = ({ activities }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
          >
            <p className="text-gray-900 dark:text-white">{activity}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesTab; 