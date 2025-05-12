import React from 'react';

const SearchHeader = ({ activeTab }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {activeTab === 'hotels' ? 'Hotels' : 'Restaurants'}
      </h1>
      <p className="text-gray-600">
        {activeTab === 'hotels' 
          ? 'Find the perfect place to stay during your visit to Pakistan'
          : 'Discover the best places to eat in Pakistan'}
      </p>
    </div>
  );
};

export default SearchHeader; 