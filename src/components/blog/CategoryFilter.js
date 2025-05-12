import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${activeCategory === category.id
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 