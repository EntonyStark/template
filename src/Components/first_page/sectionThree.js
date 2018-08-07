import React from 'react';

// const cards = [
//   {
//     id: 1,
//     ul: [
//       '3 day tours',
//       'Up to 30 people',
//       '2 tour guides',
//       'Sleep in cozy hotels',
//       'Difficulty: easy',
//     ],
//     price: 294,
//   },
// ];

export default () => (
  <section className="section-tours">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Most popular tours</h2>
    </div>

    <div className="row">
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--1" />
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">
								The sea explorer
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: easy</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__sta">
              <div className="card__price-box">
                <div className="card__price-only">Only</div>
                <div className="card__price-value">$204</div>
              </div>
              <a href="#" className="button button--white">
								Book now!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1-of-3">333</div>
      <div className="col-1-of-3">333</div>
    </div>
  </section>
);
