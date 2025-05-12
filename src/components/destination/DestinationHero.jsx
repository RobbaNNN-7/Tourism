import React from 'react';

const DestinationHero = ({ name, image }) => {
  return (
    <div className="relative h-96">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{name}</h1>
      </div>
    </div>
  );
};

export default DestinationHero; 