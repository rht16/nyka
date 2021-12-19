import order from "./order_photos/order_confirmed.png";
import "./order.css";
import email_icon from "./order_photos/email-icon.png";
import phone_icon from "./order_photos/phone_icon.png";
import { FinalPayment } from "./Final_payment";
import { Navbar } from "../Homepage/Navbar";
import { Footer } from "../Homepage/Footer";
import { Link } from "react-router-dom";
import { IndividualItems } from "./Individual_items";
function OrderConfirmed() {
  let user_name = JSON.parse(localStorage.getItem("user"));
  console.log("user" + user_name.email);

  let data = JSON.parse(localStorage.getItem("card"));

  var total = 0;
  var len = 0;
  data.map((prod) => {
    total += Number(prod.price);
    len = data.length;
  });

  return (
    <>
      <Navbar />
      <div className="order-main-div">
        <div>
          <img className="image-64" src={order} alt="" />
        </div>
        <div>
          <h1 className="order-text-margi">Order Confirmed!</h1>
        </div>
        <div>
          <div className="order-font order-text-margi">
            We are pleased to confirm your order no.
            <span className="black-i"> #NYK-90474846-171618 </span>{" "}
          </div>
        </div>

        <div>
          <button className="amount-butto order-text-margi">
            {" "}
            Amount Paid: ₹{total}
          </button>
        </div>

        <div>
          <Link to="/" style={{ textDecoration: "none", color: "pink" }}>
            <p className="fourteen_pix order-text-margi">CONTINUE SHOPPING</p>
          </Link>
        </div>
      </div>

      <div className="order-second-main-div">
        <div className="second-order-content">
          <div className="order-left-div">
            <div className="updates final-bold-text final-text-ship">
              {" "}
              You will receive updates on
            </div>

            <div className="email-phone">
              <div className="flexi">
                <img className="email-imag" src={email_icon} />
                <div className="margi-le">{user_name.email}</div>
              </div>

              <div className="flexi">
                <img className="phone-imag" src={phone_icon} />
                <div className="margi-le"> +91- 9378213459</div>
              </div>
            </div>

            <div className="final-bold-text final-text-ship">IN THIS ORDER</div>

            <div className="item-in-bag-div">
              <IndividualItems />
            </div>
          </div>

          <div className="order-right-div">
            <FinalPayment data={total} length={len} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export { OrderConfirmed };
