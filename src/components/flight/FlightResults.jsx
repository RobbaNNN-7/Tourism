import React from 'react';
import AirlineGroup from './AirlineGroup';
import styles from '../../pages/flight.module.css';

const FlightResults = ({ groupedFlights, formatPrice }) => {
  return (
    <div className={styles.resultsContainer}>
      <h2>Available Flights</h2>
      
      {Object.keys(groupedFlights).map(airline => (
        <AirlineGroup
          key={airline}
          airline={airline}
          flights={groupedFlights[airline]}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
};

export default FlightResults; 