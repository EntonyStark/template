import React from 'react';

import img1 from '../../Image/nat-8.jpg';
import img2 from '../../Image/nat-9.jpg';
import video1 from '../../Image/video.mp4';
import video2 from '../../Image/video.webm';

export default () => (
  <section className="section-stories">
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={video1} type="video/mp4" />
        <source src={video2} type="video/webm" />
				Your browser is not supported!
      </video>
    </div>
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">We make people genuinely happy</h2>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={img1} alt="Person in a tour" className="story__image" />
          <figcaption className="story__caption">Marry Smith</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
						I had the best week ever with my family
          </h3>
          <p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						animi voluptate facere sequi soluta nemo! Eligendi nemo dignissimos
						eius ullam molestiae placeat ab sed. Natus soluta sed distinctio
						iusto quidem! Natus soluta sed distinctio iusto quidem!
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={img2} alt="Person in a tour" className="story__image" />
          <figcaption className="story__caption">Jack Wilson</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
						WOW! My life is comletely diffrent now
          </h3>
          <p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						animi voluptate facere sequi soluta nemo! Eligendi nemo dignissimos
						eius ullam molestiae placeat ab sed. Natus soluta sed distinctio
						iusto quidem! Natus soluta sed distinctio iusto quidem!
          </p>
        </div>
      </div>
    </div>
    <div className="u-center-text u-margin-top-huge">
      <a href="#" className="btn-text">
				Read all stories &rarr;
      </a>
    </div>
  </section>
);
