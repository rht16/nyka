import {React} from "react";
import {Login_nav} from "./Login_nav"
import {Login_main} from "./Login_main"
import { Cart } from "./cart";
import './login_main.css'
import {Button} from "../Payment/Button"
import {ShoppingBag} from '../Login/Shopping_bag'

 export const Login=()=>{
  

    return(

        <div className="main-box">
          <Login_nav id="check"/>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between',}}>
          <Login_main />
          {/* <ShoppingBag /> */}
         <div style={{marginRight: '190px', marginTop: '92px', height: '300px'}}>
          <ShoppingBag /> 
          </div>
          </div>
    
        </div>
    )

}





