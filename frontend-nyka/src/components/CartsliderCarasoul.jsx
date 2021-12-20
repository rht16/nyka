

import {React} from "react";
import "./cartsliderCarasoul.css"
export const CartsliderCarasoul=({product_image, product_title,real_price,price_product})=>{
    return (
        <div className="p_deta" >
              <p className="feat">FEATURED</p>
              <img src={product_image} alt="" />
              <div className="prod_nam">
                <p>{ product_title}</p>
              </div>
              <div className="all_pri">
                <div>
                  <p className="mr">
                    MRP:<span>{real_price}</span>
                  </p>
                </div>
                <div>
                  <p className="price_prod">₹{price_product}</p>
                </div>
                <div className="ba">|</div>
                <div>
                  <p className="of">25%</p>
                </div>
              </div>
              <div className="ratin">
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