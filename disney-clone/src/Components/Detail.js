import React from 'react';
import PlayIcon from "../Images/play-icon-black.png";
import TrailerIcon from "../Images/play-icon-white.png";
import GroupImage from "../Images/group-icon.png";
function Detail() {
  return (
    <div className='DetailContainer'>
      <div className='Background'>
        <img src="https://images2.alphacoders.com/444/444259.jpg" alt=""/>
      </div>

      <div className='ImageTitle'>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/0e/So_Random%21.png" alt="" />
      </div>

      <div className='Controls'>
        <div className='PlayButton'>
          <img src={PlayIcon} alt="" />
          <span>PLAY</span>
        </div>
        <div className='TrailerButton'>
          <img src={TrailerIcon} alt="" />
          <span>TRAILER</span>
        </div>
        <div className='AddButton'>
          <span>+</span>
        </div>
        <div className='GroupWatchButton'>
          <img src={GroupImage} alt="" />
        </div>
      </div>

      <div className='SubTitle'>2018 . 7m . Family, Fantacy, Kids, Animation</div>
      <div className='Description'>
        A chinese mom who's sad when her grown son leaves home
      </div>
    </div>
  )
}

export default Detail