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

  const formatDepartureDate = (dateString) => {
  // Expected format: "Sat, May 24"
  const parts = dateString.split(',');
  if (parts.length < 2) return dateString;

  const [_, monthDay] = parts;
  const [month, day] = monthDay.trim().split(' ');

  const year = new Date().getFullYear(); // Or dynamically use new Date().getFullYear()
  const date = new Date(`${month} ${day}, ${year}`);

  if (isNaN(date)) return dateString;

  const dayNum = date.getDate();
  const monthShort = date.toLocaleString('default', { month: 'short' });

  return `${dayNum} ${monthShort} ${date.getFullYear()}`;
};


  const handleGenerateFlightURL = (departureDate, airline) => {

    departureDate = formatDepartureDate(departureDate);
    console.log(departureDate);
    if (airline === 'Pakistan International Airlines') {
      const params = {
        tripType: 'ONE_WAY',
        depPort: fromAirport,
        arrPort: toAirport,
        departureDate: departureDate,
        returnDate: '',
        'passengerQuantities[0][passengerType]': 'ADLT',
        'passengerQuantities[0][passengerSubType]': '',
        'passengerQuantities[0][quantity]': '1',
        'passengerQuantities[1][passengerType]': 'CHLD',
        'passengerQuantities[1][passengerSubType]': '',
        'passengerQuantities[1][quantity]': '0',
        'passengerQuantities[2][passengerType]': 'INFT',
        'passengerQuantities[2][passengerSubType]': '',
        'passengerQuantities[2][quantity]': '0',
        currency: 'PKR',
        cabinClass: '',
        lang: 'EN',
        nationality: '',
        promoCode: '',
        accountCode: '',
        affiliateCode: '',
        clickId: '',
        withCalendar: 'false',
        isMobileCalendar: '',
        market: '',
        isFFPoint: 'false',
        umrahPassenger: 'false'
      };

      const queryString = new URLSearchParams(params).toString();
      let flightURL = `https://book-pia.crane.aero/ibe/availability?${queryString}`;
      

      window.open(flightURL, '_blank'); // Open in new tab
    }

    else if (airline === 'Fly Jinnah') {
      const dateObj = new Date(date);
      departureDate = `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
      const flightURL = `https://reservations.flyjinnah.com/service-app/ibe/reservation.html#/fare/en/PKR/PK/${fromAirport}/${toAirport}/${departureDate}/N/1/0/0/Y//N/N`;
      window.open(flightURL, '_blank'); // Open in new tab
    }

    else if (airline === 'Airblue') {
      const flightURL="https://www.airblue.com/bookings/Vues/flight_selection.aspx?=auto"
      window.open(flightURL, '_blank'); 
    }

    else if (airline === 'Serene Air') {
      const dateObj = new Date(date);
      const formattedDate = `${dateObj.getFullYear()}${String(dateObj.getMonth() + 1).padStart(2, '0')}${String(dateObj.getDate()).padStart(2, '0')}`;
      const flightURL = `https://serene.quickprs.com/pc/flight?adult=1&child=0&infant=0&depart=${fromAirport}&arrive=${toAirport}&depart_date=${formattedDate}&return_date=&isCity=0&isIframe=true&currency=PKR&lang=en_US`;
      window.open(flightURL, '_blank');
    }

    else if (airline === 'Air Sial') {
      const flightURL="https://www.airsial.com"
      window.open(flightURL, '_blank');
    }


  }  // Function to format currency
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