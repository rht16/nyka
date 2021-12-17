import {React} from "react";
// import  "./productdetails.css"
import {RatingCard} from "./RatingCard";
export const ProductDetails=()=>{

return(
    <>
        <div className="product-rating">
        <img src="/RATINGS & REVIEWS.svg" alt="rating&reviews"/>
        <p>product q&a</p>
        </div>
        <div className="ratingDetails">
<p className="bold-rating">4.4</p><span><p className="bold-rating-1">/5</p></span>
<p className="overall-rating">Overall Rating </p>
<p className="verified-ratings">18713 verified ratings</p>
<div className="rating-line"></div>
<p className="reward-points">Write a review an win 100 reward points</p>
<button className="write-review">Write Review</button>
        </div>
        <div className="ratingDetails">
<p className="customersphoto">photos from customers</p>
<div>

</div>

        </div>
        <div className="customerRating">
        <p className="review">most useful review</p>
        <RatingCard/>

        </div>
    </>
)

}