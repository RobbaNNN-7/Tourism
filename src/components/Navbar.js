import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Menu, X, Globe, Info, Phone, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-blue-900 to-purple-900 shadow-xl' 
        : 'bg-gradient-to-r from-blue-900/90 to-purple-900/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Globe className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-2xl font-bold text-white">
                Pakistan Tourism
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, icon: Icon, label }) => (
              <Link key={path} to={path}>
                <motion.div 
                  className={`text-white hover:text-yellow-400 font-medium flex items-center transition-colors duration-300 ${
                    isActive(path) ? 'text-yellow-400' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {label}
                </motion.div>
              </Link>
            ))}
            <Link to="/signin">
              <motion.button
                className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 flex items-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="h-5 w-5 mr-2" />
                Sign In
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-b from-blue-900 to-purple-900 shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              {navLinks.map(({ path, icon: Icon, label }) => (
                <Link key={path} to={path} onClick={() => setIsMenuOpen(false)}>
                  <motion.div 
                    className={`block text-white hover:text-yellow-400 font-medium flex items-center py-2 transition-colors duration-300 ${
                      isActive(path) ? 'text-yellow-400' : ''
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {label}
                  </motion.div>
                </Link>
              ))}
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  className="w-full bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <User className="h-5 w-5 mr-2" />
                  Sign In
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 