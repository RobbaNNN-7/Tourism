import React from 'react';

const FlightCard = ({ flight }) => {
  return (
    <div className="summary-card flight-card">
      <div className="card-header">
        <i className="fa-solid fa-plane"></i>
        <h3>{flight.name || "Flight"}</h3>
        {flight.is_best && <span className="best-badge">Best Value</span>}
      </div>
      <div className="card-content">
        <div className="flight-time">
          <div className="departure">
            <span className="time">{flight.departure || "N/A"}</span>
          </div>
          <div className="flight-duration">
            <span className="duration-line"></span>
            <span>{flight.duration || "N/A"}</span>
          </div>
          <div className="arrival">
            <span className="time">{flight.arrival || "N/A"}</span>
          </div>
        </div>
        <div className="flight-details">
          <p><strong>Stops:</strong> {flight.stops || "Direct"}</p>
          <p className="price"><strong>Price:</strong> ${flight.price || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightCard; 