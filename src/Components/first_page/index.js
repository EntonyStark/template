import React, { Fragment } from 'react';

import Header from './header';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive';
import Footer from './footer';
import Navigation from './navigation';
import Popap from './popup';

export default () => (
  <Fragment>
    <Navigation />
    <Header />
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
    <Footer />
    <Popap />
  </Fragment>
);
