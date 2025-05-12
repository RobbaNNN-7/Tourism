import React from 'react';
import { MapPin } from 'lucide-react';

const TourHighlights = ({ highlights }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Highlights:</h3>
      <ul className="space-y-1">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-center">
            <MapPin className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourHighlights; 