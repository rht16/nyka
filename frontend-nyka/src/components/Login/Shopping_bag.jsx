import { ItemInBag } from "./Item_in_bag"
import {AmountDetails} from "./Amount_details"
import leftarrow from "./bag_photos/left_arro.png"
import add_icon from "./bag_photos/add_item_icon.png"
import "./Shopping_bag.css"


import downarrow from "./bag_photos/down_arrow.png"
import deleteicon from "./bag_photos/delete_icon.png"
function ShoppingBag(){

    let data = JSON.parse(localStorage.getItem("card"));

var total = 0;
var len = 0;
    
    

    return (
        <>
        
         {data.map((prod)=>(
                total+= Number(prod.price),
                len = data.length,
        <div className = "main-div-shopping-bag_login">
             <div className = "individual-items_login">
        <div> 
            <div className = "parent-container_login">
                <div className = "children-container_login">
                <div className = "image-container_login"><img src = {prod.product_image} />
                    
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

          <div className="shopping_bag_loginpage">
        <div className = "head-img">
           <div><img className = "left-arrow" src = {leftarrow}/>
           </div>
        <div className = "bag-heading">  Shopping Bag ({len})</div>
        </div>
        </div>
          <div className="cart_details_main_div">
          <div className="cart_details_login">
                <div className="total">
                    <p className="cart_value">Cart value</p>
                    <p className="money">{len}</p>
                </div>

                <div className="total">
                    <p className="cart_value">Shipping cost</p>
                    <p className="money_free">free</p>
                </div>


                <div className="total">
                    <p className="cart_value_green">Discount</p>
                    <p className="money_free">0</p>
                </div>
                <div className="bar"></div>
                <div className="total">
                    <p className="cart_value">Grand Total</p>
                    <p className="money">{total}</p>
                </div>
                <div className="bar"></div>
            </div>
            </div>
        </>

    )
}

export {ShoppingBag}