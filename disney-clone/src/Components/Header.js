import React from 'react';
import Logo from "../Images/logo.svg";

function Header() {
  return (
    <div className="Nav">
      {/* logo begins here */}
      <div className="Logo">
        <img src={Logo} />
      </div>
      {/*  logo ends here */}

      {/* navmenu begins here */}
      <div className='NavMenu'></div>
      {/* navmenu ends here */}

    </div>
  )
}

export default Header