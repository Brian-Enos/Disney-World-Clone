import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FirstImage from "../Images/viewers-disney.png";
import SecondImage from "../Images/viewers-marvel.png";
import ThirdImage from "../Images/viewers-national.png";
import FourthImage from "../Images/viewers-pixar.png";
import FifthImage from "../Images/viewers-starwars.png";


function Viewers() {
  return (
    <div className='ViewerContainer'>
      <div className='Wrap'>
        <img src={FirstImage} alt="" />
      </div>
      <div className='Wrap'>
        <img src={SecondImage} alt="" />
      </div>
      <div className='Wrap'>
        <img src={ThirdImage} alt="" />
      </div>
      <div className='Wrap'>
        <img src={FourthImage} alt="" />
      </div>
      <div className='Wrap'>
        <img src={FifthImage} alt="" />
      </div>

    </div>
  )
}

export default Viewers;