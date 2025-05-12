import React from 'react';
import styles from '../../pages/nearbysearch.module.css';
import PlaceCard from './PlaceCard';

const ResultsSection = ({ places, city, collectionIcon, collectionName, onPlaceClick, getStarRating }) => {
  return (
    <div className={styles.results_section}>
      <div className={styles.results_header}>
        <h2>{collectionIcon} {collectionName} in <span className={styles.highlight_city}>{city}</span></h2>
        <p className={styles.results_count}>{places.length} places found</p>
      </div>
      
      <div className={styles.places_grid}>
        {places.map((place) => (
          <PlaceCard
            key={place.place_id}
            place={place}
            onPlaceClick={onPlaceClick}
            getStarRating={getStarRating}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsSection; 