import "./order.css";
function FinalPayment({ data, length }) {
  let user_name = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="final-payment-main-div">
        <div className="payment-head final-text-ship">Payment Details</div>
        <div class="final-flex-flex-payment">
          <div className="final-grand-total">
            <div>
              <div className="final-grand-total-text">Grand Total</div>
              <div className="final-bold-text">₹{data}</div>
            </div>
            <div>
              <div className="final-payment-method-text">Payment Method :</div>
              <div className="final-bold-text">Prepaid</div>
            </div>
          </div>

          <div className="final-payment-details-flex">
            <div className="final-flex-payment">
              <div>Bag Total</div>
              <div>{length}</div>
            </div>
            <div className="final-flex-payment">
              <div className="bag-discount">Bag Discount</div>
              <div></div>
            </div>
            <div className="final-flex-payment">
              <div>Sub Total</div>
              <div>₹{data}</div>
            </div>
            <div className="final-flex-payment">
              <div>Shipping Charge</div>
              <div>Free</div>
            </div>
            <div className="final-flex-payment">
              <div>Grand Total</div>
              <div>₹{data}</div>
            </div>
          </div>
        </div>

        <div className="final-bold-text final-text-ship">SHIPPING ADDRESS</div>
        <div className="final-address">
          <div>
            <div>
              <p className="final-bold-text">{user_name.displayName}</p>
              <p>
                {" "}
                37/A, Okaz Shopping Centre, Millat Nagar, Andheri (W), Mumbai -
                400053
              </p>
              <p className="final-bold-text">+91- 9378213459</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { FinalPayment };
