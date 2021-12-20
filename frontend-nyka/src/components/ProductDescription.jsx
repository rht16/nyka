import { React } from "react";
import CartSlider from "./CartSlider"
export const ProductDescription = () => {
  return (
    <>
    <p className="product-description customer-also-bought"> Customer also bought</p>
<CartSlider style={{marginLeft:"150px"}}/>
      <p className="product-description">Product Description</p>
      <div className="product-image-description">
        <img src="/image 104.svg" alt="product-image-description" />
        <div className="readmore-description">
          <button className="readmore">Read More</button>
          <img src="/readmore.svg" alt="jgj" className="readmore-img" />
        </div>
      </div>
      <p className="product-description customers">customers also viewed</p>
      <CartSlider style={{marginLeft:"150px"}}/>
      <p className="product-description product-Details">product details</p>
    </>
  );
};
