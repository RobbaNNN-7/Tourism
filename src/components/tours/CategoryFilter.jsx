import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category.id
              ? 'bg-blue-500 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 