/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./AccomodationSearch.module.css";
import React, { useState, useEffect } from "react";
import SearchHeader from '../components/SearchHeader';
import FilterBar from '../components/FilterBar';
import AccommodationCard from '../components/AccommodationCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import NoResults from '../components/NoResults';
import WelcomeSection from '../components/WelcomeSection';

const AccommodationSearch = () => {
  const [city, setCity] = useState("");
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeAccommodation, setActiveAccommodation] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [accommodationType, setAccommodationType] = useState("hotels"); // 'hotels' or 'airbnbs'
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [is404, setIs404] = useState(false);

  const fetchAccommodations = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
  
    setLoading(true);
    setError(null);
    setSearchPerformed(true);
  
    try {
      const baseUrl =
        accommodationType === "hotels"
          ? "http://localhost:8000/get-hotels" 
          : "http://localhost:8000/get-airbnbs";
  
      // Construct query params
      const queryParams = new URLSearchParams({ address: city.trim() });
  
  
      const response = await fetch(`${baseUrl}?${queryParams.toString()}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
  
      if (!response.ok) {
        if (response.status === 404) {
          setIs404(true);
          throw new Error(`No accommodations found in ${city}`);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (Array.isArray(data)) {
        const sortedData = [...data].sort((a, b) =>
          sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );
        setAccommodations(sortedData);
        setActiveAccommodation(null);
      } else {
        throw new Error("Received invalid data format");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(`${err.message}`);
      setAccommodations([]);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => { 
    if (searchPerformed && city) {
      fetchAccommodations();
    }
  }, [sortOrder, accommodationType]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAccommodations();
  };

  const generateLink = () => {
    const page_id = activeAccommodation.page_id;
    if (!page_id) {
      console.error("Page ID is not available");
      return;
    }

    let baseUrl = "https://www.booking.com/hotel/pk/";
    if (accommodationType === "airbnbs") {
      baseUrl = "https://www.airbnb.com/rooms/";
    }

    // Convert page_id to string to ensure proper concatenation
    const pageIdString = String(page_id);
    console.log("Opening link:", baseUrl + pageIdString);
    return window.open(baseUrl + pageIdString, "_blank");
  }
  const getStarRating = (review_score, review_count) => {
    if (review_count === "No reviews yet") return <span className={styles["noRating"]}>No ratings yet</span>;
    const stars = [];
    if (accommodationType === "hotels") review_score = review_score /2;

    const fullStars = Math.floor(review_score);
    const hasHalfStar = review_score % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className={styles["star full"]}>
            ★
          </span>,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className={styles["star half"]}>
            ★
          </span>,
        );
      } else {
        stars.push(
          <span key={i} className={styles["star empty"]}>
            ☆
          </span>,
        );
      }
    }
    return (
      <div className={styles["star-rating"]}>
        {stars} <span className={styles["rating-number"]}>({review_score})</span>
      </div>
    );
  };
  const formatPrice = (price, currencyForm) => {
    const currency = currencyForm === "PKR" ? "PKR" : "USD";
    const numericPrice = typeof price === 'string' ? parseFloat(price.replace(/[^\d.-]/g, '')) : Number(price);
    
    if (isNaN(numericPrice)) {
      return currency === "PKR" ? "PKR 0" : "$0";
    }
    
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(numericPrice);
  };
  const showAccommodationDetails = (accommodation) => {
    setActiveAccommodation(accommodation);
    document.body.classList.add("modalOpen");
  };
  const closeAccommodationDetails = () => {
    setActiveAccommodation(null);
    document.body.classList.remove("modalOpen");
  };
  const handlePriceRangeChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange];
    newRange[index] = newValue;

    // Ensure min doesn't exceed max
    if (index === 0 && newValue > newRange[1]) {
      newRange[0] = newRange[1];
    }
    // Ensure max doesn't go below min
    else if (index === 1 && newValue < newRange[0]) {
      newRange[1] = newRange[0];
    }
    setPriceRange(newRange);
  };
  return (
    <div className={styles["stayFinderApp"]}>
      <SearchHeader 
        city={city}
        setCity={setCity}
        handleSubmit={handleSubmit}
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
            onRetry={() => {
              setIs404(false);
              setError(null);
              setCity("");
            }}
          />
        )}

        {!loading && accommodations.length > 0 && (
          <div className={styles["resultsSection"]}>
            <div className={styles["resultsHeader"]}>
              <h2>
                {accommodationType === "hotels" ? "🏨" : "🏠"}{" "}
                {accommodationType === "hotels" ? "Hotels" : "Airbnbs"} in{" "}
                <span className={styles["highlightCity"]}>{city}</span>
              </h2>
              <p className={styles["resultsCount"]}>
                {accommodations.length} accommodations found
              </p>
            </div>

            <div className={styles["accommodationsGrid"]}>
              {accommodations.map((accommodation) => (
                <AccommodationCard
                  key={accommodation.id}
                  accommodation={accommodation}
                  accommodationType={accommodationType}
                  formatPrice={formatPrice}
                  onClick={showAccommodationDetails}
                />
              ))}
            </div>
          </div>
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
        <div
          className={styles["modalOverlay"]}
          onClick={closeAccommodationDetails}
        >
          <div
            className={styles["accommodationModal"]}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles["closeModal"]}
              onClick={closeAccommodationDetails}
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className={styles["modalImage"]}>
              {activeAccommodation.image_links ? (
                <img
                  src={activeAccommodation.image_links[0]}
                  alt={activeAccommodation.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/800/500";
                  }}
                />
              ) : (
                <img src="/api/placeholder/800/500" alt="No image available" />
              )}
            </div>

            <div className={styles["modalContent"]}>
              <h2 className={styles["modalTitle"]}>
                {activeAccommodation.name}
              </h2>

              <div className={styles["modalStats"]}>
                <div className={styles["modalRating"]}>
                  {getStarRating(activeAccommodation.review_score, activeAccommodation.review_count)}
                  <span className={styles["modalReviews"]}>
                    ({activeAccommodation.review_count || 0})
                  </span>
                </div>

                <div className={styles["modalPrice"]}>
                  <span className={styles["priceAmount"]}>
                    {accommodationType === "hotels" ? formatPrice(activeAccommodation.price,"PKR") : formatPrice(activeAccommodation.price,"USD")}
                  </span>
                  <span className={styles["pricePeriod"]}>/night</span>
                </div>
              </div>

              <div className={styles["modalInfo"]}>
                <div className={styles["infoItem"]}>
                  <div className={styles["infoIcon"]}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className={styles["infoText"]}>
                    <span className={styles["infoLabel"]}>Address</span>
                    <span className={styles["infoValue"]}>
                      {typeof activeAccommodation.address === 'object'
                        ? `${activeAccommodation.address.street}`
                        : activeAccommodation.address}
                    </span>
                  </div>
                </div>

                {activeAccommodation.available !== undefined && (
                  <div className={styles["infoItem"]}>
                    <div className={styles["infoIcon"]}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div className={styles["infoText"]}>
                      <span className={styles["infoLabel"]}>Status</span>
                      <span
                        className={`${styles.infoValue} ${activeAccommodation.available ? styles.statusAvailable : styles.statusUnavailable}`}
                      >
                        {activeAccommodation.available
                          ? "Available"
                          : "Unavailable"}
                      </span>
                    </div>
                  </div>
                )}

                {activeAccommodation.type && (
                  <div className={styles["infoItem"]}>
                    <div className={styles["infoIcon"]}>
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
                    </div>
                    <div className={styles["infoText"]}>
                      <span className={styles["infoLabel"]}>Type</span>
                      <span className={styles["infoValue"]}>
                        {activeAccommodation.type}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {activeAccommodation.amenities &&
                activeAccommodation.amenities.length > 0 && (
                  <div className={styles["modalAmenities"]}>
                    <h4>Amenities</h4>
                    <div className={styles["amenitiesContainer"]}>
                      {activeAccommodation.amenities.map((amenity, index) => (
                        <span key={index} className={styles["amenityTag"]}>
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {activeAccommodation.description && (
                <div className={styles["modalDescription"]}>
                  <h4>Description</h4>
                  <p>{activeAccommodation.description}</p>
                </div>
              )}

              <div className={styles["modalActions"]}>
                <button className={styles["bookButton"]} onClick={generateLink}>Book Now</button>

                <button className={styles["saveButton"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className={styles["appFooter"]}>
        <div className={styles["footerContent"]}>
          <p className={styles["copyright"]}>
            © {new Date().getFullYear()} StayFinder | Find your perfect stay
            anywhere in the world
          </p>
        </div>
      </footer>
    </div>
  );
};
export default AccommodationSearch;
