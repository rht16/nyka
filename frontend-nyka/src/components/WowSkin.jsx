import React, { useState } from "react";
import {Link} from "react-router-dom"
import { productData } from "../data/data.js";
import bqbanner from "../components/Images/Biotiquebanner.svg";
import "./wowskin.css";
import Rating from "./Rating.jsx";
import { IoIosArrowForward } from "react-icons/all";
import PriceDropdown from "./PriceDropdown.jsx";
import sortImg from "../components/Images/sortoptions.svg";
import SortBy from "../components/Images/SortBy.svg";
import pageinfo from "../components/Images/pagination.svg";
import wishlistImg from "../components/Images/wishlist.svg";
import {Navbar} from "../components/Homepage/Navbar"



function WowSkin() {
  const [isTrue, setIstrue] = useState(false);
  //console.log(isTrue);
  const handleChange = (data) => {
    //console.log(data);
    setIstrue(true);
    //localStorage.setItem("productsItems", JSON.stringify(data));
    if (localStorage.getItem("card") === null) {
      localStorage.setItem("card", JSON.stringify([]));
    }

    let card_data = JSON.parse(localStorage.getItem("card"));
    card_data.push(data);
    localStorage.setItem("card", JSON.stringify(card_data));
  };

  const handleCart=(data)=>{
    localStorage.setItem("productsItems", JSON.stringify(data));
    console.log(data);
  }

  return (

    <div style={{ width: "100%" }}>
      <Navbar />
      <div className="list-home-brand">
        <div>Home</div>
        <div>
          <IoIosArrowForward />
        </div>
        <div>Brand</div>
        <div>
          <IoIosArrowForward />
        </div>
        <div>Biotique</div>
      </div>
      <div className="botique-heading">
        <h4>Biotique Herbal product Collection (365)</h4>
      </div>
      <div className="boutique-banner">
        <img className="bqImage" src={bqbanner} alt="" />
      </div>
      <div className="products-heading">
        <h4>All Products</h4>
      </div>
      <div className="product_container">
        <div className="left_container">
          <img src={SortBy} alt="SortBy" className="top_sort" />
          <PriceDropdown label_name={sortImg} />
        </div>
        <div className="right_container">
          {productData.map((product, id) => (
            <div className="p_details" key={id} >
              <p className="features">FEATURED</p>
              <Link to="/details">
              <img src={product.product_image} alt="" onClick={(el)=>handleCart(product)}/>
              </Link>
              <div className="prod_name">
                <p>{product.product_name}</p>
              </div>
              <div className="all_price">
                <div>
                  <p className="mrp_pooja">
                    MRP:<span>{product.mrp}</span>
                  </p>
                </div>
                <div>
                  <p className="price_product">₹{product.price}</p>
                </div>
                <div className="bar_1">|</div>
                <div>
                  <p className="off">{product.off}</p>
                </div>
              </div>
              <div className="rating_pooja">
                <Rating />
                <span>{product.rating_value}</span>
              </div>
              <div className="add_to_bag_container">
                <div>
                  <button className="wishlist_img">
                    <img className="wish_img" src={wishlistImg} alt="" />
                  </button>
                </div>
                <div>
                  {!isTrue && product.id ? (
                    <button
                      onClick={(e) => {
                        handleChange(product);
                      }}
                      className="add_to_bag"
                    >
                      ADD TO BAG
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        handleChange(product);
                      }}
                      className="add_to_bag"
                    >
                      ADDED TO BAG
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-pagination">
        <div>
          <p className="pagination_info">Page 1 of 19</p>
        </div>
        <div>
          <img src={pageinfo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WowSkin;
