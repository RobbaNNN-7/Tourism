import React, { useState } from 'react';
import ListingTabs from '../components/listings/ListingTabs';
import FilterSection from '../components/listings/FilterSection';
import ListingsGrid from '../components/listings/ListingsGrid';
import SearchHeader from '../components/listings/SearchHeader';
import { listings, cuisines } from '../data/listings';

const HotelsRestaurants = () => {
  const [activeTab, setActiveTab] = useState('hotels');
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 1000 },
    cuisine: 'all'
  });

  const filteredListings = listings.filter(listing => {
    if (activeTab === 'hotels') {
      return listing.name.toLowerCase().includes('hotel');
    } else {
      return !listing.name.toLowerCase().includes('hotel');
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchHeader activeTab={activeTab} />
      <ListingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
        <div className="lg:col-span-1">
          <FilterSection
            activeTab={activeTab}
            filters={filters}
            setFilters={setFilters}
            cuisines={cuisines}
          />
        </div>
        
        <div className="lg:col-span-3">
          <ListingsGrid listings={filteredListings} />
        </div>
      </div>
    </div>
  );
};

export default HotelsRestaurants; 