import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="cta-section py-16 md:py-28 text-white text-center relative overflow-hidden">
    <div className="overlay absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    <div className="container mx-auto px-4 md:px-6 relative z-20 fade-in">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">Ready to Experience the Wonder of Pakistan?</h2>
      <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
        From the peaks of the Karakoram to the shores of the Arabian Sea, your adventure awaits
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link to="/chat" className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-opacity-90 transition duration-300 shadow-lg">
          Plan My Journey
        </Link>
        <Link to="/nearby-search" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition duration-300">
          Browse Tourist Attractions
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection; 