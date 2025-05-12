export const getStarRating = (review_score, review_count, accommodationType) => {
  if (review_count === "No reviews yet") return <span className="noRating">No ratings yet</span>;
  const stars = [];
  if (accommodationType === "hotels") review_score = review_score / 2;

  const fullStars = Math.floor(review_score);
  const hasHalfStar = review_score % 1 >= 0.5;
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className="star full">
          ★
        </span>
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <span key={i} className="star half">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="star empty">
          ☆
        </span>
      );
    }
  }
  
  return (
    <div className="star-rating">
      {stars} <span className="rating-number">({review_score})</span>
    </div>
  );
};

export const formatPrice = (price, currencyForm) => {
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

export const generateBookingLink = (page_id, accommodationType) => {
  if (!page_id) {
    console.error("Page ID is not available");
    return;
  }

  let baseUrl = "https://www.booking.com/hotel/pk/";
  if (accommodationType === "airbnbs") {
    baseUrl = "https://www.airbnb.com/rooms/";
  }

  const pageIdString = String(page_id);
  console.log("Opening link:", baseUrl + pageIdString);
  return window.open(baseUrl + pageIdString, "_blank");
}; 