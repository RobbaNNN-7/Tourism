import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star } from 'lucide-react';

const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Hunza Valley',
      location: 'Gilgit-Baltistan',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41f9a05b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'A paradise on earth with stunning mountain views and rich culture'
    },
    {
      id: 2,
      name: 'Swat Valley',
      location: 'Khyber Pakhtunkhwa',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41f9a05b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Known as the Switzerland of Pakistan with beautiful landscapes'
    },
    {
      id: 3,
      name: 'Lahore Fort',
      location: 'Punjab',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41f9a05b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'A UNESCO World Heritage site with rich Mughal architecture'
    },
    // Add more destinations as needed
  ];

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Discover Destinations
            </h1>
            <p className="text-xl text-gray-200">
              Explore the most beautiful places in Pakistan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-2 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{destination.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {destination.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage; 