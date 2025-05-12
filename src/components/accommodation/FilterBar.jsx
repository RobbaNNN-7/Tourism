import React from 'react';
import styles from '../../pages/AccomodationSearch.module.css';

const FilterBar = ({
  accommodationType,
  setAccommodationType,
  priceRange,
  handlePriceRangeChange,
  sortOrder,
  setSortOrder,
  formatPrice
}) => (
  <div className={styles["filterBar"]}>
    <div className={styles["accommodationTypeToggle"]}>
      <button
        className={`${styles.toggleButton} ${accommodationType === "hotels" ? styles.active : ""}`}
        onClick={() => setAccommodationType("hotels")}
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
          <path d="M3 14h18v7H3z"></path>
          <path d="M21 7V3h-6v4"></path>
          <path d="M3 7V3h6v4"></path>
          <path d="M3 7h18v7H3z"></path>
        </svg>
        Hotels
      </button>
      <button
        className={`${styles.toggleButton} ${accommodationType === "airbnbs" ? styles.active : ""}`}
        onClick={() => setAccommodationType("airbnbs")}
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
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Airbnbs
      </button>
    </div>

    <div className={styles["priceFilter"]}>
      <div className={styles["priceRange"]}>
        <span>
          Price Range: {formatPrice(priceRange[0])} -{" "}
          {formatPrice(priceRange[1])}
        </span>
        <div className={styles["rangeInputs"]}>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={priceRange[0]}
            onChange={(e) => handlePriceRangeChange(e, 0)}
            className={styles["rangeSlider"]}
          />
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={priceRange[1]}
            onChange={(e) => handlePriceRangeChange(e, 1)}
            className={styles["rangeSlider"]}
          />
        </div>
      </div>

      <div className={styles["sortControls"]}>
        <label htmlFor="sortSelect">Sort by price:</label>
        <select
          id="sortSelect"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles["sortSelect"]}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  </div>
);

export default FilterBar; 