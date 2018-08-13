import React from 'react';
import cards from '../../Utils/test';

export default () => (
  <section className="section-tours" id="section-tours">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Most popular tours</h2>
    </div>

    <div className="row">
      {cards.map(el => (
        <div key={el.id} className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className={`card__picture card__picture--${el.id}`} />
              <h4 className="card__heading">
                <span
                  className={`card__heading-span card__heading-span--${el.id}`}>
                  {el.title}
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  {el.ul.map(elem => (
                    <li key={elem}>{elem}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`card__side card__side--back card__side--back-${
                el.id
              }`}>
              <div className="card__sta">
                <div className="card__price-box">
                  <div className="card__price-only">Only</div>
                  <div className="card__price-value">{`$${el.price}`}</div>
                </div>
                <a href="#popup" className="button button--white">
									Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="u-center-text u-margin-top-huge">
      <a href="#" className="button button--green">
				Discover all tours
      </a>
    </div>
  </section>
);
