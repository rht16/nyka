

import {React} from "react";
import "./cartsliderCarasoul.css"
export const CartsliderCarasoul=({product_image, product_title,real_price,price_product})=>{
    return (
        <div className="p_details" >
              <p className="features">FEATURED</p>
              <img src={product_image} alt="" />
              <div className="prod_name">
                <p>{ product_title}</p>
              </div>
              <div className="all_price">
                <div>
                  <p className="mrp">
                    MRP:<span>{real_price}</span>
                  </p>
                </div>
                <div>
                  <p className="price_product">₹{price_product}</p>
                </div>
                <div className="bar">|</div>
                <div>
                  <p className="off">25%</p>
                </div>
              </div>
              <div className="rating">
                {/* <Rating /> */}
                <span></span>
              </div>
              <div className="add_to_bag_container">
                <div>
                  <button className="wishlist_img">
                    <img className="wish_img" src="/wishlist.svg" alt="" />
                  </button>
                </div>
                <div>
                  <button
                    // onClick={(e) => {
                    //   handleChange(product);
                    // }}
                    className="add_to_bag"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>
    )
}