import React from 'react';

const NewsletterSection = () => (
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
            <button className="px-6 py-3 bg-white text-blue-600 rounded-r-full font-semibold hover:bg-blue-100 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterSection; 