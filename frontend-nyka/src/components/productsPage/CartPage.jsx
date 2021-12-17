import React from "react";
import "./cartpage.css";
import {ProductDescription} from "./ProductDescription";
import {ProductDetails} from "./ProductDetails";


export const CartPage = () => {
  return (
      <>
    <div className="product-page">
      <div className="product-div">
        <div className="product-left">
          {/* <img src="/heart.svg"  alt="wishlist"/> */}

          <div className="Product-left-left">
            <div></div>
            <div className="product-2"></div>
            <div className="product-2"> </div>
            <div className="product-2"></div>
            <div className="product-2"></div>
          </div>
          <div className="main-product">
              <img src ="productImage.svg" alt="2222"/>
          </div>
        </div>
        <div className="product-right">
       
<p className="product-details" >Biotique Bio Morning Nectar Visibly Flawless Skin Moisturizer</p>
<img className="star-1" src="/ratingstardark.svg" alt="111" />
<img className="star-2" src="/ratingstardark.svg" alt="222" />
<img className="star-2" src="/ratingstardark.svg" alt="333"/>
<img className="star-2" src="/ratingstardark.svg" alt="12312"/>
<img className="star-2" src="/ratinglight.svg" alt="2121" />
<p className="rating-number">4.4/5</p>
<p className="rating">18713 Ratings & 5843 Reviews</p><p className="rating-1">76q&As</p>
<p className="mrp">MRP:</p> <p className="rupees">&#8377; 199</p>       
<p className="taxes">Inclusive of all taxes</p>

<button className="addBag">add to bag</button>
<div className="line"></div>
<img className="deliveryTag" src="/deliveryTag.svg" alt="deliveryTag"/>
<p className= "deliveryoptions" >delivery options </p>
<div className="pincode">
    <span className="inputpincode"><input type="tel" placeholder="Enter Pincode" name="pin code"   
    maxlength="6" minlength ="6" /></span>
    <button className="checkbutton">CHECK </button>
   
</div>
 <img src="bottomImage.svg" alt="" className="bottomImage" style={{}}/>
        </div>
      </div>
    </div>
    <ProductDescription/>
    <ProductDetails/>
    </>
  );
};
