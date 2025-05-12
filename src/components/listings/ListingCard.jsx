import React from 'react';
import { Star, MapPin } from 'lucide-react';

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={listing.image}
          alt={listing.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{listing.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{listing.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{listing.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{listing.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">{listing.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard; 