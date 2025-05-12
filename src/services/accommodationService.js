export const fetchAccommodations = async (city, accommodationType) => {
  if (!city.trim()) {
    throw new Error("Please enter a city name");
  }

  const baseUrl =
    accommodationType === "hotels"
      ? "http://localhost:8000/get-hotels" 
      : "http://localhost:8000/get-airbnbs";

  const queryParams = new URLSearchParams({ address: city.trim() });
  const response = await fetch(`${baseUrl}?${queryParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`No accommodations found in ${city}`);
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("Received invalid data format");
  }

  return data;
}; 