import React from 'react';

const ListingTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-4 mb-8">
      <button
        onClick={() => onTabChange('hotels')}
        className={`px-6 py-3 rounded-lg font-medium ${
          activeTab === 'hotels'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        Hotels
      </button>
      <button
        onClick={() => onTabChange('restaurants')}
        className={`px-6 py-3 rounded-lg font-medium ${
          activeTab === 'restaurants'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        Restaurants
      </button>
    </div>
  );
};

export default ListingTabs; 