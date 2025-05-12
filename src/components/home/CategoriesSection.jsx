import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const CategoriesSection = ({ categories, activeCategory, setActiveCategory }) => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center fade-in">Explore by Category</h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 fade-in">
        Pakistan offers diverse experiences from majestic mountains to pristine beaches and rich cultural heritage
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="category-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer fade-in"
            onClick={() => setActiveCategory(activeCategory === index ? null : index)}
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 hover:bg-opacity-20">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
            <div className={`bg-white overflow-hidden transition-all duration-300 ${activeCategory === index ? 'max-h-72' : 'max-h-0'}`}> 
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Popular Places</h4>
                  {activeCategory === index ? 
                    <ChevronUp size={20} className="text-blue-600" /> : 
                    <ChevronDown size={20} className="text-blue-600" />
                  }
                </div>
                <ul className="space-y-2">
                  {category.places.map((place, i) => (
                    <li key={i} className="flex items-center">
                      <MapPin size={16} className="text-blue-600 mr-2" />
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/nearby-search`}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm"
                >
                  View all {category.name}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection; 