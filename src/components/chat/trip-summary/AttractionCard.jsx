import React from 'react';
import { renderStars } from '../utils/ratingUtils';

const AttractionCard = ({ attraction }) => {
  return (
    <div className="summary-card attraction-card">
      <div className="card-header">
        <i className="fa-solid fa-landmark"></i>
        <h3>{attraction.name || "Attraction"}</h3>
      </div>
      <div className="card-content">
        <div className="attraction-image">
          {attraction.photo_reference ? 
            <img src={attraction.photo_reference} alt={attraction.name} /> : 
            <div className="placeholder-img">No Image</div>
          }
        </div>
        <div className="attraction-details">
          <p><strong>Address:</strong> {attraction.address || "N/A"}</p>
          <p><strong>Type:</strong> {attraction.types?.join(", ") || "Tourist Spot"}</p>
          <div className="rating">
            <strong>Rating:</strong>
            <span className="stars">{renderStars(attraction.rating || 0)}</span>
            <span className="rating-value">({attraction.rating || "N/A"}) from {attraction.user_ratings_total || 0} reviews</span>
          </div>
          {attraction.open_now !== undefined && 
            <p className={`open-status ${attraction.open_now ? "open" : "closed"}`}>
              {attraction.open_now ? "Open Now" : "Closed"}
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default AttractionCard; 