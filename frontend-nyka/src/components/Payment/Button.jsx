import {React} from "react";
import {Link } from "react-router-dom"
import './button.css'
import greater from '../../Images/greater.svg'
export const Button = ({type})=> {
    return (
        <div>
            <Link to="/confirmation" style={{textDecoration: "none"}}>
             <div className="next1">
                    <button className="btn_checking_pay">{type} </button>
            <img src={greater} alt="" className="great"/>
                </div>
                </Link>
        </div>
    )
}