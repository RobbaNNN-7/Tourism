import React from 'react';
import { Clock, DollarSign, Award } from 'lucide-react';
import styles from '../../pages/flight.module.css';

const FlightCard = ({ flight, formatPrice }) => {
  return (
    <div className={`${styles.flightCard} ${flight.is_best ? styles.bestFlight : ''}`}>
      {flight.is_best && (
        <div className={styles.bestBadge}>
          <Award size={14} />
          Best Value
        </div>
      )}
      
      <div className={styles.flightHeader}>
        <div className={styles.airlineLogo}>
          {flight.name.charAt(0)}
        </div>
        <div className={styles.airlineName}>{flight.name}</div>
      </div>
      
      <div className={styles.flightTimeContainer}>
        <div className={styles.departure}>
          <div className={styles.time}>{flight.departure.split(' on ')[0]}</div>
          <div className={styles.date}>{flight.departure.split(' on ')[1]}</div>
        </div>
        
        <div className={styles.flightLine}>
          <div className={styles.flightDuration}>
            <Clock size={14} />
            <span>{flight.duration}</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.stops}>
            {flight.stops === 0 ? 'Direct' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}
          </div>
        </div>
        
        <div className={styles.arrival}>
          <div className={styles.time}>{flight.arrival.split(' on ')[0]}</div>
          <div className={styles.date}>{flight.arrival.split(' on ')[1]}</div>
        </div>
      </div>
      
      <div className={styles.flightFooter}>
        <div className={styles.price}>
          <DollarSign size={14} />
          <span>{formatPrice(flight.price)}</span>
        </div>
        <button className={styles.bookBtn}>Book Now</button>
      </div>
    </div>
  );
};

export default FlightCard; 