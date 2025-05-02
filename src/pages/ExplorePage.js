import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Mountain, Camera, Utensils, ShoppingBag, Hotel } from 'lucide-react';

const ExplorePage = () => {
  const categories = [
    {
      icon: Mountain,
      title: 'Adventure',
      description: 'Discover thrilling outdoor activities and extreme sports',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capture stunning landscapes and cultural moments',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Utensils,
      title: 'Food & Culture',
      description: 'Experience local cuisine and traditional customs',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping',
      description: 'Find unique souvenirs and local crafts',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Find the perfect place to stay',
      color: 'from-red-500 to-red-600'
    }
  ];

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
              Explore Pakistan
            </h1>
            <p className="text-xl text-gray-200">
              Discover the hidden gems and unforgettable experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Explore by Category
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="p-6">
                  <category.icon className="h-12 w-12 text-gray-700 dark:text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Experiences
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add featured experiences here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage; 