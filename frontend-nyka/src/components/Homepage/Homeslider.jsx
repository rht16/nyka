import {React, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

export default class Homeslider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: 3200,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
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
        <Slider {...settings} className="mainslider">
          <div className="slider-1">
            <div className="sliderImage">
              <img
                src="https://images-static.nykaa.com/uploads/50894c9d-dc11-4be3-afef-1a3be56bf79e.jpg?tr=w-1200,cm-pad_resize"
                alt="Logo"
                className="sliderslider1"
              />
            </div>
          </div>
          <div className="slider-1">
            <div className="sliderImage">
              <img
                src="https://images-static.nykaa.com/uploads/127339f1-7564-4a22-8d70-a9fe6af35e5c.jpg?tr=w-1200,cm-pad_resize"
                alt="Logo"
                className="sliderslider1"
              />
            </div>
          </div>
          <div className="slider-1">
            <div className="sliderImage">
              <img
                src="https://images-static.nykaa.com/uploads/8f52061d-67ec-4308-ad35-b8144a61a5c5.jpg?tr=w-1200,cm-pad_resize"
                alt="Logo"
                className="sliderslider1"
              />
            </div>
          </div>
          <div className="slider-1">
            <div className="sliderImage">
              <img
                src="https://images-static.nykaa.com/uploads/4f3ab32f-8fee-433d-b811-c28513bc6dcd.gif?tr=w-1200,cm-pad_resize"
                alt="Logo"
                className="sliderslider1"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}