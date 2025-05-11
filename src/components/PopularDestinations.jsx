import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PopularDestinations = ({ popularDestinations }) => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl">Discover the most breathtaking and awe-inspiring places Pakistan has to offer</p>
        </div>
        <Link to="/nearby-search" className="flex items-center text-blue-600 mt-4 md:mt-0 hover:text-blue-800 transition group">
          View all destinations
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularDestinations.map((destination) => (
          <div 
            key={destination.id} 
            className="destination-card rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer fade-in"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full py-1 px-3 flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-medium">{destination.rating}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularDestinations; 