import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h1>Jedan</h1>
          </div>
          <div>
            <h1>Dva</h1>
          </div>
          <div>
            <h1>Tri</h1>
          </div>
        </Slider>
      </div>
    );
  }
}