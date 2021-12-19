import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import carousel_1 from "./hair_page_photos/carousel_good_hair_everyday.png"
import carousel_2 from "./hair_page_photos/carousle_loreal_prolonger.png" 
import carousel_3 from "./hair_page_photos/carousel_godrej_professional.png"
import carousel_4 from "./hair_page_photos/carousel_haircare_essentials.png"

import "./hmulti.css";

export default class MultipleItems extends Component {
  render() {
    var settings = {
      dots:true,
      infinite: true,
      autoplay: 3200,
      slidesToShow: 1,
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
      <div>
        <Slider {...settings} className="hslider_multi">
          <div className="hslider1">
            <div className="hsliderImage">
              <img
                src={carousel_1}
                alt="Logo"
                className="hslider-images-slider1"
              />
            </div>
          </div>
          <div className="hslider1">
            <div className="hsliderImage">
              <img
                src={carousel_2}
                alt="Logo"
                className="hslider-images-slider1"
              />
            </div>
          </div>
          <div className="hslider1">
            <div className="hsliderImage">
              <img
                src={carousel_3}
                alt="Logo"
                className="hslider-images-slider1"
              />
            </div>
          </div>
          <div className="hslider1">
            <div className="hsliderImage">
              <img
                src={carousel_4}
                alt="Logo"
                className="hslider-images-slider1"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
