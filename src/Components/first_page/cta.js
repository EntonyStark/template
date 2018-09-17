import React from 'react';

export default () => (
  <div className="cta">
    <h2 className="cta__book-now">Good news! We have 4 free rooms for your selected dates </h2>
    <button className="buttons">
      <span className="buttons__visible">Book now</span>
      <span className="buttons__invisible">Only 4 rooms left</span>
    </button>
  </div>
);
