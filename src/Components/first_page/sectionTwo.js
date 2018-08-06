import React from 'react';

const list = [
  { text: 'Explore the world', icon: 'fas fa-globe', id: 1 },
  { text: 'Meet nature', icon: 'far fa-compass', id: 2 },
  { text: 'Find your way', icon: 'far fa-map', id: 3 },
  { text: 'Live a healtheir life', icon: 'far fa-heart', id: 4 },
];

export default () => (
  <section className="section-feature">
    <div className="row">
      {list.map(el => (
        <div key={el.id} className="col-1-of-4">
          <div className="feature-box">
            <div className="basic-world">
              <i className={`feature-box__icon ${el.icon}`} />
              <h3 className="heading-tertiary u-margin-bottom-small">
                {el.text}
              </h3>
              <p className="feature-box__text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Pariatur, qui fugit reiciendis accusamus.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
