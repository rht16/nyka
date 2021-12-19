import {React} from "react";
import './debit.css'
import credit from '../../Images/credit.svg'
import save from '../../Images/save.svg'
import {Button} from './Button.jsx'
import {Total} from './Total.jsx'
export const Debit =()=>{

    let data = JSON.parse(localStorage.getItem("card"));

    var total = 0;
    var len = 0;
    data.map((prod)=>(
        total+= Number(prod.price),
        len = data.length))
    return (
        <div className="debit_box">
            <div className="debit_first">Debit/Credit</div>
            <div className="debit_bar"></div>
            <input type="text" className="debit_card" placeholder="CARD NUMBER" />
            <p className="expiray">EXPIRY</p>
            <div className="credentials">
            <input type="text" className="date1" placeholder="Month     / Year" />
            <input type="text" className="cvv" placeholder="CVV" />
            <img src={credit} alt="" className="credit"/>
            <p className="last_3_digit">Last 3 Digits at the back of the Card</p>
            </div>
            <div className="save_box">
                {/* <div className="save">
                    <img src={save} alt="" />
                </div> */}
                <input type="checkbox" className="save"/>
                <p>Save this card for future</p>
            </div>
            <Button type={`PAY NOW ${total} `}/>
                {/* <Total /> */}
        </div>
    )
}