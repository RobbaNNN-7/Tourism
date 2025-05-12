import React from 'react';
import { Plane } from 'lucide-react';
import styles from '../../pages/flight.module.css';

const FlightHeader = () => {
  return (
    <div className={styles.appHeader}>
      <h1>
        <Plane className={styles.planeIcon} size={28} />
        SkySearch
      </h1>
      <p>Find the best flights for your journey</p>
    </div>
  );
};

export default FlightHeader; 