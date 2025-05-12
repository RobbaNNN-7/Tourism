import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleGrid = ({ articles, activeCategory }) => {
  const filteredArticles = articles.filter(
    article => activeCategory === 'all' || article.category === activeCategory
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleGrid; 