import React from 'react';
import logo from '../../Image/logo-white.png';

const header = () => (
  <header className="header">
    <div className="header__logo-box">
      <img src={logo} alt="Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-priamory">
        <span className="heading-priamory--main">Outdoors</span>
        <span className="heading-priamory--sub">is where life happens</span>
      </h1>
      <a href="#" className="button button--white button--animated">
				Discover our tours
      </a>
    </div>
  </header>
);
export default header;
