import {React, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CartsliderCarasoul} from "./CartsliderCarasoul"

import "./cartslider.css";

export default class CartSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: 3200,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
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
      <div style={{marginLeft:"120px"}}>
        <Slider {...settings} className="mainslider">
          <div className="slider-1">
            <div className="sliderImage">
            <div>   <CartsliderCarasoul product_image="/5cd40fbbiot_arbw_1.svg"  
            product_title="Biotique Bio Apricot Refreshing Body Wash"
real_price='250'  price_product='180' 
/></div>
            </div>
          </div>
          <div className="slider-1">
            <div className="sliderImage">
            <div>   <CartsliderCarasoul product_image="/8904317300827_1.svg"  
            product_title="Biotique Herbal Hair Color" price_product='250' 

            /></div>
            </div>
          </div>
          <div className="slider-1">
            <div className="sliderImage">
            <div>   <CartsliderCarasoul product_image="/f9440fb8906009450070_1 (1).svg"  
            product_title="Biotique Bio White Advanced Fairness Face Wash"
  price_product='65'/>
  </div>
            </div>
          </div>
          <div className="slider-1">
            <div className="sliderImage">
            <div>   <CartsliderCarasoul product_image="/8904317300827_1.svg"  
            product_title="Biotique Herbal Hair Color" price_product='250' 

            /></div>
            </div>
          </div>
         
        </Slider>
      </div>
    );
  }
}