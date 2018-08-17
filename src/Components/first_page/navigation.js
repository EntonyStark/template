import React from 'react';

import sprite from '../../Image/sprite.svg';

const list = [
  { id: 1, icon: 'icon-home', text: 'Hotel' },
  { id: 2, icon: 'icon-aircraft-take-off', text: 'Flight' },
  { id: 3, icon: 'icon-key', text: 'Car rental' },
  { id: 4, icon: 'icon-map', text: 'Tours' },
];

export default () => (
  <nav className="sidebar">
    <ul className="side-nav">
      {list.map(el => (
        <li key={el.id} className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${sprite}#${el.icon}`} />
            </svg>
            <span>{el.text}</span>
          </a>
        </li>
      ))}
    </ul>
    <div className="legal">&copy; 2018 by Trello. All rights reserved.</div>
  </nav>
);
