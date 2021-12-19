import React from "react";
import "./cartpage.css";
import { ProductDescription } from "./ProductDescription";
import { ProductDetails } from "./ProductDetails";
import easyreturn from "../components/Images/easyreturnpolicy.svg";
import Rating from "./Rating";
import locationImg from "../components/Images/locationnn.svg";
import {Navbar} from "../components/Homepage/Navbar"
import {ShoppingBag} from "./Shopping_bag/Shopping_bag"
export const CartPage = () => {
  var getProduct = [];
  var details_from_local = []
  getProduct.push(JSON.parse(localStorage.getItem("productsItems")));
  details_from_local.push(JSON.parse(localStorage.getItem("card")));
  // console.log(details_from_local);
  // console.log(JSON.parse(localStorage.getItem("card")));
const handleAddToCart = (data) => {
  if (localStorage.getItem("card") === null) {
    localStorage.setItem("card", JSON.stringify([]));
  }

  let card_data = JSON.parse(localStorage.getItem("card"));
  card_data.push(data);
  localStorage.setItem("card", JSON.stringify(card_data));
}
  return (
    <>
    <Navbar />
      <div className="product-page">
        {getProduct.map((p) => (
          <div className="product-div">
            <div className="product-left">
              <div className="Product-left-left">
                <div className="product-2">
                  <img src={p.product_image} alt="" width="35px" />
                </div>
                <div className="product-2">
                  <img src={p.product_image} alt="" width="35px" />
                </div>
                <div className="product-2">
                  <img src={p.product_image} alt="" width="35px" />
                </div>
                <div className="product-2">
                  <img src={p.product_image} alt="" width="35px" />
                </div>
                <div className="product-2">
                  <img src={p.product_image} alt="" width="35px" />
                </div>
              </div>
              <div className="main-product">
                <img
                  src={p.product_image}
                  alt=""
                  width="310px"
                  style={{ padding: "15px" }}
                />
              </div>
            </div>
            <div className="product-right">
              <p className="product-details">
                Biotique Bio Morning Nectar Visibly Flawless Skin Moisturizer
              </p>
              <div className="rate_me">
                <p style={{ marginTop: "4px", marginLeft: "-21px" }}>
                  <Rating />
                </p>
                <p style={{ marginLeft: "-13px" }}>4.5/5</p>
                <p>{p.rating_value}Ratings & 5843 Reviews</p>
                <p>76q&As</p>
              </div>
              <p className="mrp">MRP:</p>{" "}
              <p className="rupees">&#8377;{p.price}</p>
              <p className="taxes">Inclusive of all taxes</p>
              <button className="addBag" onClick={(el)=>{handleAddToCart(getProduct)}}>add to bag</button>
              <div className="line"></div>
              <img className="deliveryTag" src={locationImg} alt="delivery" />
              <p className="deliveryoptions">delivery options </p>
              <div className="pincode">
                <span className="inputpincode">
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    name="pin code"
                  />
                </span>
                <button className="checkbutton">CHECK </button>
              </div>
              <img src={easyreturn} alt="" className="bottomImage" />
            </div>
          </div>
        ))}
        ;
      </div>
      <ProductDescription />
      <ProductDetails />
      {/* <ShoppingBag /> */}
    </>
  );
};
