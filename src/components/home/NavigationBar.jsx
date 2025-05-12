import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavigationBar = ({ isScrolled, isMenuOpen, toggleMenu }) => (
  <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
    <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="text-blue-600 text-2xl font-bold flex items-center">
            <span className="gradient-text">Pakistan</span>
            <span className="ml-1 text-black">Explorer</span>
          </div>
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/chat" className="nav-link">Plan My Trip</Link>
        <Link to="/flights" className="nav-link">Flights</Link>
        <Link to="/accommodation-search" className="nav-link">Accomodations</Link>
        <Link to="/nearby-search" className="nav-link">Explore Pakistan</Link>
        <Link to="/restaurants" className="nav-link">Restaurants</Link>
      </nav>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-blue-600 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    {/* Mobile Navigation */}
    <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="container mx-auto px-4 py-4 space-y-4">
        <Link to="/experiences" className="block py-2 hover:text-blue-600 transition">Experiences</Link>
        <Link to="/culture" className="block py-2 hover:text-blue-600 transition">Culture</Link>
        <Link to="/plan" className="block py-2 hover:text-blue-600 transition">Plan Your Trip</Link>
        <Link to="/about" className="block py-2 hover:text-blue-600 transition">About Pakistan</Link>
      </div>
    </div>
  </header>
);

export default NavigationBar; 