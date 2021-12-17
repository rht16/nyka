import React from "react";
import './login_main.css'
import right from '../../Images/right.svg'
import facebook from '../../Images/facebook.svg'
import google from '../../Images/google.svg'
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
export const Login_main = ()=>{
    const [error, setError] = useState("");
    const [check, setCheck] = useState({visiblity:"hidden"});
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        
        navigate("/payment");
      } catch (error) {
        console.log(error.message);
      }
    };


    function changeBackground() {
      
        // setCheck(  e.target.style.visiblity = "visible")
        console.log("yes");

      }
    
    return (
        <div className="container">
            <div className="first_box12">
                <div className="first_box1">Login/Regiseter</div>
            </div>
            <div className="second_login">
                <div className="second_login_box1" onClick={changeBackground}>Login/Register</div>
                <div className="second_login_bar"></div>
                <div className="right">
                    <div >
                        <img src={right} alt="" className="right_img"/>
                    </div>
                    <div className="right_txt">Get Reward Points on new registration</div>
                </div>

                <div className="right">
                    <div >
                        <img src={right} alt="" className="right_img"/>
                    </div>
                    <div className="right_txt">Redeem your Coupons & Reward Points</div>
                </div>
                <p className="continue">Continue with Social Login</p>

                <div className="social">
                    <div className="facebook">
                        <img src={facebook} alt="" />
                       
                    </div>
                    <div className="facebook">
                        <img src={google} alt=""  onClick={handleGoogleSignIn}/>
                    </div>
                </div>
                <p className="number">Or Enter Email-Id Or Phone Number</p>
                {/* <div className="second_login_bar">
                    <input type="text" />
                </div> */}
                 <input type="text" className="number_inp"/>
                <div className="next">
                    <button>Next </button>
                </div>
                <p className="guest">Checkout as guest</p>
                <input type="text" className="number_inp1"/>
                <p className="no_more">I do not want any more benefits from Nykaa</p>
                <div className="last">
                    <h5 className="last_para">CONTINUE AS GUEST</h5>
                </div>
            </div>
        </div>
    )
}