import React from "react";
import "./wowskin.css";

function PriceDropdown({ label_name }) {
  return (
    <div className="price_dropdown">
      <img src={label_name} alt="" />
    </div>
  );
}

export default PriceDropdown;
