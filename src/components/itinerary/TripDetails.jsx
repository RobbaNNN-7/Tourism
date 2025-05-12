import React from 'react';
import { Calendar, DollarSign } from 'lucide-react';

const TripDetails = ({ selectedDate, setSelectedDate, budget, setBudget }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Trip Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-gray-500" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
        <div className="flex items-center">
          <DollarSign className="w-5 h-5 mr-2 text-gray-500" />
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Budget"
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TripDetails; 