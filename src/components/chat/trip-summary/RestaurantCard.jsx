import React from 'react';
import { renderStars } from '../utils/ratingUtils';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="summary-card restaurant-card">
      <div className="card-header">
        <i className="fa-solid fa-utensils"></i>
        <h3>{restaurant.name || "Restaurant"}</h3>
      </div>
      <div className="card-content">
        <div className="restaurant-image">
          {restaurant.image ? 
            <img src={restaurant.image} alt={restaurant.name} /> : 
            <div className="placeholder-img">No Image</div>
          }
        </div>
        <div className="restaurant-details">
          <p><strong>Address:</strong> {restaurant.address || "N/A"}</p>
          <p><strong>Cuisine:</strong> {restaurant.types?.join(", ") || "Various"}</p>
          <div className="rating">
            <strong>Rating:</strong> 
            <span className="stars">{renderStars(restaurant.rating || 0)}</span>
            <span className="rating-value">({restaurant.rating || "N/A"})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard; 