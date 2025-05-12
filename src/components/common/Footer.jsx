import React from 'react';
import styles from '../../pages/AccomodationSearch.module.css';

const Footer = () => {
  return (
    <footer className={styles["appFooter"]}>
      <div className={styles["footerContent"]}>
        <p className={styles["copyright"]}>
          © {new Date().getFullYear()} StayFinder | Find your perfect stay
          anywhere in the world
        </p>
      </div>
    </footer>
  );
};

export default Footer; 