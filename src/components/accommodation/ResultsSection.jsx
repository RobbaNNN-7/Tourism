import React from 'react';
import AccommodationCard from '../AccommodationCard';
import styles from '../../pages/AccomodationSearch.module.css';

const ResultsSection = ({ 
  accommodations, 
  city, 
  accommodationType, 
  formatPrice, 
  onAccommodationClick 
}) => {
  return (
    <div className={styles["resultsSection"]}>
      <div className={styles["resultsHeader"]}>
        <h2>
          {accommodationType === "hotels" ? "🏨" : "🏠"}{" "}
          {accommodationType === "hotels" ? "Hotels" : "Airbnbs"} in{" "}
          <span className={styles["highlightCity"]}>{city}</span>
        </h2>
        <p className={styles["resultsCount"]}>
          {accommodations.length} accommodations found
        </p>
      </div>

      <div className={styles["accommodationsGrid"]}>
        {accommodations.map((accommodation) => (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
            accommodationType={accommodationType}
            formatPrice={formatPrice}
            onClick={() => onAccommodationClick(accommodation)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsSection; 