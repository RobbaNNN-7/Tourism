import { useState, useEffect } from 'react';
import { fetchAccommodations } from '../services/accommodationService';

export const useAccommodationSearch = () => {
  const [city, setCity] = useState("");
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeAccommodation, setActiveAccommodation] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [accommodationType, setAccommodationType] = useState("hotels");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [is404, setIs404] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSearchPerformed(true);

    try {
      const data = await fetchAccommodations(city, accommodationType);
      const sortedData = [...data].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
      setAccommodations(sortedData);
      setActiveAccommodation(null);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setAccommodations([]);
      if (err.message.includes("No accommodations found")) {
        setIs404(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePriceRangeChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange];
    newRange[index] = newValue;

    if (index === 0 && newValue > newRange[1]) {
      newRange[0] = newRange[1];
    } else if (index === 1 && newValue < newRange[0]) {
      newRange[1] = newRange[0];
    }
    setPriceRange(newRange);
  };

  const handleRetry = () => {
    setIs404(false);
    setError(null);
    setCity("");
  };

  useEffect(() => { 
    if (searchPerformed && city) {
      handleSearch();
    }
  }, [sortOrder, accommodationType]);

  return {
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
  };
}; 