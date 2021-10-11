import React from "react";
import Logo from "@images/Logo.png";
import "@styles/Header.sass";

import Search from './Search';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          loading="lazy"
          src={Logo}
          alt="Anime Logo"
          width="75"
          height="74.4"
        />
      </div>
      <Search/>
      <div className="header__session">
          <button className="header__session__button">
              Sigin in 
          </button>

      </div>
    </header>
  );
};

export default Header;
