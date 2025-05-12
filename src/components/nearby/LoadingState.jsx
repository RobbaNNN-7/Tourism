import React from 'react';
import styles from '../../pages/nearbysearch.module.css';

const LoadingState = () => {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading_animation}>
        <div className={`${styles.dot} ${styles.dot1}`}></div>
        <div className={`${styles.dot} ${styles.dot2}`}></div>
        <div className={`${styles.dot} ${styles.dot3}`}></div>
      </div>
      <p>Discovering amazing places...</p>
    </div>
  );
};

export default LoadingState; 