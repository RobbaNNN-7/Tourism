/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styles from "./AccomodationSearch.module.css";
import SearchHeader from '../components/accommodation/SearchHeader';
import FilterBar from '../components/accommodation/FilterBar';
import LoadingSpinner from '../components/accommodation/LoadingSpinner';
import ErrorMessage from '../components/accommodation/ErrorMessage';
import NoResults from '../components/accommodation/NoResults';
import WelcomeSection from '../components/accommodation/WelcomeSection';
import ResultsSection from '../components/accommodation/ResultsSection';
import AccommodationModal from '../components/accommodation/AccommodationModal';
import Footer from '../components/common/Footer';
import { formatPrice } from '../utils/accommodationUtils';
import { useAccommodationSearch } from '../hooks/useAccommodationSearch';

const AccommodationSearch = () => {
  const {
    city,
    setCity,
    accommodations,
    loading,
    error,
    activeAccommodation,
    setActiveAccommodation,
    searchPerformed,
    accommodationType,
    setAccommodationType,
    priceRange,
    sortOrder,
    setSortOrder,
    is404,
    handleSearch,
    handlePriceRangeChange,
    handleRetry
  } = useAccommodationSearch();

  return (
    <div className={styles["stayFinderApp"]}>
      <SearchHeader 
        city={city}
        setCity={setCity}
        handleSubmit={handleSearch}
      />

      <FilterBar
        accommodationType={accommodationType}
        setAccommodationType={setAccommodationType}
        priceRange={priceRange}
        handlePriceRangeChange={handlePriceRangeChange}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        formatPrice={formatPrice}
      />

      <main className={styles["mainContent"]}>
        {loading && <LoadingSpinner />}

        {error && (
          <ErrorMessage 
            error={error}
            is404={is404}
            onRetry={handleRetry}
          />
        )}

        {!loading && accommodations.length > 0 && (
          <ResultsSection
            accommodations={accommodations}
            city={city}
            accommodationType={accommodationType}
            formatPrice={formatPrice}
            onAccommodationClick={setActiveAccommodation}
          />
        )}

        {!loading && accommodations.length === 0 && searchPerformed && !error && (
          <NoResults 
            city={city}
            accommodationType={accommodationType}
          />
        )}

        {!searchPerformed && !loading && <WelcomeSection />}
      </main>

      {activeAccommodation && (
        <AccommodationModal
          accommodation={activeAccommodation}
          accommodationType={accommodationType}
          onClose={() => setActiveAccommodation(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default AccommodationSearch;
