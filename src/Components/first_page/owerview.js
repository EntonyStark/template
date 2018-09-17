import React from 'react';

import sprite from '../../Image/sprite.svg';

const stars = [1, 2, 3, 4, 5];

export default () => (
  <div className="owerview">
    <h1 className="owerview__heading">Hotel Las Palmas</h1>
    <div className="owerview__stars">
      {stars.map(el => (
        <svg key={el} className="owerview__icon-star">
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
      ))}
    </div>
    <div className="owerview__location">
      <svg className="owerview__icon-location">
        <use xlinkHref={`${sprite}#icon-location-pin`} />
      </svg>

      <button className="btn-inline">Allbufeira, Portugal</button>
    </div>
    <div className="owerview__rating">
      <div className="owerview__rating-average">8.6</div>
      <div className="owerview__rating-count">429 votes</div>
    </div>
  </div>
);
