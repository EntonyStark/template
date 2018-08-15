import React, { Component } from 'react';

import Layout from '../Components/first_page/index';

class TestComp extends Component {
  render() {
    return <Layout {...this.props} />;
  }
}

export default TestComp;
