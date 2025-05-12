import React from 'react';

const OverviewTab = ({ description, location, bestTimeToVisit }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
          <p className="text-gray-600 dark:text-gray-300">{location}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Best Time to Visit</h3>
          <p className="text-gray-600 dark:text-gray-300">{bestTimeToVisit}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab; 