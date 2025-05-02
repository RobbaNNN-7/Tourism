import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Hero images for carousel
  const heroImages = [
    require('../images/hero-section-image.jpg'),
    require('../images/hero-section-image2.jpg'),
    require('../images/hero-section-image3.jpg'),
    require('../images/hero-section-image4.jpg'),
  ];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleSearch = () => {
    if (fromLocation && toLocation) {
      setShowSearchResults(true);
    }
  };

  // Regions and destinations
  const regions = [
    { name: 'Mountains', key: 'mountains' },
    { name: 'Deserts', key: 'deserts' },
    { name: 'Valleys', key: 'valleys' },
    { name: 'Cities', key: 'cities' },
    { name: 'Coastal', key: 'coastal' },
  ];
  const regionDestinations = {
    mountains: [
      { name: 'Fairy Meadows', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470' },
      { name: 'Nanga Parbat', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b' },
      { name: 'Rakaposhi', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429' },
      { name: 'Hunza Valley', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
    ],
    deserts: [
      { name: 'Cholistan Desert', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
      { name: 'Thar Desert', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' },
      { name: 'Derawar Fort', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8' },
      { name: 'Rohtas Fort', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' },
    ],
    valleys: [
      { name: 'Swat Valley', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
      { name: 'Neelum Valley', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9' },
      { name: 'Kaghan Valley', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b' },
      { name: 'Kalash Valley', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
    ],
    cities: [
      { name: 'Lahore', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470' },
      { name: 'Islamabad', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' },
      { name: 'Karachi', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
      { name: 'Peshawar', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8' },
    ],
    coastal: [
      { name: 'Gwadar', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
      { name: 'Ormara Beach', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9' },
      { name: 'Astola Island', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' },
      { name: 'Kund Malir', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b' },
    ],
  };
  const [selectedRegion, setSelectedRegion] = useState('mountains');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section - Add padding-top to account for fixed navbar */}
      <section className="relative h-[90vh] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHero}
              src={heroImages[currentHero]}
              alt="Hero Section"
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-center mb-8 leading-tight"
          >
            Discover the Hidden Beauty of Pakistan
          </motion.h1>
          
          {/* Modern Travel Search Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl bg-black/50 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl border border-white/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="text"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="From where?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/60 text-gray-900 placeholder-gray-600 border-2 border-white/50 focus:outline-none focus:border-white focus:bg-white/80 font-medium"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="text"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="To where?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/60 text-gray-900 placeholder-gray-600 border-2 border-white/50 focus:outline-none focus:border-white focus:bg-white/80 font-medium"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/60 text-gray-900 placeholder-gray-600 border-2 border-white/50 focus:outline-none focus:border-white focus:bg-white/80 font-medium [color-scheme:light]"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="number"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  min="1"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/60 text-gray-900 placeholder-gray-600 border-2 border-white/50 focus:outline-none focus:border-white focus:bg-white/80 font-medium"
                />
              </div>
            </div>
            
            <button
              onClick={handleSearch}
              className="w-full mt-6 bg-gradient-to-r from-blue-700 to-purple-800 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
            >
              Search Destinations
            </button>
          </motion.div>
        </div>
      </section>

      {/* Explore Top Destinations by Region */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800 dark:text-white">
            Explore Top Destinations by Region
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover the most breathtaking destinations across Pakistan's diverse landscapes
          </p>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {regions.map((region) => (
              <button
                key={region.key}
                onClick={() => setSelectedRegion(region.key)}
                className={`px-7 py-3 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedRegion === region.key 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-500'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {regionDestinations[selectedRegion].map((dest, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Explore this amazing destination
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results Modal */}
      {showSearchResults && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Travel Details
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                From: {fromLocation}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                To: {toLocation}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Date: {travelDate}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Travelers: {travelers}
              </p>
            </div>
            <button
              onClick={() => setShowSearchResults(false)}
              className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HomePage; 