import React, { useState } from 'react';
import CategoryFilter from '../components/blog/CategoryFilter';
import FeaturedArticle from '../components/blog/FeaturedArticle';
import ArticleGrid from '../components/blog/ArticleGrid';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'experiences', label: 'Travel Experiences' },
    { id: 'festivals', label: 'Festivals' },
    { id: 'food', label: 'Food' },
    { id: 'tips', label: 'Travel Tips' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Exploring the Hidden Gems of Hunza Valley',
      author: 'Sarah Khan',
      date: '2024-03-15',
      category: 'experiences',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      excerpt: 'Discover the breathtaking beauty of Hunza Valley through the eyes of a local traveler...'
    },
    {
      id: 2,
      title: 'A Guide to Pakistani Street Food',
      author: 'Ali Ahmed',
      date: '2024-03-10',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      excerpt: 'From spicy chaat to sweet jalebi, explore the vibrant street food culture of Pakistan...'
    },
    // Add more articles
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Travel Stories & Guides</h1>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <FeaturedArticle article={articles[0]} />
        
        <ArticleGrid articles={articles} activeCategory={activeCategory} />
      </div>
    </div>
  );
};

export default Blog; 