import React from 'react';
import { Filter } from 'lucide-react';

const FilterSection = ({ filters, setFilters, activeTab, cuisines }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 mr-2 text-gray-500" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
              className="border rounded-lg px-3 py-2 w-full"
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
              className="border rounded-lg px-3 py-2 w-full"
              placeholder="Max"
            />
          </div>
        </div>
        {activeTab === 'restaurants' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cuisine
            </label>
            <select
              value={filters.cuisine}
              onChange={(e) => setFilters({...filters, cuisine: e.target.value})}
              className="border rounded-lg px-3 py-2 w-full"
            >
              {cuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine.toLowerCase()}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection; 