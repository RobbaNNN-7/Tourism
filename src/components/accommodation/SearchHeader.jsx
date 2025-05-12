import React from 'react';
import styles from '../../pages/AccomodationSearch.module.css';

const SearchHeader = ({ city, setCity, handleSubmit }) => (
  <header className={styles["header"]}>
    <div className={styles["headerContent"]}>
      <h1 className={styles["appTitleAccom"]}>
        Stay<span>Finder</span>
      </h1>
      <p className={styles["appTaglineAccom"]}>
        Find your perfect accommodation anywhere in the world
      </p>

      <div className={styles["searchContainerAccom"]}>
        <form onSubmit={handleSubmit} className={styles["searchFormAccom"]}>
          <div className={styles["inputWrapperAccom"]}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Where are you traveling to?"
              className={styles["cityInput"]}
            />
            <button
              type="submit"
              className={styles["searchButtonAccomodation"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </header>
);

export default SearchHeader; 