import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Plane, Utensils, Search, Hotel } from 'lucide-react';

const HeroSection = () => (
  <section
    className="hero-section flex flex-col items-center justify-center relative overflow-hidden bg-white"
    style={{
      minHeight: '90vh',
      transition: 'background 0.7s cubic-bezier(0.4,0,0.2,1)',
      background: 'linear-gradient(120deg, #f8fafc 0%, #e0f2fe 100%)'
    }}
  >
    {/* Animated background shapes */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 1440 320" className="absolute bottom-0 left-0">
        <path
          fill="#38bdf8"
          fillOpacity="0.08"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60 animate-float-slow"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-200 rounded-full blur-xl opacity-40 animate-float"></div>
    </div>
    <div className="hero-content container mx-auto px-4 md:px-6 relative z-10 text-center pt-36 pb-20 md:py-44">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 hero-title text-gray-900 transition-all duration-700 animate-fade-in-up" style={{ letterSpacing: '-0.03em' }}>
        Discover the Magic of{' '}
        <span className="gradient-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
          Pakistan
        </span>
      </h1>
      <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto hero-subtitle text-gray-700 animate-fade-in-up delay-150">
        From snow-capped mountains to ancient civilizations, embark on an unforgettable journey
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in-up delay-500">
        <Link to="/chat" className="feature-card hero-action-btn">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-3 shadow-lg">
            <MapPin className="text-white" size={24} />
          </div>
          <p className="text-blue-700 font-semibold">Plan My Trip</p>
        </Link>
        <Link to="/flights" className="feature-card hero-action-btn">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 mb-3 shadow-lg">
            <Plane className="text-white" size={24} />
          </div>
          <p className="text-green-700 font-semibold">Find Flights</p>
        </Link>
        <Link to="/restaurants" className="feature-card hero-action-btn">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 mb-3 shadow-lg">
            <Utensils className="text-white" size={24} />
          </div>
          <p className="text-pink-700 font-semibold">Find Restaurants</p>
        </Link>
        <Link to="/nearby-search" className="feature-card hero-action-btn">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 mb-3 shadow-lg">
            <Search className="text-white" size={24} />
          </div>
          <p className="text-purple-700 font-semibold">Explore Destinations</p>
        </Link>
        <Link to="/accommodation-search" className="feature-card hero-action-btn">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-green-400 mb-3 shadow-lg">
            <Hotel className="text-white" size={24} />
          </div>
          <p className="text-yellow-700 font-semibold">Accommodations</p>
        </Link>
      </div>
    </div>
    <div className="scroll-indicator">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <p className="text-white text-sm mt-2">Scroll to explore</p>
    </div>
  </section>
);

export default HeroSection; 