import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import luxeImg1 from "./Images/luxe1.svg";
import luxeImg2 from "./Images/luxe2.svg";
import luxeImg3 from "./Images/luxe3.svg";
import luxeImg4 from "./Images/luxe4.svg";
import "./multi.css";

export default class MultipleItems extends Component {
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
      <div>
        <Slider {...settings} className="slider_multi">
          <div className="slider1">
            <div className="sliderImage">
              <img
                src={luxeImg1}
                alt="Logo"
                className="slider-images-slider1"
              />
            </div>
          </div>
          <div className="slider1">
            <div className="sliderImage">
              <img
                src={luxeImg2}
                alt="Logo"
                className="slider-images-slider1"
              />
            </div>
          </div>
          <div className="slider1">
            <div className="sliderImage">
              <img
                src={luxeImg3}
                alt="Logo"
                className="slider-images-slider1"
              />
            </div>
          </div>
          <div className="slider1">
            <div className="sliderImage">
              <img
                src={luxeImg4}
                alt="Logo"
                className="slider-images-slider1"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
