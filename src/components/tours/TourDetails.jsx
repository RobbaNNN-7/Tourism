import React from 'react';
import { Calendar, Users } from 'lucide-react';

const TourDetails = ({ duration, groupSize }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="flex items-center">
        <Calendar className="w-5 h-5 text-blue-500 mr-2" />
        <span className="text-gray-600 dark:text-gray-300">{duration}</span>
      </div>
      <div className="flex items-center">
        <Users className="w-5 h-5 text-blue-500 mr-2" />
        <span className="text-gray-600 dark:text-gray-300">{groupSize}</span>
      </div>
    </div>
  );
};

export default TourDetails; 