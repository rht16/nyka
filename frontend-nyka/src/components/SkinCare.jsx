import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import careImg1 from "./Images/care1.svg";
import careImg2 from "./Images/care2.svg";
import careImg3 from "./Images/care3.svg";
import "./multi.css";




export default class SkinCare extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: 3000,
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
                src={careImg1}
                alt="Logo"
                className="slider-images-slider1"
              />
            </div>
          </div>
          <div className="slider1">
            <div className="sliderImage">
              <img
                src={careImg2}
                alt="Logo"
                className="slider-images-slider1"
              />
            </div>
          </div>
          <div className="slider1">
            <div className="sliderImage">
              <img
                src={careImg3}
                alt="Logo"
                className="slider-images-slider1"
              />
            </div>
          </div>
          <div className="slider1">
            <div className="sliderImage">
              <img
                src={careImg1}
                alt="Logo"
                className="slider-images-slider1"
              />
            </div>
          </div>
          <div className="slider1">
            <div className="sliderImage">
              <img
                src={careImg2}
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
