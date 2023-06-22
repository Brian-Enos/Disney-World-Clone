import React from 'react';
import Logo from "../Images/logo.svg";
import NavImg1 from "../Images/home-icon.svg";
import SearchIcon from "../Images/search-icon.svg";
import WatchListIcon from "../Images/watchlist-icon.svg";
import OriginalsIcon from "../Images/original-icon.svg";
import MoviesIcon from "../Images/movie-icon.svg";

function Header() {
  return (
    <div className="Nav">
      {/* logo begins here */}
      <div className="Logo">
        <img src={Logo} />
      </div>
      {/*  logo ends here */}

      {/* navmenu begins here */}
      <div className='NavMenu'>

        <a>
          <img src={NavImg1} />
          <span>HOME</span>
        </a>

        <a>
          <img src={SearchIcon} />
          <span>SEARCH</span>
        </a>

        <a>
          <img src={WatchListIcon} />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src={OriginalsIcon} />
          <span>ORIGINALS</span>
        </a>

        <a>
          <img src={MoviesIcon} />
          <span>MOVIES</span>
        </a>
      </div>
      {/* navmenu ends here */}

    </div>
  )
}

export default Header