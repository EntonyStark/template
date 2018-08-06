import React, { Fragment } from 'react';

import Header from './header';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';

export default () => (
  <Fragment>
    <Header />
    <main>
      <SectionOne />
      <SectionTwo />
    </main>
  </Fragment>
);
