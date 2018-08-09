import React from 'react';

export default () => (
  <section className="section-book">
    <div className="row">
      <div className="book">
        <div className="book__form">
          <form action="#" className="form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Start booking now</h2>
            </div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder="Full name"
                required
              />
              <label htmlFor="name" className="form__label">
								Full name
              </label>
            </div>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                id="email"
                placeholder="Email adress"
                required
              />
              <label htmlFor="email" className="form__label">
								Email adress
              </label>
            </div>

            <div className="form__group u-margin-bottom-medium">
              <div className="form__radio-group">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="small"
                  name="size"
                />
                <label htmlFor="small" className="form__radio-label">
                  <span className="form__radio-button" />
									Small tour group
                </label>
              </div>

              <div className="form__radio-group">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="large"
                  name="size"
                />
                <label htmlFor="large" className="form__radio-label">
                  <span className="form__radio-button" />
									Large tour group
                </label>
              </div>
            </div>
            <div className="form_group ">
              <button className="button button--green" type="submit">
								Next step &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
