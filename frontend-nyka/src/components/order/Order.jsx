
import order from "./order_photos/order_confirmed.png"
import "./order.css"
import email_icon from "./order_photos/email-icon.png";
import phone_icon from "./order_photos/phone_icon.png";
import { FinalPayment } from "./Final_payment";

import { IndividualItems } from "./Individual_items"
function OrderConfirmed() {

    let items =  [ {
        "id": 691,
        "product_name": "Biotique Winter Must Haves Combo",
        "product_image": "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44edb09combo16_1.jpg",
        "mrp": "₹669",
        "price": 468,
        "off": "35% Off!",
        "rating_value": "(52155)"
    },
    {
        "id": 222,
        "product_name": "Biotique Winter Must Haves Combo",
        "product_image": "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44edb09combo16_1.jpg",
        "mrp": "₹669",
        "price": 468,
        "off": "35% Off!",
        "rating_value": "(52155)"
    },
    {
        "id": 224,
        "product_name": "Biotique Winter Must Haves Combo",
        "product_image": "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44edb09combo16_1.jpg",
        "mrp": "₹669",
        "price": 468,
        "off": "35% Off!",
        "rating_value": "(52155)"
    },
   
]
    let total = 1225


    return (
        <>
        <div className = "order-main-div">
            <div>
                <img className = "image-64" src ={order} alt = ""/>
            </div>
            <div>
                <h1 className = "order-text-margi" >Order Confirmed!</h1>
            </div>
            <div>
                <div className = "order-font order-text-margi">We are pleased to confirm your order no.<span className = "black-i"> #NYK-90474846-171618 </span> </div>
            </div>
            <div>
                <button className = "amount-butto order-text-margi"> Amount Due: {total}</button>
            </div>
            <div> 
            <p className = "fourteen_pix order-text-margi">CONTINUE SHOPPING</p>
            </div>
            

        </div>

        <div className = "order-second-main-div">

            <div className = "second-order-content">
            <div className = "order-left-div">
                    <div className = "updates final-bold-text final-text-ship"> You will receive updates on</div>
               
                <div className = "email-phone">

                    <div className = "flexi"> 
                        <img  className = "email-imag" src = {email_icon} />
                        <div  className = "margi-le">{" "}Shwetarathod@gmail.com</div>
                    </div>

                    <div className = "flexi">
                        <img className= "phone-imag" src = {phone_icon} />
                        <div className = "margi-le"> {" "}+91- 9378213459</div>
                    </div>


                    </div>

                    <div className= "final-bold-text final-text-ship">
                        IN THIS ORDER
                    </div>

                    <div className = "item-in-bag-div">

                    <IndividualItems data = {items} />
                    
                    </div>
                    </div>



                <div className = "order-right-div">
                <FinalPayment/>
                    </div>

             
                    </div>
            </div>


        </>

    )









    

}

export {OrderConfirmed}