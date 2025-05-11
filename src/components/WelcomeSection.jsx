import React from 'react';
import styles from "../pages/AccomodationSearch.module.css";

const WelcomeSection = () => (
  <div className={styles["welcomeSection"]}>
    <div className={styles["welcomeIllustration"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    </div>
    <h2>Find Your Perfect Stay</h2>
    <p>
      Enter a city name and choose between hotels or Airbnbs to discover
      accommodations worldwide
    </p>
    <div className={styles["welcomeTips"]}>
      <div className={styles["tip"]}>
        <div className={styles["tipIcon"]}>🏨</div>
        <div className={styles["tipText"]}>
          Compare hotels and Airbnbs
        </div>
      </div>
      <div className={styles["tip"]}>
        <div className={styles["tipIcon"]}>💲</div>
        <div className={styles["tipText"]}>
          Filter by price range
        </div>
      </div>
      <div className={styles["tip"]}>
        <div className={styles["tipIcon"]}>⭐</div>
        <div className={styles["tipText"]}>
          Read verified reviews
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeSection; 