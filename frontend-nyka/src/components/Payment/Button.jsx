import {React} from "react";
import './button.css'
import greater from '../../Images/greater.svg'
export const Button = ({type})=> {
    return (
        <div>
             <div className="next1">
                    <button className="btn_checking">{type} </button>
            <img src={greater} alt="" width="10px" style={{marginRight:"132px"}}/>
                </div>
        </div>
    )
}