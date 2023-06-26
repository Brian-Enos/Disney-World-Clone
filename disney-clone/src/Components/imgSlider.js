import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderbadging from '../Images/slider-badging.jpg';

function imgSlider() {

  let Settings = {
    dots: true,
    infinite: true,
    speed: 500, /* in milliseconds */
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  return (
    <div className='Carousel' {...Settings}>
      <div className='Wrap'>
        <img src={Sliderbadging}  alt=""/>
      </div>
    </div>
  )
}

export default imgSlider;