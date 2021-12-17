import {React} from "react";
import './button.css'
import greater from '../../Images/greater.svg'
export const Button = ({type})=> {
    return (
        <div>
             <div className="next">
                    <button className="btn_checking">{type} </button>
            <img src={greater} alt="" />
                </div>
        </div>
    )
}