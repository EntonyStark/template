import React from 'react';

import Header from './header';
import Navigation from './navigation';
import HotelView from './hotel-view';
import Owerview from './owerview';
import Details from './detail';

export default props => (
  <div className="container">
    <Header />
    <div className="content">
      <Navigation {...props} />
      <main className="hotel-view">
        <HotelView />
        <Owerview />
        <Details />
      </main>
    </div>
  </div>
);
