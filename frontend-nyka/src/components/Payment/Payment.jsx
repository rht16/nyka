import {React} from "react";
import {Login_nav } from '../Login/Login_nav.jsx'
import './payment.css'
import info from '../../Images/info.svg'
import {Method} from './Method.jsx'
import {Debit} from './Debit.jsx'
export const Payment = ()=>{
    return (
        <div>
            <Login_nav />
            <div className="info">
                <img src={info} alt="" />
                <p className="info_para">Please use a digital payment method & help us ensure contactless delivery for your safety</p>
            </div>
            <div className="method">CHOOSE PAYMENT METHOD</div>
            <Method />
            <Debit />
        </div>
    )
}