import React from 'react';
import Logo from "../Images/logo.svg";
import NavImg1 from "../Images/home-icon.svg";
import SearchIcon from "../Images/search-icon.svg";
import WatchListIcon from "../Images/watchlist-icon.svg";
import OriginalsIcon from "../Images/original-icon.svg";
import MoviesIcon from "../Images/movie-icon.svg";
import SeriesIcon from "../Images/series-icon.svg";
import UserImg from "../Images/User-Image.jpg";

function Header() {
  return (
    <div className="Nav">
      {/* logo begins here */}
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>
      {/*  logo ends here */}

      {/* navmenu begins here */}
      <div className='NavMenu'>

        <a>
          <img src={NavImg1} alt="" />
          <span>HOME</span>
        </a>

        <a>
          <img src={SearchIcon} alt="" />
          <span>SEARCH</span>
        </a>

        <a>
          <img src={WatchListIcon} alt="" />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src={OriginalsIcon} alt="" />
          <span>ORIGINALS</span>
        </a>

        <a>
          <img src={MoviesIcon} alt=""/>
          <span>MOVIES</span>
        </a>

        <a>
          <img src={SeriesIcon} alt="" />
          <span>SERIES</span>
        </a>
      </div>
      {/* navmenu ends here */}

      <div className="UserImage">
        <img src={UserImg} />
      </div>

    </div>
  )
}

export default Header