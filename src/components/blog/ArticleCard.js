import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <User className="w-4 h-4 mr-2" />
          <span>{article.author}</span>
          <Calendar className="w-4 h-4 ml-4 mr-2" />
          <span>{article.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <button className="text-blue-500 hover:text-blue-700">
          Read More →
        </button>
      </div>
    </motion.div>
  );
};

export default ArticleCard; 