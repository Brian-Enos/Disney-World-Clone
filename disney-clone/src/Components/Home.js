import React from 'react';
import HomeSlider from "./imgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";


function Home() {
  return (
    <div className='mainContainer'>

      <HomeSlider />
      <Viewers />
      <Movies />

    </div>
  )
}

export default Home