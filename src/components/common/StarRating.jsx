import React from 'react';
import styles from '../../pages/AccomodationSearch.module.css';

const StarRating = ({ review_score, review_count, accommodationType }) => {
  const getStarRating = (score) => {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className={styles["starRating"]}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={styles["star"]}>★</span>
        ))}
        {hasHalfStar && <span className={styles["star half"]}>★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className={styles["star empty"]}>☆</span>
        ))}
      </div>
    );
  };

  return (
    <div className={styles["ratingContainer"]}>
      {getStarRating(review_score)}
      <span className={styles["reviewScore"]}>
        {review_score.toFixed(1)}
      </span>
      {review_count > 0 && (
        <span className={styles["reviewCount"]}>
          ({review_count} {review_count === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

export default StarRating; 