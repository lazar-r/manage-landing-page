import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper, SliderCard, SliderIcon, CardTextWrapper, CardTitle, CardText } from "./Testimonials.elements";
import { testimonialsObj } from "../../pages/HomePage/Data";
import { Img } from "../../globalStyles";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    }
    return (
      <div>
        <SliderWrapper>
          <Slider {...settings}>
            <SliderCard>
              <SliderIcon>
                <Img src={testimonialsObj.icon_1} />
              </SliderIcon>
              <CardTextWrapper>
                <CardTitle>{testimonialsObj.card_name_1}</CardTitle>
                <CardText>{testimonialsObj.card_text_1}</CardText>
              </CardTextWrapper>
            </SliderCard>
            <SliderCard>
              <SliderIcon>
                <Img src={testimonialsObj.icon_2} />
              </SliderIcon>
              <CardTextWrapper>
                <CardTitle>{testimonialsObj.card_name_2}</CardTitle>
                <CardText>{testimonialsObj.card_text_2}</CardText>
              </CardTextWrapper>
            </SliderCard>
            <SliderCard>
              <SliderIcon>
                <Img src={testimonialsObj.icon_3} />
              </SliderIcon>
              <CardTextWrapper>
                <CardTitle>{testimonialsObj.card_name_3}</CardTitle>
                <CardText>{testimonialsObj.card_text_3}</CardText>
              </CardTextWrapper>
            </SliderCard>
            <SliderCard>
              <SliderIcon>
                <Img src={testimonialsObj.icon_4} />
              </SliderIcon>
              <CardTextWrapper>
                <CardTitle>{testimonialsObj.card_name_4}</CardTitle>
                <CardText>{testimonialsObj.card_text_4}</CardText>
              </CardTextWrapper>
            </SliderCard>
          </Slider>
          </SliderWrapper>
      </div>
    );
  }
}