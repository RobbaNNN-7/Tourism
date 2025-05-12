import React from 'react';
import styles from '../../pages/restaurant.module.css';
import RestaurantCard from './RestaurantCard';

const ResultsSection = ({ restaurants, getTypeIcon }) => {
  return (
    <div className={styles.resultsSection}>
      <div className={styles.resultsGrid}>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            restaurant={restaurant}
            getTypeIcon={getTypeIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsSection; 