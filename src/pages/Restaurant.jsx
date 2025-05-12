import React, { useState } from 'react';
import { Coffee, Utensils, Pizza, Beer, Wine, IceCream } from 'lucide-react';
import styles from './restaurant.module.css';
import SearchSection from '../components/restaurant/SearchSection';
import LoadingState from '../components/restaurant/LoadingState';
import NoResults from '../components/restaurant/NoResults';
import ResultsSection from '../components/restaurant/ResultsSection';

// WORKS BUT API KEY IS LEAKED .. 

// FIX :: 
/*

*/
const Restaurant = () => {
  const [city, setCity] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch('http://localhost:8000/restaurant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }),
      });
      const data = await response.json();
  
      if (data.error) {
        setError(data.error);
        setRestaurants([]);
      } else {
        setRestaurants(data);
      }
    } catch (err) {
      setError('Failed to fetch restaurants. Please try again.');
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'cafe':
        return <Coffee size={16} />;
      case 'restaurant':
        return <Utensils size={16} />;
      case 'pizza':
        return <Pizza size={16} />;
      case 'bar':
        return <Beer size={16} />;
      case 'wine_bar':
        return <Wine size={16} />;
      case 'ice_cream':
        return <IceCream size={16} />;
      default:
        return <Utensils size={16} />;
    }
  };

  return (
    <div className={styles.container}>
      <SearchSection
        city={city}
        onCityChange={handleCityChange}
        onSearch={handleSearch}
      />

      {loading && <LoadingState city={city} />}

      {!loading && error && (
        <div className={styles.error}>{error}</div>
      )}

      {!loading && !error && restaurants.length === 0 && city && (
        <NoResults city={city} />
      )}

      {!loading && !error && restaurants.length > 0 && (
        <ResultsSection
          restaurants={restaurants}
          getTypeIcon={getTypeIcon}
        />
      )}
    </div>
  );
};

export default Restaurant;
