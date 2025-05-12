import React from 'react';
import styles from '../../pages/restaurant.module.css';

const LoadingState = ({ city }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <p>Finding restaurants in {city}...</p>
    </div>
  );
};

export default LoadingState; 