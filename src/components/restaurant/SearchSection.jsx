import React from 'react';
import { Search } from 'lucide-react';
import styles from '../../pages/restaurant.module.css';

const SearchSection = ({ city, onCityChange, onSearch, onKeyPress }) => {
  return (
    <div className={styles.searchSection}>
      <h1>Discover Amazing Restaurants</h1>
      <p className={styles.subtitle}>Find the best dining experiences in your city</p>
      
      <div className={styles.searchBox}>
        <input
          type="text"
          value={city}
          onChange={onCityChange}
          onKeyPress={onKeyPress}
          placeholder="Enter city name..."
          className={styles.searchInput}
        />
        <button onClick={onSearch} className={styles.searchButton}>
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchSection; 