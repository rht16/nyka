import {React} from "react";
import './login_nav.css';
import logo from '../../Images/logo.svg'


 export const Login_nav=()=>{
    return(

        <div >
          <div className="nav_container">
            <div className="first_box">
                <div>
                <img src={logo} alt='logo' />
                </div>
              
            </div>
            <div className="second_box_line"></div>
            <div className="second_box">
                <p>1 - </p>
                <p>LOGIN</p>
            </div>
            <div className="second_box">
            <p>2 - </p>
                <p> ADRESS</p>
            </div>
            <div className="second_box">
            <p>2 - </p>
                <p> PAYMENT</p>

            </div>
            <div className="first_box"></div>
          </div>
        </div>
    )

}



