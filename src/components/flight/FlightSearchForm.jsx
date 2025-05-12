import React from 'react';
import { Search } from 'lucide-react';
import styles from '../../pages/flight.module.css';

const FlightSearchForm = ({ 
  fromAirport, 
  setFromAirport, 
  toAirport, 
  setToAirport, 
  date, 
  setDate, 
  handleSubmit, 
  error 
}) => {
  return (
    <div className={styles.searchCard}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          <div className={styles.formGroup}>
            <label htmlFor="fromAirportCode">From Airport Code</label>
            <input 
              id="fromAirport"
              type="text"
              value={fromAirport}
              onChange={(e) => setFromAirport(e.target.value)}
              placeholder="Enter departure airport"
              className={styles.textInput}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="To Airport Code">To Airport Code</label>
            <input 
              id="toAirport"
              type="text"
              value={toAirport}
              onChange={(e) => setToAirport(e.target.value)}
              placeholder="Enter arrival airport"
              className={styles.textInput}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className={styles.dateInput}
            />
          </div>
          
          <button type="submit" className={styles.searchButton}>
            <Search size={16} />
            Search Flights
          </button>
        </div>
      </form>
      
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default FlightSearchForm; 