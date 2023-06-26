import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sliderbadging from '../Images/slider-badging.jpg';
import Sliderbadag from '../Images/slider-badag.jpg';

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slider {...settings} className='Carousel'>
      <div className='Wrap'>
        <img src={Sliderbadging} alt='' />
      </div>
      <div className='Wrap'>
        <img src={Sliderbadag} alt='' />
      </div>
    </Slider>
  );
}

export default ImgSlider;
