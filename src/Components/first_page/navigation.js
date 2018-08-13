import React from 'react';

const list = [
  { text: 'About natuors', id: '01' },
  { text: 'Your benfits', id: '02' },
  { text: 'Popular tours', id: '03' },
  { text: 'Stories', id: '04' },
  { text: 'Book now', id: '05' },
];

export default () => (
  <div className="navigation">
    <input type="checkbox" id="nav" className="navigation__checkbox" />
    <label htmlFor="nav" className="navigation__button">
      <span className="navigation__icon" />
    </label>

    <div className="navigation__background" />

    <nav className="navigation__nav">
      <ul className="navigation__list">
        {list.map(el => (
          <li key={el.id} className="navigation__item">
            <a href="#" className="navigation__link">
              <span>{el.id}</span> {el.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);
