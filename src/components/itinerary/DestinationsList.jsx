import React from 'react';
import { Plus } from 'lucide-react';
import DestinationCard from './DestinationCard';

const DestinationsList = ({ destinations, onAdd, onRemove }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Destinations</h2>
        <button
          onClick={() => onAdd({
            name: 'New Destination',
            days: 1,
            estimatedCost: 0
          })}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Destination
        </button>
      </div>

      <div className="space-y-4">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            destination={destination}
            onRemove={() => onRemove(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationsList; 