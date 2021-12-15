import {React} from "react";
import {Login_nav } from '../Login/Login_nav.jsx'
import './payment.css'
export const Payment = ()=>{
    return (
        <div>
            <Login_nav />
            <div className="info">
                <p className="info_para">Please use a digital payment method & help us ensure contactless delivery for your safety</p>
            </div>
        </div>
    )
}