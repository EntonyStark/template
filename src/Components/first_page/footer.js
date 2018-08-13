import React from 'react';

import logo1 from '../../Image/logo-green-2x.png';
import logo2 from '../../Image/logo-green-1x.png';

const links = ['Company', 'Contact us', 'Carrers', 'Privacy policy', 'Terms'];

export default () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <img
        src={logo1}
        srcSet={`${logo2} 1x, ${logo1} 2x`}
        alt="Full logo"
        className="footer__logo"
      />
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            {links.map(el => (
              <li key={el} className="footer__item">
                <a href="#" className="footer__link">
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
					veniam eum maxime nemo ipsam, eveniet ratione magni, hic ut nulla
					recusandae molestias quod commodi ducimus fuga. Repudiandae,
					consequuntur quae. Expedita.
        </p>
      </div>
    </div>
  </footer>
);
