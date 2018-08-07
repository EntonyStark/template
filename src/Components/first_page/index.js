import React, { Fragment } from 'react';

import Header from './header';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';

export default () => (
  <Fragment>
    <Header />
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  </Fragment>
);
