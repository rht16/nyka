import { ItemInBag } from "./Item_in_bag"
import {AmountDetails} from "./Amount_details"
import leftarrow from "./bag_photos/left_arro.png"
import add_icon from "./bag_photos/add_item_icon.png"
import downarrow from "./bag_photos/down_arrow.png"
import deleteicon from "./bag_photos/delete_icon.png";
import "./Shopping_bag.css"
import{useState , useEffect} from "react";
function ShoppingBag(){
   
       
      
      

    let data = JSON.parse(localStorage.getItem("card"));

var total = 0;
var len = 0;
    return (
        <> 
          {data.map((prod)=>(
                total+= Number(prod.price),
                len = data.length,
        <div className = "main-div-shopping-bag1">,
        
     
                  <div className = "individual-items">
                 
            
        <div > 
            <div className = "parent-container">
                <div className = "children-container">
                <div className = "image-container"><img src = {prod.product_image} />
                    
                </div>
                <div className = "name-container">
                    <p>{prod.product_name}</p>

                    <p>1200ml</p>


                </div>
                < div className = "icon-container">
                    <img className = "delete-icon" src = {deleteicon} />
                </div>
                <hr/>
                </div>
               

                <div className="price-quantity-container">
                   <div className ="marg-left">Quantity : {1} <img className = "down-arrow" src = {downarrow} / ></div>
                   <div className = "mrp fw-text">{prod.price}</div> 
                   
                </div>

            </div>
       
       
        </div>
        </div>
       
        </div>
        ))}
        <div className="total_shopping_val">
        <div className = "head-img">
        <div><img className = "left-arrow" src = {leftarrow}/></div>
          <div className = "bag-heading">  Shopping Bag ({len})</div>
         </div> 
        </div>
        <div>
        

    <div className = "payment-details-flex">
        <div className = "payment-heading" > Payment details</div>
        <div className = "flex-payment">
            <div>Bag Total</div>
            <div>{len}</div>
        </div>
        <div className = "flex-payment">
            <div className ="bag-discount">Bag Discount</div>
            <div>0</div>
        </div>
        <div className = "flex-payment">
            <div>Sub Total</div>
            <div>{total}</div>
        </div>
        <div className = "flex-payment">
            <div>Shipping Charge</div>
            <div>Free</div>
        </div>
        <div className = "flex-payment">
            <div >Grand Total</div>
            <div>{total}</div>
        </div>
        <div className = "coupon-box">
            <div>Have a Coupon?</div>
            <div className = "pink-text"> View Coupons</div>
        </div>
       
    </div>


</div>
        </>

    )
}

export {ShoppingBag}