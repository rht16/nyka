import {React} from "react";
import {Login_nav} from "./Login_nav"
import {Login_main} from "./Login_main"
import { Cart } from "./cart";
import './login_main.css'
import {Button} from "../Payment/Button"

 export const Login=()=>{
  

    return(

        <div className="main-box">
          <Login_nav id="check"/>
          <br />
          <Login_main />
          <Cart />
     
        </div>
    )

}





