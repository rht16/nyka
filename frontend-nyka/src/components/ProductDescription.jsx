import { React } from "react";

export const ProductDescription = () => {
  return (
    <>
      <p className="product-description">Product Description</p>
      <div className="product-image-description">
        <img src="/image 104.svg" alt="product-image-description" />
        <div className="readmore-description">
          <button className="readmore">Read More</button>
          <img src="/readmore.svg" alt="jgj" className="readmore-img" />
        </div>
      </div>
      <p className="product-description customers">customers also viewed</p>
      <p className="product-description product-Details">product details</p>
    </>
  );
};
