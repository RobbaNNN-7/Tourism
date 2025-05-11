import React from 'react';
import styles from "../pages/AccomodationSearch.module.css";

const StarRating = ({ review_score, review_count, accommodationType }) => {
  if (review_count === "No reviews yet") {
    return <span className={styles["noRating"]}>No ratings yet</span>;
  }

  const stars = [];
  const adjustedScore = accommodationType === "hotels" ? review_score / 2 : review_score;
  const fullStars = Math.floor(adjustedScore);
  const hasHalfStar = adjustedScore % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className={styles["star full"]}>
          ★
        </span>
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <span key={i} className={styles["star half"]}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className={styles["star empty"]}>
          ☆
        </span>
      );
    }
  }

  return (
    <div className={styles["star-rating"]}>
      {stars} <span className={styles["rating-number"]}>({adjustedScore})</span>
    </div>
  );
};

export default StarRating; 