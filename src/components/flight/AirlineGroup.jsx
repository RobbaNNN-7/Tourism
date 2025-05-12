import React from 'react';
import FlightCard from './FlightCard';
import styles from '../../pages/flight.module.css';

const AirlineGroup = ({ airline, flights, formatPrice }) => {
  return (
    <div className={styles.airlineGroup}>
      <div className={styles.airlineHeader}>
        <h3>{airline}</h3>
      </div>
      
      <div className={styles.flightsGrid}>
        {flights.map((flight, index) => (
          <FlightCard 
            key={index} 
            flight={flight} 
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default AirlineGroup; 