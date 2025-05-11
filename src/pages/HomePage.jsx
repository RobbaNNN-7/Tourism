/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Plane, Utensils, Search, Hotel, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import './HomePage.css';
import HeroSection from '../components/HeroSection';
import PopularDestinations from '../components/PopularDestinations';
import CategoriesSection from '../components/CategoriesSection';
import ExperiencesSection from '../components/ExperiencesSection';
import UpcomingEvents from '../components/UpcomingEvents';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize AOS-like animations
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const popularDestinations = [
    {
      id: 1,
      name: 'Hunza Valley',
      image: 'https://images.unsplash.com/photo-1586522902072-5f35806258ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Experience breathtaking mountain landscapes and rich local culture',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Lahore Fort',
      image: 'https://images.unsplash.com/photo-1567000833363-e1e4e737221b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the historical Mughal architecture and vibrant city life',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Swat Valley',
      image: 'https://images.unsplash.com/photo-1611822933265-53bef4ded263?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Discover the "Switzerland of Pakistan" with lush green hills',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Makli Necropolis',
      image: 'https://images.unsplash.com/photo-1618060932014-4deda4932554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'One of the world\'s largest necropolises with historical tombs',
      rating: 4.5
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'My trip to Pakistan was life-changing! This app made planning so easy and the recommendations were spot-on.',
      location: 'Visited Hunza Valley'
    },
    {
      id: 2,
      name: 'Ahmed Khan',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      text: 'As a local Pakistani, I still use this app to discover hidden gems in my own country. Fantastic experience!',
      location: 'Explored Skardu'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      text: 'The cultural experiences recommended were absolutely authentic. I felt welcomed everywhere I went.',
      location: 'Visited Lahore'
    }
  ];

  const categories = [
    { 
      name: 'Mountains',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      places: ['K2 Base Camp', 'Fairy Meadows', 'Nanga Parbat', 'Deosai Plains']
    },
    { 
      name: 'Beaches',
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      places: ['Kund Malir', 'Hawke\'s Bay', 'Clifton Beach', 'Gwadar']
    },
    { 
      name: 'Historical',
      image: 'https://images.unsplash.com/photo-1567000833356-2a10fcad1656?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      places: ['Badshahi Mosque', 'Mohenjo-daro', 'Taxila', 'Rohtas Fort']
    },
    { 
      name: 'Cultural',
      image: 'https://images.unsplash.com/photo-1583243552820-9a686d4da3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      places: ['Kalash Valley', 'Peshawar Bazar', 'Lok Virsa Museum', 'Karachi Food Street']
    }
  ];

  const upcomingEvents = [
    {
      name: 'Shandur Polo Festival',
      date: 'July 7-9, 2025',
      location: 'Shandur Pass',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Basant Kite Festival',
      date: 'February 18, 2026',
      location: 'Lahore',
      image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Silk Route Festival',
      date: 'August 20-25, 2025',
      location: 'Gilgit-Baltistan',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation Bar */}
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
            
            <div className="pt-4 flex flex-col space-y-3">
             
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Popular Destinations */}
      <PopularDestinations popularDestinations={popularDestinations} />

      {/* Categories Section */}
      <CategoriesSection categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Experiences Section */}
      <ExperiencesSection />

      {/* Upcoming Events */}
      <UpcomingEvents upcomingEvents={upcomingEvents} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
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

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="newsletter-container bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between fade-in">
            <div className="text-left mb-6 md:mb-0 md:mr-8 md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated</h3>
              <p className="opacity-90">Subscribe to our newsletter for travel tips, exclusive offers, and insights into Pakistan's hidden gems</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-l-full outline-none text-gray-800 focus:ring-2 focus:ring-blue-300"
                />
                <button className="mt-3 sm:mt-0 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full sm:rounded-l-none transition duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-3 opacity-80">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-6">
                <Link to="/" className="text-2xl font-bold flex items-center">
                  <span className="gradient-text">Pakistan</span>
                  <span className="ml-1 text-white">Explorer</span>
                </Link>
              </div>
              <p className="text-gray-400 mb-6">
                Your gateway to the breathtaking landscapes and rich cultural heritage of Pakistan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link to="/destinations" className="text-gray-400 hover:text-white transition">Destinations</Link></li>
                <li><Link to="/experiences" className="text-gray-400 hover:text-white transition">Experiences</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition">Travel Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/visa" className="text-gray-400 hover:text-white transition">Visa Information</Link></li>
                <li><Link to="/safety" className="text-gray-400 hover:text-white transition">Travel Safety</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
                <li><Link to="/transportation" className="text-gray-400 hover:text-white transition">Transportation</Link></li>
                <li><Link to="/weather" className="text-gray-400 hover:text-white transition">Weather Guide</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-400 mt-1">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-gray-400">Islamabad, Pakistan</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-400 mt-1">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-gray-400">+92 51 1234 5678</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-400 mt-1">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-gray-400">info@pakistanexplorer.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Pakistan Explorer. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6">
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</Link></li>
                  <li><Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition">Sitemap</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      </div>
  );}

export default HomePage;