import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const FeaturedArticle = ({ article }) => {
  return (
    <div className="mb-12">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
              <Calendar className="w-4 h-4 ml-4 mr-2" />
              <span>{article.date}</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
            <p className="text-gray-600 mb-6">{article.excerpt}</p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedArticle; 