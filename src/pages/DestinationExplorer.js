import React, { useState } from 'react';
import DestinationHeader from '../components/destinations/DestinationHeader';
import FilterButtons from '../components/destinations/FilterButtons';
import PakistanMap from '../components/destinations/PakistanMap';
import DestinationsGrid from '../components/destinations/DestinationsGrid';

const DestinationExplorer = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProvince, setSelectedProvince] = useState(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'historical', label: 'Historical' },
    { id: 'mountains', label: 'Mountains' },
    { id: 'beaches', label: 'Beaches' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'cultural', label: 'Cultural' }
  ];

  const provinces = [
    { id: 'punjab', name: 'Punjab', coordinates: { x: 50, y: 50 } },
    { id: 'sindh', name: 'Sindh', coordinates: { x: 50, y: 50 } },
    { id: 'kpk', name: 'Khyber Pakhtunkhwa', coordinates: { x: 50, y: 50 } },
    { id: 'balochistan', name: 'Balochistan', coordinates: { x: 50, y: 50 } },
    { id: 'gilgit', name: 'Gilgit-Baltistan', coordinates: { x: 50, y: 50 } }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Lahore Fort',
      province: 'punjab',
      category: 'historical',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      description: 'A UNESCO World Heritage Site with rich Mughal history'
    },
    {
      id: 2,
      name: 'Nanga Parbat',
      province: 'gilgit',
      category: 'mountains',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      description: 'The ninth highest mountain in the world'
    },
    // Add more destinations as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DestinationHeader />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <FilterButtons
          filters={filters}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PakistanMap />
          <DestinationsGrid
            destinations={destinations}
            selectedFilter={selectedFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationExplorer; 