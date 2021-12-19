import react from 'react';
import './cart.css';

 export const Cart = ()=>{
    let data = JSON.parse(localStorage.getItem("card"));

var total = 0;
var len = 0;
    return (
        <>
        {data.map((prod)=>(
            total+= Number(prod.price),
            len = data.length,
        <div className="cart_cont">
            <div className="first_cart">
                <p className="Items">{len}</p>
                <p className="edit">Edit</p>
            </div>
            <div className="cart_details">
                <div className="total">
                    <p className="cart_value">Cart value</p>
                    <p className="money">{total}</p>
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
            <div>
               
            </div>
        </div>
          ))}
          </>
    )
}