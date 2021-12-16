import {React} from "react";

import "./navbar.css"

const Navbar=()=>{

    return (
        <>
        <div className="main-navbar">
<div className="upper-navbar">
    
        <p className="top-p">BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</p>
        <div className="mobile-app"><img src="/Vector.svg" alt="mobile app"/></div>
           <p className="get-app">GET APP</p>
           <p className="line"></p>
           <div className="nav"><img src="/nav2.svg" alt="mobile app"/></div>
           <p className="get-app">Store & Events</p>
           <p className="line"></p>
           <div className="nav"><img src="/cart.svg" alt="mobile app"/></div>
           <p className="get-app">Gift Card</p>
           <p className="line"></p>
           <div className="nav"><img src="/question.svg" alt="mobile app"/></div>
           <p className="get-app">Help</p>

</div>
 
<ul>
    <li><img className="nykka" src="/nykka.svg"/></li>
    <li>categroies</li>
    <li>Brands</li>
    <li>Nykaa fashion</li>
    <li>Beauty advice</li>
    <li>nykka network</li>
   <input type="text" placeholder="Search on Nykaa"  className="search"/>
                   
                    <li><img src="/wishlist.svg"/></li>
                    <li><img src="/profile.svg"/></li>
                    <p>ACCOUNT</p>
                    <li><img src="/usercart.svg"/></li>
</ul>
<div className="lower-nav">
<ul>
    <li>Make up</li>
    <li>Hair</li>
    <li>Skin</li>
    <li>Appliances</li>
    <li>Personal Care</li>
    <li>Natural </li>
    <li>Mom & Baby</li>
    <li>Men</li>
    <li>Fragrance</li>
    <li>Luxe</li>
    <li className="offer">OFFERS</li>
    
</ul>

</div>
 



 </div>
 
 
        



        
       
        
        </>
    )
}


export {Navbar}