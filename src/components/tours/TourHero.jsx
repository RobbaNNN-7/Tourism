import React from 'react';

const TourHero = () => {
  return (
    <div className="relative h-64">
      <img
        src="https://images.unsplash.com/photo-1587474260584-136574528ed5"
        alt="Tours"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Our Tours</h1>
      </div>
    </div>
  );
};

export default TourHero; 