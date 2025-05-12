import React from 'react';
import { MapPin, Star, Coffee, Utensils } from 'lucide-react';
import styles from '../../pages/restaurant.module.css';

const RestaurantCard = ({ restaurant, getTypeIcon }) => {
  return (
    <div className={styles.restaurantCard}>
      <div className={styles.cardImage}>
        {restaurant.image ? (
          <img
            src={`http://localhost:8000/place-photo?photo_reference=${restaurant.image}`}
            alt={restaurant.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'http://localhost:8000/random-photo';
            }}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <Utensils size={40} />
          </div>
        )}
        <div className={styles.rating}>
          <Star className={styles.starIcon} size={16} />
          <span>{restaurant.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <h3>{restaurant.name}</h3>
        <div className={styles.address}>
          <MapPin size={16} className={styles.pinIcon} />
          <p>{restaurant.address}</p>
        </div>
        
        {restaurant.types && restaurant.types.length > 0 && (
          <div className={styles.typesContainer}>
            {restaurant.types.slice(0, 3).map((type, index) => (
              <span key={index} className={styles.typeBadge}>
                {getTypeIcon(type)}
                {type}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard; 