import React from 'react';

const FilterButtons = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedFilter === filter.id
              ? 'bg-blue-500 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons; 