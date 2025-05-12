import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationsGrid = ({ destinations, selectedFilter }) => {
  const filteredDestinations = destinations.filter(
    dest => selectedFilter === 'all' || dest.category === selectedFilter
  );

  return (
    <div className="lg:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsGrid; 