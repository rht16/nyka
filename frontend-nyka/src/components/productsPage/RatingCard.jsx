import {React} from "react";
import "./ratingcard.css"
export const RatingCard=()=>{

return (
<>
    <div className="customer-rating">
<img className="user-picture" src="/userPicutre.svg" alt="user-picture"/>
    <p className="username">Anshul Gupta</p>
    <img className="userverified" src="/userverified.svg" alt="userverified"/>
    <p className="verified-buyers">Verified Buyers</p>
    <img className="star" src="/Frame 390.svg" alt="5star"/>
    <p className="date">24/11/2021</p>
    <p className="customer-review-1">"Strong but lovely fragrance type formula"</p>
    <p className="customer-review-2"> Good product suits all skin type</p>
    <div className="customer-images">
        <div ><img src="" alt="12"/></div>
        <div ><img src="" alt="12"/></div>
        <div><img src="" alt="12"/></div>
        <div ><img src="" alt="12"/></div>
        <div ><img src ="" alt="12"/></div>
    </div>
    
    <button className="button-helpful"><span></span>HELPFUL</button>
    <p className="helpful">5 People Found This Helpul</p>
    <hr></hr>
    </div>

</> 


)



}