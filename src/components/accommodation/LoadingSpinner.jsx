import React from 'react';
import styles from '../../pages/AccomodationSearch.module.css';

const LoadingSpinner = () => (
  <div className={styles["loadingContainer"]}>
    <div className={styles["loadingAnimation"]}>
      <div className={styles["dot dot1"]}></div>
      <div className={styles["dot dot2"]}></div>
      <div className={styles["dot dot3"]}></div>
    </div>
    <p>Finding perfect accommodations...</p>
  </div>
);

export default LoadingSpinner; 