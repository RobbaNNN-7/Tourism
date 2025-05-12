import React from 'react';
import styles from '../../pages/nearbysearch.module.css';

const PlaceCard = ({ place, onPlaceClick, getStarRating }) => {
  return (
    <div 
      className={styles.place_card}
      onClick={() => onPlaceClick(place)}
    >
      <div className={styles.place_image}>
        {place.photo_reference ? (
          <img 
            src={`http://localhost:8000/place-photo?photo_reference=${place.photo_reference}`} 
            alt={place.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/400/300";
            }}
          />
        ) : (
          <img src="/api/placeholder/400/300" alt="No image available" />
        )}
        {place.open_now !== undefined && (
          <div className={`${styles['status_indicator']} ${place.open_now ? styles.open : styles.closed}`}>
            {place.open_now ? 'Open Now' : 'Closed'}
          </div>
        )}
      </div>
      <div className={styles.place_content}>
        <h3 className={styles.place_name}>{place.name}</h3>
        <p className={styles.place_address}>{place.address}</p>
        <div className={styles.place_stats}>
          <div className={styles.rating_container}>
            {getStarRating(place.rating)}
            <span className={styles.reviews_count}>({place.user_ratings_total || 0})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard; 