import { React } from "react";
import { RatingCard } from "./RatingCard";
export const ProductDetails = () => {
  return (
    <>
      <div className="product-rating">
        <img src="/RATINGS & REVIEWS.svg" alt="ratingreviews" />
        <p>product q&a</p>
      </div>
      <div className="ratingDetails">
      <img src="/Frame 327.svg" alt="rating-details"/>
      </div>
      <div className="ratingDetails">
       <img src="/Frame 326.svg" alt="customer-rating"/>
      </div>
      <div className="customerRating">
      <img src="/Frame 387.svg" alt ="customer-rating"/>
      </div>
    </>
  );
};
