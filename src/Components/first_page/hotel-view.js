import React from 'react';

import img1 from '../../Image/hotel-1.jpg';
import img2 from '../../Image/hotel-2.jpg';
import img3 from '../../Image/hotel-3.jpg';

const gallery = [img1, img2, img3];

export default () => (
  <div className="gallery">
    {gallery.map(el => (
      <figure key={el} className="gallery__item">
        <img src={el} alt="Photo" className="gallery__photo" />
      </figure>
    ))}
  </div>
);
