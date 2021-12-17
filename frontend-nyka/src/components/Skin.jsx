import React from "react";
import "./skin.css";
import Slider from "react-slick";
import img1 from "./Images/skin.svg";
import img2 from "./Images/skinbn2.svg";
import img3 from "./Images/skinbn3.svg";
import img4 from "./Images/skinbn4.svg";
import img5 from "./Images/skinbn5.svg";
import img6 from "./Images/skinbn6.svg";
import prodImg1 from "./Images/image2.svg";
import prodImg2 from "./Images/image3.svg";
import prodImg3 from "./Images/image4.svg";
import prodImg4 from "./Images/image5.svg";
import prodImg5 from "./Images/image6.svg";
import prodImg6 from "./Images/image7.svg";
import BrandLove from "./BrandLove";
import catImg1 from "./Images/cate1.svg";
import catImg2 from "./Images/cate2.svg";
import catImg3 from "./Images/cate3.svg";
import catImg4 from "./Images/cate4.svg";
import catImg5 from "./Images/cate5.svg";
import catImg6 from "./Images/cate6.svg";
import catImg7 from "./Images/cate7.svg";
import catImg8 from "./Images/cate8.svg";
import allskin from "./Images/shopallskin.svg";
import skinType1 from "./Images/skinty1.svg";
import skinType2 from "./Images/skinty2.svg";
import skinType3 from "./Images/skinty3.svg";
import skinType4 from "./Images/skinty4.svg";
import MultipleItems from "./MultipleItems";
import only1 from "./Images/only1.svg";
import only2 from "./Images/only2.svg";
import sel1 from "./Images/sel1.svg";
import sel2 from "./Images/sel2.svg";
import sel3 from "./Images/sel3.svg";
import sel4 from "./Images/sel4.svg";
import SkinCare from "./SkinCare";
import brand1 from "./Images/brand1.svg";
import brand2 from "./Images/brand2.svg";
import brand3 from "./Images/brand3.svg";
import brand4 from "./Images/brand4.svg";
import brand5 from "./Images/brand5.svg";
import brand6 from "./Images/brand6.svg";
import brand7 from "./Images/brand7.svg";
import brand8 from "./Images/brand8.svg";
import now1 from "./Images/now1.svg";
import now2 from "./Images/now2.svg";
import now3 from "./Images/now3.svg";
import now4 from "./Images/now4.svg";
import beauty1 from "./Images/beauty1.svg";
import beauty2 from "./Images/beauty2.svg";
import beauty3 from "./Images/beauty3.svg";

function Skin() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="slider_image" src={img1} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={img2} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={img3} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={img4} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={img5} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={img6} alt="jdslkjf" />
        </div>
      </Slider>
      <div></div>
      <div className="brand-heading-love">
        <h4>BRAND YOU WILL LOVE</h4>
      </div>
      <div className="brand-tag">
        <BrandLove title="Upto 20% Off " product_image={prodImg1} />
        <BrandLove title="Upto 20% Off " product_image={prodImg2} />
        <BrandLove title="Upto 25% Off " product_image={prodImg3} />
        <BrandLove title="Upto 20% Off " product_image={prodImg4} />
      </div>
      <div className="brand-tag">
        <BrandLove title="Upto 20% Off " product_image={prodImg5} />
        <BrandLove title="Upto 50% Off " product_image={prodImg6} />
      </div>

      <div></div>
      <div className="brand-heading-love">
        <h4>SHOP BY CATEGORY</h4>
      </div>
      <div className="category1-images">
        <div>
          <img src={catImg1} alt="category" />
        </div>
        <div>
          <img src={catImg2} alt="category" />
        </div>

        <div>
          <img src={catImg3} alt="category" />
        </div>

        <div>
          <img src={catImg4} alt="category" />
        </div>
        <div>
          <img src={catImg5} alt="category" />
        </div>
        <div>
          <img src={catImg6} alt="category" />
        </div>
        <div>
          <img src={catImg7} alt="category" />
        </div>
        <div>
          <img src={catImg8} alt="category" />
        </div>
      </div>
      <div className="allskin">
        <img src={allskin} alt="skin" />
      </div>

      <div className="brand-heading-love">
        <h4>SHOP BY SKIN TYPE</h4>
      </div>
      <div className="skin_type_images">
        <div>
          <img src={skinType1} alt="skintype" />
        </div>
        <div>
          <img src={skinType2} alt="skintype" />
        </div>
        <div>
          <img src={skinType3} alt="skintype" />
        </div>
        <div>
          <img src={skinType4} alt="skintype" />
        </div>
      </div>
      <div className="brand-heading-love">
        <h4>LUXE INDULENCES</h4>
      </div>
      <div>
        <MultipleItems />
      </div>

      <div className="brand-heading-love">
        <h4>ONLY AT NYKAA</h4>
      </div>
      <div className="only-at-nykaa">
        <img src={only1} alt="" />
        <img src={only2} alt="" />
      </div>

      <div className="brand-heading-love">
        <h4>BUDGET BUYS</h4>
      </div>
      <div className="skin_type_images">
        <div>
          <img src={sel1} alt="skintype" />
        </div>
        <div>
          <img src={sel2} alt="skintype" />
        </div>
        <div>
          <img src={sel3} alt="skintype" />
        </div>
        <div>
          <img src={sel4} alt="skintype" />
        </div>
      </div>
      <div className="brand-heading-love">
        <h4>SHOP BY SKIN CONCERN</h4>
      </div>
      <div>
        <SkinCare />
      </div>
      <div className="brand-heading-love">
        <h4>FEATURED BRANDS</h4>
      </div>
      <div className="featured-brand">
        <div>
          <img src={brand1} alt="" />
        </div>
        <div>
          <img src={brand2} alt="" />
        </div>
        <div>
          <img src={brand3} alt="" />
        </div>
        <div>
          <img src={brand4} alt="" />
        </div>
        <div>
          <img src={brand5} alt="" />
        </div>
      </div>
      <div></div>
      <div className="feature-brand2">
        <div>
          <img src={brand6} alt="" />
        </div>
        <div>
          <img src={brand7} alt="" />
        </div>
        <div>
          <img src={brand8} alt="" />
        </div>
      </div>
      <div className="brand-heading-love">
        <h4>TRENDING NOW</h4>
      </div>
      <div className="trending-now">
        <div>
          <img src={now1} alt="" />
        </div>
        <div>
          <img src={now2} alt="" />
        </div>
        <div>
          <img src={now3} alt="" />
        </div>
        <div>
          <img src={now4} alt="" />
        </div>
      </div>
      <div className="brand-heading-love">
        <h4>BEAUTY ADVICE</h4>
      </div>
      <div className="only-at-nykaa">
        <img src={beauty1} alt="" />
        <img src={beauty2} alt="" />
        <img src={beauty3} alt="" />
      </div>
      <div className="allskin">
        <img src={allskin} alt="skin" />
      </div>
    </div>
  );
}

export default Skin;
