import React from 'react';
import styles from '../../pages/AccomodationSearch.module.css';

const NoResults = ({ city, accommodationType }) => (
  <div className={styles["noResults"]}>
    <div className={styles["noResultsIllustration"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
      </svg>
    </div>
    <h3>
      No {accommodationType} found in {city}
    </h3>
    <p>
      Try adjusting your price range or searching in a different city
    </p>
  </div>
);

export default NoResults; 