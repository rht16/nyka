import react from 'react';
import './cart.css';
 export const Cart = ()=>{
    return (
        <div className="cart_cont">
            <div className="first_cart">
                <p className="Items">3 Items</p>
                <p className="edit">Edit</p>
            </div>
            <div className="cart_details">
                <div className="total">
                    <p className="cart_value">Cart value</p>
                    <p className="money">Rupees</p>
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
                    <p className="money">Rupees</p>
                </div>
                <div className="bar"></div>
            </div>
        </div>
    )
}