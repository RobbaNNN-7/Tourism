import React from 'react';
import styles from '../../pages/nearbysearch.module.css';

const SearchHeader = ({ city, setCity, handleSubmit }) => {
  return (
    <div className={styles.parallax_header}>
      <div className={styles.header_content}>
        <h1 className={styles.app_title}>Wander<span>Lust</span></h1>
        <p className={styles.app_tagline}>Unveil the extraordinary in every corner of the world</p>
        
        <div className={styles.search_container}>
          <form onSubmit={handleSubmit} className={styles.search_form}>
            <div className={styles.input_wrapper}>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Where to next? Enter a city..."
                className={styles.city_input}
              />
              <button type="submit" className={styles.search_button}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader; 