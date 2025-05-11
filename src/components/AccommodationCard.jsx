import React from 'react';
import styles from "../pages/AccomodationSearch.module.css";
import StarRating from './StarRating';

const AccommodationCard = ({ accommodation, accommodationType, formatPrice, onClick }) => (
  <div
    className={styles["accommodationCard"]}
    onClick={() => onClick(accommodation)}
  >
    <div className={styles["accommodationImage"]}>
      {accommodation.image_links ? (
        <img
          src={accommodation.image_links[0]}
          alt={accommodation.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/api/placeholder/400/300";
          }}
        />
      ) : (
        <img
          src="/api/placeholder/400/300"
          alt="No image available"
        />
      )}
      {accommodation.available && (
        <div className={styles["statusIndicator available"]}>
          Available
        </div>
      )}
    </div>
    <div className={styles["accommodationContent"]}>
      <h3 className={styles["accommodationName"]}>
        {accommodation.name}
      </h3>
      <p className={styles["accommodationAddress"]}>
        {typeof accommodation.address === 'object' 
          ? `${accommodation.address.street}, ${accommodation.address.city}`
          : accommodation.address}
      </p>
      <div className={styles["accommodationStats"]}>
        <div className={styles["ratingContainer"]}>
          <StarRating 
            review_score={accommodation.review_score} 
            review_count={accommodation.review_count}
            accommodationType={accommodationType}
          />
          <span className={styles["reviewsCount"]}>
            ({accommodation.review_count || 0})
          </span>
        </div>
        <div className={styles["priceContainer"]}>
          <span className={styles["price"]}>
            {accommodationType === "hotels" 
              ? formatPrice(accommodation.price, "PKR") 
              : formatPrice(accommodation.price, "USD")}
          </span>
          <span className={styles["pricePeriod"]}>/night</span>
        </div>
      </div>
      <div className={styles["viewDetails"]}>
        <span>View Details</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  </div>
);

export default AccommodationCard; 