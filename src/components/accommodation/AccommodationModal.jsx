import React from 'react';
import { X } from 'lucide-react';
import { getStarRating, formatPrice, generateBookingLink } from '../../utils/accommodationUtils';
import styles from '../../pages/AccomodationSearch.module.css';

const AccommodationModal = ({ 
  accommodation, 
  accommodationType, 
  onClose 
}) => {
  if (!accommodation) return null;

  return (
    <div className={styles["modalOverlay"]} onClick={onClose}>
      <div 
        className={styles["modalContent"]} 
        onClick={e => e.stopPropagation()}
      >
        <button 
          className={styles["closeButton"]} 
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className={styles["modalHeader"]}>
          <h2>{accommodation.name}</h2>
          {getStarRating(
            accommodation.review_score, 
            accommodation.review_count,
            accommodationType
          )}
        </div>

        <div className={styles["modalBody"]}>
          <img 
            src={accommodation.image_url} 
            alt={accommodation.name} 
            className={styles["modalImage"]}
          />
          
          <div className={styles["modalDetails"]}>
            <p className={styles["modalPrice"]}>
              {formatPrice(accommodation.price, "USD")} per night
            </p>
            <p className={styles["modalLocation"]}>{accommodation.location}</p>
            <p className={styles["modalDescription"]}>{accommodation.description}</p>
          </div>
        </div>

        <div className={styles["modalFooter"]}>
          <button 
            className={styles["bookButton"]}
            onClick={() => generateBookingLink(accommodation.page_id, accommodationType)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationModal; 