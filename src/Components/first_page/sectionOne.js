import React from 'react';

import img1 from '../../Image/nat-1-large.jpg';
import img2 from '../../Image/nat-2-large.jpg';
import img3 from '../../Image/nat-3-large.jpg';

export default () => (
  <section className="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
				Exiting tours for adventurous people
      </h2>
    </div>

    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
					You're going to fall in love with nature
        </h3>
        <p className="paragraph">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
					fugit ullam reprehenderit, voluptates placeat deleniti perferendis
					minus pariatur odio dolore eaque quos laborum quidem amet! Doloremque
					similique maiores eum tempora!
        </p>
        <h3 className="heading-tertiary u-margin-bottom-small">
					Live adventures like you never have before
        </h3>
        <p className="paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					architecto ullam dolore libero hic exercitationem nulla, officia
					possimus molestias nostrum aspernatur.
        </p>

        <a href="#" className="btn-text">
					Learn more &rarr;
        </a>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            src={img1}
            alt="img1"
            className="composition__photo composition__photo--p1"
          />
          <img
            src={img2}
            alt="img2"
            className="composition__photo composition__photo--p2"
          />
          <img
            src={img3}
            alt="img3"
            className="composition__photo composition__photo--p3"
          />
        </div>
      </div>
    </div>
  </section>
);
