import { React } from "react";
import "./method.css";
export const Method = () => {
  return (
    <div>
      <div className="method_box">
        <div className="method_first">
          <p>Credit/Debit</p>
        </div>
        <div className="method_cards">
          <p>UPI</p>
        </div>
        <div className="method_cards">
          <p>GooglePay</p>{" "}
        </div>
        <div className="method_cards">
          <p>Net Banking</p>
        </div>
        <div className="method_cards">
          <p>Mobile Wallets</p>
        </div>
        <div className="method_cards">
          <p>Cash on Delivery</p>
        </div>

        <div className="method_cards">
          <p>Gift cards</p>
        </div>
      </div>
    </div>
  );
};
