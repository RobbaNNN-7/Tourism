/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Plane, Utensils, Search, Hotel, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import './HomePage.css';
import hunzaImage from '../images/hunza.jpg';
import lahoreFortImage from '../images/lahore_fort.jpg';
import swatImage from '../images/swat.jpg';
import makliImage from '../images/makri.jpg';
import beachesImage from '../images/beaches.jpg';
import mohenjoDaroImage from '../images/mohenjo-daro.jpg';
import HeroSection from '../components/home/HeroSection';
import PopularDestinations from '../components/home/PopularDestinations';
import CategoriesSection from '../components/home/CategoriesSection';
import ExperiencesSection from '../components/home/ExperiencesSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NavigationBar from '../components/home/NavigationBar';
import CTASection from '../components/home/CTASection';
import NewsletterSection from '../components/home/NewsletterSection';

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
      image: hunzaImage,
      description: 'Experience breathtaking mountain landscapes and rich local culture',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Lahore Fort',
      image: lahoreFortImage,
      description: 'Explore the historical Mughal architecture and vibrant city life',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Swat Valley',
      image: swatImage,
      description: 'Discover the "Switzerland of Pakistan" with lush green hills',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Makli Necropolis',
      image: makliImage,
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
      image: beachesImage,
      places: ['Kund Malir', 'Hawke\'s Bay', 'Clifton Beach', 'Gwadar']
    },
    { 
      name: 'Historical',
      image: mohenjoDaroImage,
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
      <NavigationBar isScrolled={isScrolled} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeroSection />
      <PopularDestinations popularDestinations={popularDestinations} />
      <CategoriesSection categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ExperiencesSection />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
      <NewsletterSection />

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
  );
};

export default HomePage;