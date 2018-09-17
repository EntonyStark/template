import React from 'react';
import PropTypes from 'prop-types';

import sprite from '../../Image/sprite.svg';

const list = [
  {
    id: 1,
    icon: 'icon-home',
    link: '/test-1',
    text: 'Hotel',
  },
  {
    id: 2,
    icon: 'icon-aircraft-take-off',
    link: '/test-2',
    text: 'Flight',
  },
  {
    id: 3,
    icon: 'icon-key',
    link: '/test-3',
    text: 'Car rental',
  },
  {
    id: 4,
    icon: 'icon-map',
    link: '/test-4',
    text: 'Tours',
  },
];

const navigation = props => (
  <nav className="sidebar">
    <ul className="side-nav">
      {list.map(el => (
        <li key={el.id} className={el.link === props.location.pathname ? 'side-nav__item side-nav__item--active' : 'side-nav__item'}>
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
navigation.propTypes = {
  location: PropTypes.object,
};

export default navigation;
