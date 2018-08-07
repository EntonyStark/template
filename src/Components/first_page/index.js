import React, { Fragment } from 'react';

import Header from './header';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';

export default () => (
  <Fragment>
    <Header />
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  </Fragment>
);
