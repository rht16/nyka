import React from "react";
import "./skin.css";

function BrandLove({ title, product_image }) {
  return (
    <div className="brand-container">
      <div className="brand-show">
        <img src={product_image} alt="skin" />
        <div className="skin-desp-brand">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default BrandLove;
