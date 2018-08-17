import React from 'react';

import logo from '../../Image/logo.png';
import user from '../../Image/user.jpg';
import sprite from '../../Image/sprite.svg';

const header = () => (
  <header className="header">
    <img src={logo} alt="logo" className="logo" />
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels"
      />
      <button className="search__button">
        <svg className="search__icon">
          <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
        </svg>
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref={`${sprite}#icon-bookmark`} />
        </svg>
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref={`${sprite}#icon-chat`} />
        </svg>
        <span className="user-nav__notification">1</span>
      </div>
      <div className="user-nav__user">
        <img src={user} alt="User photo" className="user-nav__user-photo" />
        <span className="user-nav__user-name">Jonas</span>
      </div>
    </nav>
  </header>
);
export default header;
