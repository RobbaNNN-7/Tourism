import React from 'react';
import ListingCard from './ListingCard';

const ListingsGrid = ({ listings }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map(listing => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsGrid; 