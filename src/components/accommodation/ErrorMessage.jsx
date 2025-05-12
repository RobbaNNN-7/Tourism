import React from 'react';
import styles from '../../pages/AccomodationSearch.module.css';

const ErrorMessage = ({ error, is404, onRetry }) => (
  <div className={styles["errorMessage"]}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {is404 ? (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </>
      )}
    </svg>
    <p>{error}</p>
    {is404 && (
      <button 
        className={styles.retryButton}
        onClick={onRetry}
      >
        Try Another City
      </button>
    )}
  </div>
);

export default ErrorMessage; 