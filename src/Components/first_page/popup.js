import React from 'react';

import img1 from '../../Image/nat-8.jpg';
import img2 from '../../Image/nat-9.jpg';

export default () => (
  <div className="popup" id="popup">
    <div className="popup__content">
      <div className="popup__left">
        <img src={img1} alt="tour 1" className="popup__img" />
        <img src={img2} alt="tour 2" className="popup__img" />
      </div>
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">
					&times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">
					Start booking now
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
					Important &ndash; Please read these terms before booking
        </h3>
        <p className="popup__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus quidem similique veniam accusantium corrupti facere
					voluptatibus porro voluptatum consectetur dignissimos, at, ab unde ea
					architecto quibusdam nobis saepe inventore sit.
        </p>
        <a href="#" className="button button--green">
					Book now
        </a>
      </div>
    </div>
  </div>
);
