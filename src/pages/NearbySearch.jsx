/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import styles from './nearbysearch.module.css';
import SearchHeader from '../components/nearby/SearchHeader';
import CategoryNav from '../components/nearby/CategoryNav';
import LoadingState from '../components/nearby/LoadingState';
import ErrorMessage from '../components/nearby/ErrorMessage';
import ResultsSection from '../components/nearby/ResultsSection';

const NearbySearch = () => {
  const [city, setCity] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('tourist_attraction');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activePlace, setActivePlace] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const collections = [
    { id: "tourist_attraction", name: "Tourist Attractions", icon: "🏛️" },
    { id: "park", name: "Parks", icon: "🌳" },
    { id: "shopping_mall", name: "Shopping Malls", icon: "🛍️" },
    { id: "zoo", name: "Zoos", icon: "🦁" },
    { id: "museum", name: "Museums", icon: "🖼️" },
    { id: "movie_theater", name: "Movie Theaters", icon: "🎬" },
    { id: "mosque", name: "Mosques", icon: "🕌" },
    { id: "church", name: "Churches", icon: "⛪" },
  ];

  const fetchPlaces = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
  
    setLoading(true);
    setError(null);
    setSearchPerformed(true);
    
    try {
      const response = await fetch('http://localhost:8000/get-data', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          collection: selectedCollection,
          city: city.trim()
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Received non-JSON response from server");
      }
  
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setPlaces(data);
        setActivePlace(null);
      } else {
        throw new Error("Received invalid data format");
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Failed to fetch data: ${err.message}`);
      setPlaces([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlaces();
  };

  const getStarRating = (rating) => {
    if (!rating) return <span className={styles.no_rating}>No ratings yet</span>;
    
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className={`${styles.star} ${styles.full}`}>★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className={`${styles.star} ${styles.half}`}>★</span>);
      } else {
        stars.push(<span key={i} className={`${styles.star} ${styles.empty}`}>☆</span>);
      }
    }
    
    return (
      <div className={styles.star_rating}>
        {stars} <span className={styles.rating_number}>({rating})</span>
      </div>
    );
  };

  const getPriceLevel = (level) => {
    if (level === undefined) return <span className={styles.price_not_available}>Price not available</span>;
    
    const symbols = [];
    for (let i = 0; i < 4; i++) {
      if (i < level) {
        symbols.push(<span key={i} className={`${styles.price_symbol} ${styles.active}`}>$</span>);
      } else {
        symbols.push(<span key={i} className={styles.price_symbol}>$</span>);
      }
    }
    
    return <div className={styles.price_level}>{symbols}</div>;
  };

  const showPlaceDetails = (place) => {
    setActivePlace(place);
    document.body.classList.add('modal_open');
  };

  const closePlaceDetails = () => {
    setActivePlace(null);
    document.body.classList.remove('modal_open');
  };

  const getCurrentCollectionName = () => {
    const collection = collections.find(c => c.id === selectedCollection);
    return collection ? collection.name : "Places";
  };

  const getCurrentCollectionIcon = () => {
    const collection = collections.find(c => c.id === selectedCollection);
    return collection ? collection.icon : "🌍";
  };

  return (
    <div className={styles.wanderlust_app}>
      <SearchHeader
        city={city}
        setCity={setCity}
        handleSubmit={handleSubmit}
      />

      <CategoryNav
        collections={collections}
        selectedCollection={selectedCollection}
        onCollectionSelect={(id) => {
          setSelectedCollection(id);
          if (searchPerformed && city) fetchPlaces();
        }}
      />

      <main className={styles.main_content}>
        {loading && <LoadingState />}
        {error && <ErrorMessage error={error} />}
        
        {!loading && places.length > 0 && (
          <ResultsSection
            places={places}
            city={city}
            collectionIcon={getCurrentCollectionIcon()}
            collectionName={getCurrentCollectionName()}
            onPlaceClick={showPlaceDetails}
            getStarRating={getStarRating}
          />
        )}
      </main>

      {activePlace && (
        <div className={styles.modal_overlay} onClick={closePlaceDetails}>
          <div className={styles.place_modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close_modal} onClick={closePlaceDetails}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className={styles.modal_image}>
              {activePlace.photo_reference ? (
                <img 
                  src={`http://localhost:8000/place-photo?photo_reference=${activePlace.photo_reference}`}
                  alt={activePlace.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/800/500";
                  }}
                />
              ) : (
                <img src="/api/placeholder/800/500" alt="No image available" />
              )}
            </div>
            
            <div className={styles.modal_content}>
              <h2 className={styles.modal_title}>{activePlace.name}</h2>
              
              <div className={styles.modal_stats}>
                <div className={styles.modal_rating}>
                  {getStarRating(activePlace.rating)}
                  <span className={styles.modal_reviews}>({activePlace.user_ratings_total || 0} reviews)</span>
                </div>
                
                {activePlace.price_level !== undefined && (
                  <div className={styles.modal_price}>
                    {getPriceLevel(activePlace.price_level)}
                  </div>
                )}
              </div>
              
              <div className={styles.modal_info}>
                <div className={styles.info_item}>
                  <div className={styles.info_icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className={styles.info_text}>
                    <span className={styles.info_label}>Address</span>
                    <span className={styles.info_value}>{activePlace.address}</span>
                  </div>
                </div>
                
                {activePlace.business_status && (
                  <div className={styles.info_item}>
                    <div className={styles.info_icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div className={styles.info_text}>
                      <span className={styles.info_label}>Status</span>
                      <span className={`${styles["info_value"]} ${styles[`status_${activePlace.business_status.toLowerCase()}`]}`}>
                        {activePlace.business_status.replace(/_/g, " ")}
                      </span>
                    </div>
                  </div>
                )}
                
                {activePlace.open_now !== undefined && (
                  <div className={styles.info_item}>
                    <div className={styles.info_icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className={styles.info_text}>
                      <span className={styles.info_label}>Currently</span>
                      <span className={`${styles["info_value"]} ${activePlace.open_now ? styles["status_open"] : styles["status_closed"]}`}>
                        {activePlace.open_now ? 'Open Now' : 'Closed'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              {activePlace.types && activePlace.types.length > 0 && (
                <div className={styles.modal_tags}>
                  <h4>Place Types</h4>
                  <div className={styles.tags_container}>
                    {activePlace.types.map((type, index) => (
                      <span key={index} className={styles.place_tag}>
                        {type.replace(/_/g, " ")}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {activePlace.location && (
                <div className={styles.modal_actions}>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${activePlace.location.lat},${activePlace.location.lng}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.map_link}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                      <line x1="8" y1="2" x2="8" y2="18"></line>
                      <line x1="16" y1="6" x2="16" y2="22"></line>
                    </svg>
                    View on Map
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className={styles.app_footer}>
        <div className={styles.footer_content}>
          <p className={styles.copyright}>© {new Date().getFullYear()} WanderLust | Discover the world, one place at a time</p>
          <div className={styles.footer_links}>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NearbySearch;