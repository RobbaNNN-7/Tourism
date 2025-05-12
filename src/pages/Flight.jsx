/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './flight.module.css';
import FlightHeader from '../components/flight/FlightHeader';
import FlightSearchForm from '../components/flight/FlightSearchForm';
import FlightResults from '../components/flight/FlightResults';
import FlightFooter from '../components/flight/FlightFooter';

const FlightSearchApp = () => {
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [date, setDate] = useState('');
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!fromAirport || !toAirport || !date) {
      setError('Please fill all fields');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:8000/flight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        mode: 'cors',
        body: JSON.stringify({
          user_input: {
            from_airport: fromAirport,
            to_airport: toAirport,
            date: date,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch flights');
      }

      const data = await response.json();
      setFlights(data);
    } catch (err) {
      setError('Error fetching flights. Please Enter Correct Airport Code.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to format currency
  const formatPrice = (price) => {
    if (price === 'Price unavailable') return price;
    return price.replace('PKR\xa0', 'PKR ');
  };

  // Group flights by airline for better organization
  const groupedFlights = flights.reduce((acc, flight) => {
    if (!acc[flight.name]) {
      acc[flight.name] = [];
    }
    // Only add unique flights (avoid duplicates)
    const isDuplicate = acc[flight.name].some(f => 
      f.departure === flight.departure && 
      f.arrival === flight.arrival && 
      f.price === flight.price
    );
    
    if (!isDuplicate) {
      acc[flight.name].push(flight);
    }
    return acc;
  }, {});

  return (
    <div className={styles.flightSearchContainer}>
      <FlightHeader />

      <FlightSearchForm
        fromAirport={fromAirport}
        setFromAirport={setFromAirport}
        toAirport={toAirport}
        setToAirport={setToAirport}
        date={date}
        setDate={setDate}
        handleSubmit={handleSubmit}
        error={error}
      />

      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loader}></div>
          <p>Finding the best flights for you...</p>
        </div>
      ) : flights.length > 0 ? (
        <FlightResults
          groupedFlights={groupedFlights}
          formatPrice={formatPrice}
        />
      ) : null}
      
      <FlightFooter />
    </div>
  );
};

export default FlightSearchApp;